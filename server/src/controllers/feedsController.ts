import { Request as ERequest } from "express";
import { Controller, Delete, Get, Header, Path, Request, Route } from "tsoa";
import { getAbortSignalForRequest } from "../utils/abortSignalForRequest";
import { createBeRealClient } from "../utils/beRealApiClient";
import { getHeadersWithAuth } from "../utils/headersUtils";

@Route("api/feeds")
export class FeedsController extends Controller {
  private api = createBeRealClient().feeds;

  @Get("/friends")
  public async getFriends(
    @Request() req: ERequest,
    @Header("authorization") auth: string
  ) {
    const response = await this.api.getFriends({
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Get("/discovery")
  public async getDiscovery(
    @Request() req: ERequest,
    @Header("authorization") auth: string
  ) {
    const response = await this.api.getFeedsDiscovery(
      {},
      { ...getHeadersWithAuth(auth), signal: getAbortSignalForRequest(req) }
    );
    return response.data;
  }

  @Get("/memories")
  public async getMemories(
    @Request() req: ERequest,
    @Header("authorization") auth: string
  ) {
    const response = await this.api.getFeedsMemories(
      {},
      { ...getHeadersWithAuth(auth), signal: getAbortSignalForRequest(req) }
    );
    return response.data;
  }

  @Delete("/memories/{memoryId}")
  public async deleteMemory(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Path("memoryId") memoryId: string
  ) {
    const response = await this.api.deleteMemory(memoryId, {
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }
}
