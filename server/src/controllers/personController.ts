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
  Put,
  Query,
  Request,
  Route,
  UploadedFile,
} from "tsoa";
import FormData from "form-data";
import { getAbortSignalForRequest } from "../utils/abortSignalForRequest";
import { createBeRealClient } from "../utils/beRealApiClient";
import { getHeadersWithAuth } from "../utils/headersUtils";
import { RegionCodeModel } from "../openApiClients/generated/beRealApi";

@Route("api/person")
export class PersonController extends Controller {
  private api = createBeRealClient().person;

  @Patch("/me/cancel-delete")
  public async patchPersonMeCancelDelete(
    @Request() req: ERequest,
    @Header("authorization") auth: string
  ) {
    const response = await this.api.patchPersonMeCancelDelete({
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Get("/realmojis/upload-url")
  public async getPersonRealmojisUploadUrl(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Query("mimeType") mimeType: string
  ) {
    const response = await this.api.getPersonRealmojisUploadUrl(
      { mimeType },
      {
        ...getHeadersWithAuth(auth),
        signal: getAbortSignalForRequest(req),
      }
    );
    return response.data;
  }

  @Delete("/me/profile-picture")
  public async deletePersonMeProfilePicture(
    @Request() req: ERequest,
    @Header("authorization") auth: string
  ) {
    const response = await this.api.deletePersonMeProfilePicture({
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Put("/me/profile-picture")
  public async putPersonMeProfilePicture(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @UploadedFile() file: Express.Multer.File
  ) {
    const formData = new FormData();
    formData.append("file", file.buffer, {
      filename: file.filename,
      contentType: file.mimetype,
      knownLength: file.size,
    });
    const response = await this.api.putPersonMeProfilePicture(formData, {
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Patch("/me/username")
  public async patchPersonMeUsername(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Body() data: Parameters<typeof this.api.patchMeUsername>[0]
  ) {
    const response = await this.api.patchMeUsername(data, {
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Get("/me")
  public async getPersonMe(
    @Request() req: ERequest,
    @Header("authorization") auth: string
  ) {
    const response = await this.api.getMe({
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Patch("/me")
  public async patchPersonMe(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Body() data: Parameters<typeof this.api.patchMe>[0]
  ) {
    const response = await this.api.patchMe(data, {
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Post("/me")
  public async postPersonMe(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Body() data: Parameters<typeof this.api.postMe>[0]
  ) {
    const response = await this.api.postMe(data, {
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Delete("/me")
  public async deletePersonMe(
    @Request() req: ERequest,
    @Header("authorization") auth: string
  ) {
    const response = await this.api.deleteApiPersonMe({
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Put("/me/realmojis")
  public async putPersonMeRealmojis(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Body() data: Parameters<typeof this.api.putPersonMeRealmojis>[0]
  ) {
    const response = await this.api.putPersonMeRealmojis(data, {
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }

  @Delete("/me/realmojis")
  public async deletePersonMeRealmojis(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Query("emoji") emoji: string
  ) {
    const response = await this.api.deletePersonMeRealmojis(
      { emoji },
      {
        ...getHeadersWithAuth(auth),
        signal: getAbortSignalForRequest(req),
      }
    );
    return response.data;
  }

  @Patch("/me/region")
  public async patchPersonMeRegion(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Query("region") region: RegionCodeModel
  ) {
    const response = await this.api.patchPersonMeRegion(
      { region },
      {
        ...getHeadersWithAuth(auth),
        signal: getAbortSignalForRequest(req),
      }
    );
    return response.data;
  }

  @Get("/profiles/{userId}")
  public async getPersonProfilesUserId(
    @Request() req: ERequest,
    @Header("authorization") auth: string,
    @Path("userId") userId: string
  ) {
    const response = await this.api.getPersonProfilesUserId(userId, {
      ...getHeadersWithAuth(auth),
      signal: getAbortSignalForRequest(req),
    });
    return response.data;
  }
}
