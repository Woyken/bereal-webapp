import { Request as ERequest } from "express";
import { Body, Controller, Get, Header, Path, Put, Request, Route } from "tsoa";
import { getAbortSignalForRequest } from "../utils/abortSignalForRequest";
import { createBeRealClient } from "../utils/beRealApiClient";
import { getHeadersWithAuth } from "../utils/headersUtils";

@Route("api/terms")
export class TermsController extends Controller {
  private api = createBeRealClient().terms;

  @Put("/terms/{code}")
  public async putTermsCode(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Path("code") code: string,
    @Body() data: Parameters<typeof this.api.putTermsCode>[1]
  ) {
    const response = await this.api.putTermsCode(code, data, {
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Get("/terms/{code}")
  public async getTermsCode(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Path("code") code: string
  ) {
    const response = await this.api.getTermsCode(code, {
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Get("/")
  public async getTerms(
    @Request() req: ERequest,
    @Header("authorization") auth: string
  ) {
    const response = await this.api.getTerms({
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }
}
