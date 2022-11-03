import { Body, Controller, Get, Header, Path, Put, Route } from "tsoa";
import { createBeRealClient } from "../utils/beRealApiClient";
import { getHeadersWithAuth } from "../utils/headersUtils";

@Route("api/terms")
export class TermsController extends Controller {
  private api = createBeRealClient().terms;

  @Get("/")
  public async getTerms(@Header("authorization") auth: string) {
    const response = await this.api.getTerms(getHeadersWithAuth(auth));
    return response.data;
  }

  @Get("/terms/{code}")
  public async getTermsCode(
    @Header("authorization") auth: string,
    @Path("code") code: string
  ) {
    const response = await this.api.getTermsCode(
      code,
      getHeadersWithAuth(auth)
    );
    return response.data;
  }

  @Put("/terms/{code}")
  public async putTermsCode(
    @Header("authorization") auth: string,
    @Path("code") code: string,
    @Body() data: Parameters<typeof this.api.putTermsCode>[1]
  ) {
    const response = await this.api.putTermsCode(
      code,
      data,
      getHeadersWithAuth(auth)
    );
    return response.data;
  }
}
