import { Request as ERequest } from "express";
import { Body, Controller, Get, Header, Path, Put, Request, Route } from "tsoa";
import { getAbortSignalForRequest } from "../utils/abortSignalForRequest";
import { createBeRealClient } from "../utils/beRealApiClient";
import { getHeadersWithAuth } from "../utils/headersUtils";

@Route("api/notification")
export class notificationController extends Controller {
  private api = createBeRealClient().notification;

  @Put("/push/me")
  public async putNotificationPushMe(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Body() data: Parameters<typeof this.api.putNotificationPushMe>[0]
  ) {
    const response = await this.api.putNotificationPushMe(data, {
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }
}
