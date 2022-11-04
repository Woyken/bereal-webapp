import { Request as ERequest } from "express";
import { Body, Controller, Get, Header, Path, Put, Request, Route } from "tsoa";
import { getAbortSignalForRequest } from "../utils/abortSignalForRequest";
import { createBeRealClient } from "../utils/beRealApiClient";
import { getHeadersWithAuth } from "../utils/headersUtils";

@Route("api/bereal")
export class berealController extends Controller {
  private api = createBeRealClient().bereal;

  @Get("/moments/last")
  public async getBerealMomentsLast(
    @Request() req: ERequest,
    @Header("authorization") auth: string
  ) {
    const response = await this.api.getBerealMomentsLast({
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Get("/moments/last/{regionCode}")
  public async getBerealMomentsLastRegionCode(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Path("regionCode")
    regionCode: Parameters<typeof this.api.getBerealMomentsLastRegionCode>[0]
  ) {
    const response = await this.api.getBerealMomentsLastRegionCode(regionCode, {
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }
}
