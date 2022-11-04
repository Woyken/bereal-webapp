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
import {
  BerealAppRepositoriesPostDatasourcesRemoteApiPostBody,
  BerealAppRepositoriesPostDatasourcesRemoteModelMyPostCaptionRequestBody,
  BerealAppRepositoriesPostDatasourcesRemoteModelMyPostVisibilityRequestBody,
} from "../openApiClients/generated/beRealApi";
import { getAbortSignalForRequest } from "../utils/abortSignalForRequest";
import { createBeRealClient } from "../utils/beRealApiClient";
import { getHeadersWithAuth } from "../utils/headersUtils";

@Route("api/content")
export class ContentController extends Controller {
  private api = createBeRealClient().content;

  @Get("/posts/upload-url")
  public async getPostsUploadUrl(
    @Request() req: ERequest,
    @Header("authorization") auth: string
  ) {
    const response = await this.api.getPostsUploadUrl(
      { mimeType: "image/webp" },
      { ...getHeadersWithAuth(auth), signal: getAbortSignalForRequest(req) }
    );
    return response.data;
  }

  @Get("/realmojis/upload-url")
  public async getRealmojisUploadUrl(
    @Request() req: ERequest,
    @Header("authorization") auth: string
  ) {
    const response = await this.api.getRealmojisUploadUrl({
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Patch("/posts/visibility")
  public async patchPostVisibility(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Body()
    data: BerealAppRepositoriesPostDatasourcesRemoteModelMyPostVisibilityRequestBody
  ) {
    const response = await this.api.patchContentPostsVisibility(data, {
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Patch("/posts/caption")
  public async patchPostCaption(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Body()
    data: BerealAppRepositoriesPostDatasourcesRemoteModelMyPostCaptionRequestBody
  ) {
    const response = await this.api.patchPostCaption(data, {
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Post("/posts")
  public async postNewPost(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Body() data: BerealAppRepositoriesPostDatasourcesRemoteApiPostBody
  ) {
    const response = await this.api.postNewPost(data, {
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }
}
