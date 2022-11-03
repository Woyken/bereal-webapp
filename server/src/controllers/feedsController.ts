import { Controller, Delete, Get, Header, Path, Route } from "tsoa";
import { Api } from "../openApiClients/generated/beRealApi";
import { getHeadersWithAuth } from "../utils/headersUtils";

@Route("api/feeds")
export class FeedsController extends Controller {
  private api = new Api().feeds;

  @Get("/friends")
  public async getFriends(@Header("authorization") auth: string) {
    const response = await this.api.getFriends(getHeadersWithAuth(auth));
    return response.data;
  }

  @Get("/discovery")
  public async getDiscovery(@Header("authorization") auth: string) {
    const response = await this.api.getFeedsDiscovery(
      {},
      getHeadersWithAuth(auth)
    );
    return response.data;
  }

  @Get("/memories")
  public async getMemories(@Header("authorization") auth: string) {
    const response = await this.api.getFeedsMemories(
      {},
      getHeadersWithAuth(auth)
    );
    return response.data;
  }

  @Delete("/memories/{memoryId}")
  public async deleteMemory(
    @Header("authorization") auth: string,
    @Path("memoryId") memoryId: string
  ) {
    const response = await this.api.deleteMemory(
      memoryId,
      getHeadersWithAuth(auth)
    );
    return response.data;
  }
}
