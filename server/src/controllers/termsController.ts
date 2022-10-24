import { Controller, Get, Header, Route } from "tsoa";
import { TermsResponse } from "../api/berealApiTypes";
import { makeBerealGetRequest } from "./moderationController";

@Route("api/terms")
export class TermsController extends Controller {
  @Get("/")
  public async getTerms(@Header("authorization") auth: string) {
    return await makeBerealGetRequest<TermsResponse>("api/terms", auth);
  }
}
