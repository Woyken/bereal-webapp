import { Request as ERequest } from "express";
import {
  Body,
  Controller,
  Get,
  Header,
  Patch,
  Post,
  Request,
  Route,
} from "tsoa";
import { getAbortSignalForRequest } from "../utils/abortSignalForRequest";
import { createBeRealClient } from "../utils/beRealApiClient";
import { getHeadersWithAuth } from "../utils/headersUtils";

@Route("api/person")
export class PersonController extends Controller {
  private api = createBeRealClient().person;

  @Get("/me")
  public async getMe(
    @Request() req: ERequest,
    @Header("authorization") auth: string
  ) {
    const response = await this.api.getMe({
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Patch("/me")
  public async patchMe(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Body() data: Parameters<typeof this.api.patchMe>[0]
  ) {
    const response = await this.api.patchMe(data, {
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Post("/me")
  public async postMe(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Body() data: Parameters<typeof this.api.postMe>[0]
  ) {
    const response = await this.api.postMe(data, {
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Patch("/me/username")
  public async patchMeUsername(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Body() data: Parameters<typeof this.api.patchMeUsername>[0]
  ) {
    const response = await this.api.patchMeUsername(data, {
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }
}
