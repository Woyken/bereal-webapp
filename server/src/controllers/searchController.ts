import { Request as ERequest } from "express";
import { Controller, Get, Header, Query, Request, Route } from "tsoa";
import { getAbortSignalForRequest } from "../utils/abortSignalForRequest";
import { createBeRealClient } from "../utils/beRealApiClient";
import { getHeadersWithAuth } from "../utils/headersUtils";

@Route("api/search")
export class searchController extends Controller {
  private api = createBeRealClient().search;

  @Get("/profile")
  public async getSearchProfile(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Query("query") query: string
  ) {
    const response = await this.api.getSearchProfile(
      { query },
      {
        ...getHeadersWithAuth(auth),
        signal: getAbortSignalForRequest(req),
      }
    );
    return response.data;
  }
}
