import { Body, Controller, Get, Header, Post, Route } from "tsoa";
import {
  RelationshipsFriendRequestsPostRequest,
  RelationshipsFriendRequestsPostResponse,
  RelationshipsFriendRequestsSentResponse,
  RelationshipsFriendsResponse,
  RelationshipsSuggestionsResponse,
} from "../api/berealApiTypes";
import {
  makeBerealGetRequest,
  makeBerealPostRequest,
} from "./moderationController";

@Route("api/relationships")
export class RelationshipsController extends Controller {
  @Get("/friends")
  public async getFriends(@Header("authorization") auth: string) {
    return await makeBerealGetRequest<RelationshipsFriendsResponse>(
      "api/relationships/friends",
      auth
    );
  }

  @Get("/friend-requests/sent")
  public async getFriendRequestsSent(@Header("authorization") auth: string) {
    return await makeBerealGetRequest<RelationshipsFriendRequestsSentResponse>(
      "api/relationships/friend-requests/sent",
      auth
    );
  }

  @Get("/friend-requests/received")
  public async getFriendRequestsReceived(
    @Header("authorization") auth: string
  ) {
    return await makeBerealGetRequest<RelationshipsSuggestionsResponse>(
      "api/relationships/friend-requests/received",
      auth
    );
  }

  @Get("/suggestions")
  public async getSuggestions(@Header("authorization") auth: string) {
    return await makeBerealGetRequest<RelationshipsSuggestionsResponse>(
      "api/relationships/suggestions",
      auth
    );
  }

  @Post("/friend-requests")
  public async postFriendRequest(
    @Header("authorization") auth: string,
    @Body() data: RelationshipsFriendRequestsPostRequest
  ) {
    return await makeBerealPostRequest<RelationshipsFriendRequestsPostResponse>(
      "api/relationships/friend-requests",
      auth,
      data
    );
  }

  @Post("/contacts")
  public async postContacts(
    @Header("authorization") auth: string,
    @Body() data: string[]
  ) {
    return await makeBerealPostRequest<unknown[]>(
      "api/relationships/contacts",
      auth,
      data
    );
  }
}
