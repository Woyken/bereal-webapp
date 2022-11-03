import { Body, Controller, Get, Header, Post, Route } from "tsoa";
import { Api } from "../openApiClients/generated/beRealApi";
import { getHeadersWithAuth } from "../utils/headersUtils";

@Route("api/relationships")
export class RelationshipsController extends Controller {
  private api = new Api().relationships;

  @Get("/friends")
  public async getFriends(@Header("authorization") auth: string) {
    const response = await this.api.getRelationshipsFriends(
      {},
      getHeadersWithAuth(auth)
    );
    return response.data;
  }

  @Get("/friend-requests/sent")
  public async getFriendRequestsSent(@Header("authorization") auth: string) {
    const response = await this.api.getFriendRequestsSent(
      {},
      getHeadersWithAuth(auth)
    );
    return response.data;
  }

  @Get("/friend-requests/received")
  public async getFriendRequestsReceived(
    @Header("authorization") auth: string
  ) {
    const response = await this.api.getFriendRequestsReceived(
      {},
      getHeadersWithAuth(auth)
    );
    return response.data;
  }

  @Get("/suggestions")
  public async getSuggestions(@Header("authorization") auth: string) {
    const response = await this.api.getSuggestions(
      {},
      getHeadersWithAuth(auth)
    );
    return response.data;
  }

  @Post("/friend-requests")
  public async postFriendRequest(
    @Header("authorization") auth: string,
    @Body() data: Parameters<typeof this.api.postRelationshipsFriendRequests>[0]
  ) {
    const response = await this.api.postRelationshipsFriendRequests(
      data,
      getHeadersWithAuth(auth)
    );
    return response.data;
  }

  @Post("/contacts")
  public async postContacts(
    @Header("authorization") auth: string,
    @Body() data: Parameters<typeof this.api.postRelationshipsContacts>[0]
  ) {
    const response = await this.api.postRelationshipsContacts(
      data,
      getHeadersWithAuth(auth)
    );
    return response.data;
  }
}
