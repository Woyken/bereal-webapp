import axios from "axios";
import { Body, Controller, Delete, Get, Header, Path, Post, Route } from "tsoa";
import { ModerationBlockUsersRequest, ModerationBlockUsersResponse } from "../api/berealApiTypes";
import envConfig from "../envConfig";

export async function makeBerealGetRequest<T>(route: string, auth: string) {
  const response = await axios.get<T>(
    new URL(route, envConfig.berealUrl).toString(),
    {
      headers: {
        authorization: auth,
      },
    }
  );
  return response.data;
}

export async function makeBerealPostRequest<T>(
  route: string,
  auth: string,
  data: unknown
) {
  const response = await axios.post<T>(
    new URL(route, envConfig.berealUrl).toString(),
    data,
    {
      headers: {
        authorization: auth,
      },
    }
  );
  return response.data;
}

export async function makeBerealDeleteRequest<T>(route: string, auth: string) {
  const response = await axios.delete<T>(
    new URL(route, envConfig.berealUrl).toString(),
    {
      headers: {
        authorization: auth,
      },
    }
  );
  return response.data;
}

export async function makeBerealPatchRequest<T>(
  route: string,
  auth: string,
  data: unknown
) {
  const response = await axios.patch<T>(
    new URL(route, envConfig.berealUrl).toString(),
    data,
    {
      headers: {
        authorization: auth,
      },
    }
  );
  return response.data;
}

@Route("api/moderation")
export class ModerationController extends Controller {
  @Get("/block-users")
  public async getBlockedUsers(@Header("authorization") auth: string) {
    return await makeBerealGetRequest<ModerationBlockUsersResponse>(
      "api/moderation/block-users",
      auth
    );
  }

  @Post("/block-users")
  public async postBlockUser(
    @Header("authorization") auth: string,
    @Body() data: ModerationBlockUsersRequest
  ) {
    return await makeBerealPostRequest<undefined>(
      "api/moderation/block-users",
      auth,
      data
    );
  }

  @Delete("/block-users/{userId}")
  public async deleteBlockUser(
    @Header("authorization") auth: string,
    @Path("userId") userId: string
  ) {
    return await makeBerealDeleteRequest(
      `api/moderation/block-users/${encodeURI(userId)}`,
      auth
    );
  }
}
