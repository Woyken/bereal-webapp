import { Body, Controller, Get, Header, Patch, Post, Route } from "tsoa";
import {
  Api,
  BerealAppRepositoriesPostDatasourcesRemoteApiPostBody,
  BerealAppRepositoriesPostDatasourcesRemoteModelMyPostCaptionRequestBody,
  BerealAppRepositoriesPostDatasourcesRemoteModelMyPostVisibilityRequestBody,
} from "../openApiClients/generated/beRealApi";
import { getHeadersWithAuth } from "../utils/headersUtils";

@Route("api/content")
export class ContentController extends Controller {
  private api = new Api().content;

  @Get("/posts/upload-url")
  public async getPostsUploadUrl(@Header("authorization") auth: string) {
    const response = await this.api.getPostsUploadUrl(
      { mimeType: "image/webp" },
      getHeadersWithAuth(auth)
    );
    return response.data;
  }

  @Get("/realmojis/upload-url")
  public async getRealmojisUploadUrl(@Header("authorization") auth: string) {
    const response = await this.api.getRealmojisUploadUrl(
      getHeadersWithAuth(auth)
    );
    return response.data;
  }

  @Patch("/posts/visibility")
  public async patchPostVisibility(
    @Header("authorization") auth: string,
    @Body()
    data: BerealAppRepositoriesPostDatasourcesRemoteModelMyPostVisibilityRequestBody
  ) {
    const response = await this.api.patchContentPostsVisibility(
      data,
      getHeadersWithAuth(auth)
    );
    return response.data;
  }

  @Patch("/posts/caption")
  public async patchPostCaption(
    @Header("authorization") auth: string,
    @Body()
    data: BerealAppRepositoriesPostDatasourcesRemoteModelMyPostCaptionRequestBody
  ) {
    const response = await this.api.patchPostCaption(
      data,
      getHeadersWithAuth(auth)
    );
    return response.data;
  }

  @Post("/posts")
  public async postNewPost(
    @Header("authorization") auth: string,
    @Body() data: BerealAppRepositoriesPostDatasourcesRemoteApiPostBody
  ) {
    const response = await this.api.postNewPost(data, getHeadersWithAuth(auth));
    return response.data;
  }
}
