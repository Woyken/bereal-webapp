import { Body, Controller, Get, Header, Patch, Post, Route } from "tsoa";
import {
  ContentPostsCaptionPatchRequest,
  ContentPostsPostRequest,
  ContentPostsUploadUrlGetResponse,
  ContentPostsVisibilityPatchRequest,
  ContentRealmojisUploadUrlGetResponse,
} from "../api/berealApiTypes";
import {
  makeBerealGetRequest,
  makeBerealPatchRequest,
  makeBerealPostRequest,
} from "./moderationController";

@Route("api/content")
export class ContentController extends Controller {
  @Get("/posts/upload-url")
  public async getPostsUploadUrl(@Header("authorization") auth: string) {
    return await makeBerealGetRequest<ContentPostsUploadUrlGetResponse[]>(
      "api/content/posts/upload-url",
      auth
    );
  }

  @Get("/realmojis/upload-url")
  public async getRealmojisUploadUrl(@Header("authorization") auth: string) {
    return await makeBerealGetRequest<ContentRealmojisUploadUrlGetResponse[]>(
      "api/content/realmojis/upload-url",
      auth
    );
  }

  @Patch("/posts/visibility")
  public async patchPostVisibility(
    @Header("authorization") auth: string,
    @Body() data: ContentPostsVisibilityPatchRequest
  ) {
    return await makeBerealPatchRequest(
      "api/content/posts/visibility",
      auth,
      data
    );
  }

  @Patch("/posts/caption")
  public async patchPostCaption(
    @Header("authorization") auth: string,
    @Body() data: ContentPostsCaptionPatchRequest
  ) {
    return await makeBerealPatchRequest(
      "api/content/posts/caption",
      auth,
      data
    );
  }

  @Post("/posts")
  public async postNewPost(
    @Header("authorization") auth: string,
    @Body() data: ContentPostsPostRequest
  ) {
    return await makeBerealPostRequest("api/content/posts", auth, data);
  }
}
