import { Request as ERequest } from "express";
import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Path,
  Post,
  Request,
  Route,
} from "tsoa";
import { BerealAppRepositoriesUsermoderationDatasourcesRemoteModelRequestBlockUser } from "../openApiClients/generated/beRealApi";
import { getAbortSignalForRequest } from "../utils/abortSignalForRequest";
import { createBeRealClient } from "../utils/beRealApiClient";
import { getHeadersWithAuth } from "../utils/headersUtils";

@Route("api/moderation")
export class ModerationController extends Controller {
  private api = createBeRealClient().moderation;

  @Get("/block-users")
  public async getBlockedUsers(
    @Request() req: ERequest,
    @Header("authorization") auth: string
  ) {
    const response = await this.api.getModerationBlockUsers(
      {},
      { ...getHeadersWithAuth(auth), signal: getAbortSignalForRequest(req) }
    );
    return response.data;
  }

  @Post("/block-users")
  public async postBlockUser(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Body()
    data: BerealAppRepositoriesUsermoderationDatasourcesRemoteModelRequestBlockUser
  ) {
    const response = await this.api.postModerationBlockUsers(data, {
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Delete("/block-users/{userId}")
  public async deleteBlockUser(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Path("userId") userId: string
  ) {
    const response = await this.api.deleteModerationBlockUsersBlockedUserId(
      userId,
      { ...getHeadersWithAuth(auth), signal: getAbortSignalForRequest(req) }
    );
    return response.data;
  }
}
