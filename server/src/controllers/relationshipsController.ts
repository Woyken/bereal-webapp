import { Request as ERequest } from "express";
import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Patch,
  Path,
  Post,
  Query,
  Request,
  Route,
} from "tsoa";
import { getAbortSignalForRequest } from "../utils/abortSignalForRequest";
import { createBeRealClient } from "../utils/beRealApiClient";
import { getHeadersWithAuth } from "../utils/headersUtils";

@Route("api/relationships")
export class RelationshipsController extends Controller {
  private api = createBeRealClient().relationships;

  @Get("/friends/common/{otherUserId}")
  public async getRelationshipsFriendsCommon(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Path("otherUserId") otherUserId: string,
    @Query("page") page?: string
  ) {
    const response = await this.api.getRelationshipsFriendsCommonOtherUserId(
      otherUserId,
      { page },
      {
        ...getHeadersWithAuth(auth),
        signal: getAbortSignalForRequest(req),
      }
    );
    return response.data;
  }

  @Get("/suggestions")
  public async getRelationshipsSuggestions(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Query("page") page?: string
  ) {
    const response = await this.api.getSuggestions(
      { page },
      { ...getHeadersWithAuth(auth), signal: getAbortSignalForRequest(req) }
    );
    return response.data;
  }

  @Patch("/friend-requests/{uid}")
  public async patchRelationshipsFriendRequests(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Path("uid") uid: string,
    @Body()
    data: Parameters<typeof this.api.patchRelationshipsFriendRequestsUid>[1]
  ) {
    const response = await this.api.patchRelationshipsFriendRequestsUid(
      uid,
      data,
      {
        ...getHeadersWithAuth(auth),
        signal: getAbortSignalForRequest(req),
      }
    );
    return response.data;
  }

  @Delete("/suggestions/{userId}")
  public async deleteRelationshipsSuggestions(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Path("userId") userId: string
  ) {
    const response = await this.api.deleteRelationshipsSuggestionsUserId(
      userId,
      {
        ...getHeadersWithAuth(auth),
        signal: getAbortSignalForRequest(req),
      }
    );
    return response.data;
  }

  @Get("/friend-requests/received")
  public async getRelationshipsFriendRequestsReceived(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Query("page") page?: string
  ) {
    const response = await this.api.getFriendRequestsReceived(
      { page },
      { ...getHeadersWithAuth(auth), signal: getAbortSignalForRequest(req) }
    );
    return response.data;
  }

  @Get("/friend-requests/sent")
  public async getRelationshipsFriendRequestsSent(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Query("page") page?: string
  ) {
    const response = await this.api.getFriendRequestsSent(
      { page },
      { ...getHeadersWithAuth(auth), signal: getAbortSignalForRequest(req) }
    );
    return response.data;
  }

  @Post("/contacts")
  public async postRelationshipsContacts(
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

  @Delete("/friends/{uid}")
  public async deleteRelationshipsFriends(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Path("uid") uid: string
  ) {
    const response = await this.api.deleteRelationshipsFriendsUid(uid, {
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Post("/friend-requests")
  public async postRelationshipsFriendRequests(
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

  @Get("/friends")
  public async getRelationshipsFriends(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Query("page") page?: string
  ) {
    const response = await this.api.getRelationshipsFriends(
      { page },
      { ...getHeadersWithAuth(auth), signal: getAbortSignalForRequest(req) }
    );
    return response.data;
  }
}
