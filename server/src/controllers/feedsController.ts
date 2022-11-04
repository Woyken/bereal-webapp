import { Request as ERequest } from "express";
import {
  Controller,
  Delete,
  Get,
  Header,
  Path,
  Query,
  Request,
  Route,
} from "tsoa";
import { getAbortSignalForRequest } from "../utils/abortSignalForRequest";
import { createBeRealClient } from "../utils/beRealApiClient";
import { getHeadersWithAuth } from "../utils/headersUtils";

@Route("api/feeds")
export class FeedsController extends Controller {
  private api = createBeRealClient().feeds;

  @Get("/memories")
  public async getFeedsMemories(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Query("from") from?: string,
    @Query("limit") limit?: string
  ) {
    const response = await this.api.getFeedsMemories(
      { from, limit },
      { ...getHeadersWithAuth(auth), signal: getAbortSignalForRequest(req) }
    );
    return response.data;
  }

  @Get("/memories/video")
  public async getFeedsMemoriesVideo(
    @Request() req: ERequest,
    @Header("authorization") auth: string
  ) {
    const response = await this.api.getFeedsMemoriesVideo({
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Delete("/memories/video")
  public async deleteFeedsMemoriesVideo(
    @Request() req: ERequest,
    @Header("authorization") auth: string
  ) {
    const response = await this.api.deleteFeedsMemoriesVideo({
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Delete("/memories/{memoryId}")
  public async deleteFeedsMemory(
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

  @Get("/discovery")
  public async getFeedsDiscovery(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Query("lastIndex") lastIndex?: string,
    @Query("limit") limit?: string
  ) {
    const response = await this.api.getFeedsDiscovery(
      { lastIndex, limit },
      { ...getHeadersWithAuth(auth), signal: getAbortSignalForRequest(req) }
    );
    return response.data;
  }

  @Get("/friends-of-friends")
  public async getFeedsFriendsOfFriends(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Query("page") page?: string
  ) {
    const response = await this.api.getFeedsFriendsOfFriends(
      { page },
      { ...getHeadersWithAuth(auth), signal: getAbortSignalForRequest(req) }
    );
    return response.data;
  }

  @Get("/friends")
  public async getFeedsFriends(
    @Request() req: ERequest,
    @Header("authorization") auth: string
  ) {
    const response = await this.api.getFriends({
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }
}
