import { Request as ERequest } from "express";
import { Body, Controller, Get, Header, Path, Put, Request, Route } from "tsoa";
import { BerealAppRepositoriesNotificationsDatasourcesRemoteApiModelRemoteNotifications } from "../openApiClients/generated/beRealApi";
import { getAbortSignalForRequest } from "../utils/abortSignalForRequest";
import { createBeRealClient } from "../utils/beRealApiClient";
import { getHeadersWithAuth } from "../utils/headersUtils";

@Route("api/settings")
export class settingsController extends Controller {
  private api = createBeRealClient().settings;

  @Get("/")
  public async getSettings(
    @Request() req: ERequest,
    @Header("authorization") auth: string
  ) {
    const response = await this.api.getSettings({
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Get("/notification-push")
  public async getSettingsNotificationPush(
    @Request() req: ERequest,
    @Header("authorization") auth: string
  ) {
    const response = await this.api.getSettingsNotificationPush({
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Put("/notification-push")
  public async putSettingsNotificationPush(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Body()
    data: BerealAppRepositoriesNotificationsDatasourcesRemoteApiModelRemoteNotifications
  ) {
    const response = await this.api.putSettingsNotificationPush(data, {
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }
}
