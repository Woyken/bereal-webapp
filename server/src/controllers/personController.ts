import { Body, Controller, Get, Header, Patch, Post, Route } from "tsoa";
import { createBeRealClient } from "../utils/beRealApiClient";
import { getHeadersWithAuth } from "../utils/headersUtils";

@Route("api/person")
export class PersonController extends Controller {
  private api = createBeRealClient().person;

  @Get("/me")
  public async getMe(@Header("authorization") auth: string) {
    const response = await this.api.getMe(getHeadersWithAuth(auth));
    return response.data;
  }

  @Patch("/me")
  public async patchMe(
    @Header("authorization") auth: string,
    @Body() data: Parameters<typeof this.api.patchMe>[0]
  ) {
    const response = await this.api.patchMe(data, getHeadersWithAuth(auth));
    return response.data;
  }

  @Post("/me")
  public async postMe(
    @Header("authorization") auth: string,
    @Body() data: Parameters<typeof this.api.postMe>[0]
  ) {
    const response = await this.api.postMe(data, getHeadersWithAuth(auth));
    return response.data;
  }

  @Patch("/me/username")
  public async patchMeUsername(
    @Header("authorization") auth: string,
    @Body() data: Parameters<typeof this.api.patchMeUsername>[0]
  ) {
    const response = await this.api.patchMeUsername(
      data,
      getHeadersWithAuth(auth)
    );
    return response.data;
  }
}
