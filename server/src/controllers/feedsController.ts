import { Controller, Delete, Get, Header, Path, Route } from "tsoa";
import {
  FeedsDiscoveryResponse,
  FeedsFriendsResponse,
  FeedsMemoriesResponse,
} from "../api/berealApiTypes";
import { makeBerealGetRequest } from "./moderationController";

@Route("api/feeds")
export class FeedsController extends Controller {
  @Get("/friends")
  public async getFriends(@Header("authorization") auth: string) {
    return await makeBerealGetRequest<FeedsFriendsResponse[]>(
      "api/feeds/friends",
      auth
    );
  }

  @Get("/discovery")
  public async getDiscovery(@Header("authorization") auth: string) {
    return await makeBerealGetRequest<FeedsDiscoveryResponse[]>(
      "api/feeds/discovery",
      auth
    );
  }

  @Get("/memories")
  public async getMemories(@Header("authorization") auth: string) {
    return await makeBerealGetRequest<FeedsMemoriesResponse[]>(
      "api/feeds/memories",
      auth
    );
  }

  @Delete("/memories/{memoryId}")
  public async deleteMemory(
    @Header("authorization") auth: string,
    @Path("memoryId") memoryId: string
  ) {
    return await makeBerealGetRequest<FeedsMemoriesResponse[]>(
      `api/feeds/memories/${encodeURI(memoryId)}`,
      auth
    );
  }
}
