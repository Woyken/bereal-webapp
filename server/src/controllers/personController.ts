import { Body, Controller, Get, Header, Patch, Post, Route } from "tsoa";
import {
  MeResponse,
  PersonMePatchRequest,
  PersonMePostRequest,
  PersonMeUsernamePatchRequest,
} from "../api/berealApiTypes";
import {
  makeBerealGetRequest,
  makeBerealPatchRequest,
  makeBerealPostRequest,
} from "./moderationController";

@Route("api/person")
export class PersonController extends Controller {
  @Get("/me")
  public async getMe(@Header("authorization") auth: string) {
    return await makeBerealGetRequest<MeResponse>("api/person/me", auth);
  }

  @Patch("/me")
  public async patchMe(
    @Header("authorization") auth: string,
    @Body() data: PersonMePatchRequest
  ) {
    return await makeBerealPatchRequest<MeResponse>(
      "api/person/me",
      auth,
      data
    );
  }

  @Post("/me")
  public async postMe(
    @Header("authorization") auth: string,
    @Body() data: PersonMePostRequest
  ) {
    return await makeBerealPostRequest<undefined>("api/person/me", auth, data);
  }

  @Patch("/me/username")
  public async patchMeUsername(
    @Header("authorization") auth: string,
    @Body() data: PersonMeUsernamePatchRequest
  ) {
    return await makeBerealPatchRequest<MeResponse>(
      "api/suggestions",
      auth,
      data
    );
  }
}
