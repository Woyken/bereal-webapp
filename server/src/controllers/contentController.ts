import { Request as ERequest } from "express";
import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Patch,
  Post,
  Put,
  Query,
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

  @Patch("/posts/visibility")
  public async patchContentPostsVisibility(
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

  @Post("/posts")
  public async postContentPosts(
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

  @Delete("/posts")
  public async deleteContentPosts(
    @Request() req: ERequest,
    @Header("authorization") auth: string
  ) {
    const response = await this.api.deleteContentPosts({
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Get("/posts/upload-url")
  public async getContentPostsUploadUrl(
    @Request() req: ERequest,
    @Header("authorization") auth: string
  ) {
    const response = await this.api.getPostsUploadUrl(
      { mimeType: "image/webp" },
      { ...getHeadersWithAuth(auth), signal: getAbortSignalForRequest(req) }
    );
    return response.data;
  }

  @Patch("/posts/caption")
  public async patchContentPostsCaption(
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

  @Delete("/realmojis")
  public async deleteContentRealmojis(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Query("postId") postId: string,
    @Query("realmojiIds") realmojiIds: string[]
  ) {
    const response = await this.api.deleteContentRealmojis(
      { postId },
      { realmojiIds },
      {
        ...getHeadersWithAuth(auth),
        signal: getAbortSignalForRequest(req),
      }
    );
    return response.data;
  }

  @Put("/realmojis")
  public async putContentRealmojis(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Query("postId") postId: string,
    @Query("emoji") emoji: string
  ) {
    const response = await this.api.putContentRealmojis(
      { postId },
      { emoji },
      {
        ...getHeadersWithAuth(auth),
        signal: getAbortSignalForRequest(req),
      }
    );
    return response.data;
  }

  @Post("/screenshots")
  public async postContentScreenshots(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Query("postId") postId: string
  ) {
    const response = await this.api.postContentScreenshots(
      { postId },
      {
        ...getHeadersWithAuth(auth),
        signal: getAbortSignalForRequest(req),
      }
    );
    return response.data;
  }

  @Get("/realmojis/upload-url")
  public async getContentRealmojisUploadUrl(
    @Request() req: ERequest,
    @Header("authorization") auth: string
  ) {
    const response = await this.api.getRealmojisUploadUrl({
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Delete("/comments")
  public async deleteContentComments(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Query("postId") postId: string,
    @Query("commentIds") commentIds: string[]
  ) {
    const response = await this.api.deleteContentComments(
      { commentIds },
      { postId },
      {
        ...getHeadersWithAuth(auth),
        signal: getAbortSignalForRequest(req),
      }
    );
    return response.data;
  }

  @Post("/comments")
  public async postContentComments(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Query("postId") postId: string,
    @Body() data: Parameters<typeof this.api.postContentComments>[0]
  ) {
    const response = await this.api.postContentComments(
      data,
      { postId },
      {
        ...getHeadersWithAuth(auth),
        signal: getAbortSignalForRequest(req),
      }
    );
    return response.data;
  }

  @Put("/realmojis/instant")
  public async putContentRealmojisInstant(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Query("postId") postId: string,
    @Body() data: Parameters<typeof this.api.putContentRealmojisInstant>[1]
  ) {
    const response = await this.api.putContentRealmojisInstant(
      { postId },
      data,
      {
        ...getHeadersWithAuth(auth),
        signal: getAbortSignalForRequest(req),
      }
    );
    return response.data;
  }
}
