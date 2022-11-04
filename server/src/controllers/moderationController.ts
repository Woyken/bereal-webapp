import { Request as ERequest } from "express";
import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Path,
  Post,
  Query,
  Request,
  Route,
} from "tsoa";
import {
  BerealAppRepositoriesUsermoderationDatasourcesRemoteModelReportRequest,
  BerealAppRepositoriesUsermoderationDatasourcesRemoteModelRequestBlockUser,
} from "../openApiClients/generated/beRealApi";
import { getAbortSignalForRequest } from "../utils/abortSignalForRequest";
import { createBeRealClient } from "../utils/beRealApiClient";
import { getHeadersWithAuth } from "../utils/headersUtils";

@Route("api/moderation")
export class ModerationController extends Controller {
  private api = createBeRealClient().moderation;

  @Delete("/block-users/{userId}")
  public async deleteModerationBlockUsers(
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

  @Get("/block-users")
  public async getModerationBlockUsers(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Query("page") page?: string
  ) {
    const response = await this.api.getModerationBlockUsers(
      { page },
      { ...getHeadersWithAuth(auth), signal: getAbortSignalForRequest(req) }
    );
    return response.data;
  }

  @Post("/block-users")
  public async postModerationBlockUsers(
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

  @Post("/reports")
  public async postModerationReports(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Body()
    data: BerealAppRepositoriesUsermoderationDatasourcesRemoteModelReportRequest
  ) {
    const response = await this.api.postModerationReports(data, {
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }
}
