import { Request as ERequest } from "express";
import { Body, Controller, Get, Header, Post, Request, Route } from "tsoa";
import { getAbortSignalForRequest } from "../utils/abortSignalForRequest";
import { createBeRealClient } from "../utils/beRealApiClient";
import { getHeadersWithAuth } from "../utils/headersUtils";

@Route("api/relationships")
export class RelationshipsController extends Controller {
  private api = createBeRealClient().relationships;

  @Get("/friends")
  public async getFriends(
    @Request() req: ERequest,
    @Header("authorization") auth: string
  ) {
    const response = await this.api.getRelationshipsFriends(
      {},
      { ...getHeadersWithAuth(auth), signal: getAbortSignalForRequest(req) }
    );
    return response.data;
  }

  @Get("/friend-requests/sent")
  public async getFriendRequestsSent(
    @Request() req: ERequest,
    @Header("authorization") auth: string
  ) {
    const response = await this.api.getFriendRequestsSent(
      {},
      { ...getHeadersWithAuth(auth), signal: getAbortSignalForRequest(req) }
    );
    return response.data;
  }

  @Get("/friend-requests/received")
  public async getFriendRequestsReceived(
    @Request() req: ERequest,
    @Header("authorization") auth: string
  ) {
    const response = await this.api.getFriendRequestsReceived(
      {},
      { ...getHeadersWithAuth(auth), signal: getAbortSignalForRequest(req) }
    );
    return response.data;
  }

  @Get("/suggestions")
  public async getSuggestions(
    @Request() req: ERequest,
    @Header("authorization") auth: string
  ) {
    const response = await this.api.getSuggestions(
      {},
      { ...getHeadersWithAuth(auth), signal: getAbortSignalForRequest(req) }
    );
    return response.data;
  }

  @Post("/friend-requests")
  public async postFriendRequest(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Body() data: Parameters<typeof this.api.postRelationshipsFriendRequests>[0]
  ) {
    const response = await this.api.postRelationshipsFriendRequests(data, {
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Post("/contacts")
  public async postContacts(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Body() data: Parameters<typeof this.api.postRelationshipsContacts>[0]
  ) {
    const response = await this.api.postRelationshipsContacts(data, {
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }
}
