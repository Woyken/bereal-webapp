import { Request as ERequest } from "express";
import {
  Body,
  Controller,
  Get,
  Header,
  Path,
  Post,
  Request,
  Route,
} from "tsoa";
import { getAbortSignalForRequest } from "../utils/abortSignalForRequest";
import { createBeRealClient } from "../utils/beRealApiClient";
import { getHeadersWithAuth } from "../utils/headersUtils";

@Route("api/parental-consent-request")
export class parentalConsentController extends Controller {
  private api = createBeRealClient().parentalConsentRequest;

  @Get("/{id}")
  public async getParentalConsentRequest(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Path("id") id: string
  ) {
    const response = await this.api.getParentalConsentRequestId(id, {
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Post("/")
  public async postParentalConsentRequest(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Body() data: Parameters<typeof this.api.postParentalConsentRequest>[0]
  ) {
    const response = await this.api.postParentalConsentRequest(data, {
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }
}
