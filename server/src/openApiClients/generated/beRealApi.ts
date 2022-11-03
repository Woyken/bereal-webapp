import FormData from 'form-data';
/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** bereal.app.repositories.remote_entities.RemoteBasicUser */
export interface BerealAppRepositoriesRemoteEntitiesRemoteBasicUser {
  id: string;
  username: string;
  fullname: string;
  profilePicture: BerealAppRepositoriesRemoteEntitiesRemoteProfilePicture;
}

/** bereal.app.repositories.usermoderation.datasources.remote.model.RemoteBlockedUserData */
export interface BerealAppRepositoriesUsermoderationDatasourcesRemoteModelRemoteBlockedUserData {
  userId: string;
  blockedAt: string;
  /** bereal.app.repositories.remote_entities.RemoteBasicUser */
  user: BerealAppRepositoriesRemoteEntitiesRemoteBasicUser;
}

/** bereal.app.repositories.usermoderation.datasources.remote.model.RemoteGetBlockedUsers */
export interface BerealAppRepositoriesUsermoderationDatasourcesRemoteModelRemoteGetBlockedUsers {
  data: BerealAppRepositoriesUsermoderationDatasourcesRemoteModelRemoteBlockedUserData[];
  next?: string | null;
}

export interface BerealAppRepositoriesUsermoderationDatasourcesRemoteModelRequestBlockUser {
  blockedUserId: string;
}

export enum VisibilityTypes {
  Friends = "friends",
  FriendsOfFriends = "friends-of-friends",
  Public = "public",
}

export interface BerealAppRepositoriesPostDatasourcesRemoteModelMyPostVisibilityRequestBody {
  visibility: VisibilityTypes;
}

export interface BerealAppRepositoriesPostDatasourcesRemoteModelMyPostCaptionRequestBody {
  caption: string;
}

export interface BerealAppRepositoriesMemoriesDatasourceRemoteApiModelRemoteMemoriesLocation {
  /** @format double */
  longitude: number;
  /** @format double */
  latitude: number;
}

export interface BerealAppRepositoriesPostDatasourcesRemoteApiImage {
  bucket: string;
  path: string;
  height: number;
  width: number;
}

export interface BerealAppRepositoriesPostDatasourcesRemoteApiPostBody {
  frontCamera: BerealAppRepositoriesPostDatasourcesRemoteApiImage;
  backCamera: BerealAppRepositoriesPostDatasourcesRemoteApiImage;
  takenAt: string;
  isLate: boolean;
  visibility?: VisibilityTypes[];
  retakeCounter: number;
  location: BerealAppRepositoriesMemoriesDatasourceRemoteApiModelRemoteMemoriesLocation;
}

export interface BerealAppRepositoriesPostDatasourcesRemoteModelFirebaseTimestamp {
  /** @format double */
  _seconds: number;
  /** @format double */
  _nanoseconds: number;
}

export interface BerealAppRepositoriesMemoriesDatasourceRemoteApiModelRemoteGetMemoriesData {
  id: string;
  thumbnail: BerealAppRepositoriesRemoteEntitiesRemoteMyProfileMedia;
  primary: BerealAppRepositoriesRemoteEntitiesRemoteMyProfileMedia;
  secondary: BerealAppRepositoriesRemoteEntitiesRemoteMyProfileMedia;
  isLate: boolean;
  memoryDay: string;
  location: BerealAppRepositoriesMemoriesDatasourceRemoteApiModelRemoteMemoriesLocation;
}

export interface BerealAppRepositoriesMemoriesDatasourceRemoteApiModelRemoteGetMemoriesResponse {
  data: BerealAppRepositoriesMemoriesDatasourceRemoteApiModelRemoteGetMemoriesData[];
  next: string | null;
  memoriesSynchronized: boolean;
}

export interface BerealAppRepositoriesFriendingDatasourceRemoteApiModelRemoteFriend {
  id: string;
  username: string;
  fullname: string;
  photoURL?: string;
  profilePicture?: BerealAppRepositoriesFriendingDatasourceRemoteApiModelRemoteProfilePicture;
  mutualFriends?: number;
  status: string;
  hashedPhoneNumber?: string;
}

export interface BerealAppRepositoriesTermsDatasourcesRemoteApiModelRemoteTerm {
  code: string;
  status: string;
  signedAt?: string;
  termUrl: string;
  version: string;
}

export interface BerealAppRepositoriesTermsDatasourcesRemoteApiModelRemoteAllTerms {
  data: BerealAppRepositoriesTermsDatasourcesRemoteApiModelRemoteTerm[];
}

export interface BerealAppRepositoriesRemoteEntitiesRemoteMyProfile {
  id: string;
  username: string;
  newUsername?: string;
  fullname: string;
  phoneNumber: string;
  profilePicture: BerealAppRepositoriesRemoteEntitiesRemoteMyProfileMedia;
  biography: string;
  location: string;
  countryCode: string;
  devices: BerealAppRepositoriesRemoteEntitiesRemoteMyProfileDevice[];
  region: RegionCodeModel;
  realmojis: BerealAppRepositoriesRemoteEntitiesRemoteMyProfileRealmoji[];
  stats: BerealAppRepositoriesRemoteEntitiesRemoteMyProfileStats;
  settings?: BerealAppRepositoriesRemoteEntitiesRemoteMyProfileSettings;
  accountDeleteScheduledAt?: string;
  canDeletePost: boolean;
  canUpdateRegion: boolean;
  createdAt: string;
  birthdate?: string;
}

export interface BerealAppRepositoriesRemoteEntitiesRemoteMyProfileStats {
  /** @format int64 */
  postTotal: number;
}

export interface BerealAppRepositoriesRemoteEntitiesRemoteMyProfileMedia {
  url: string;
  width: number;
  height: number;
}

export enum RegionCodeModel {
  AsiaEast = "asia-east",
  AsiaWest = "asia-west",
  EuropeWest = "europe-west",
  UsCentral = "us-central",
}

export interface BerealAppRepositoriesRemoteEntitiesRemoteMyProfileRealmoji {
  emoji: string;
  media: BerealAppRepositoriesRemoteEntitiesRemoteMyProfileMedia;
}

export interface BerealAppRepositoriesRemoteEntitiesRemoteMyProfileDevice {
  clientVersion: string;
  device: string;
  deviceId: string;
  pushToken: string;
  language: string;
  platform: string;
  timezone: string;
}

/** BeReal post time data */
export interface BerealAppRepositoriesMomentDatasourcesRemoteApiModelRemoteMoment {
  id: string;
  startDate: string;
  endDate: string;
  region: string;
  timezone: string;
  localDate: string;
  localTime: string;
}

export interface BerealAppRepositoriesRemoteEntitiesRemoteMyProfileSettings {
  notification: BerealAppRepositoriesRemoteEntitiesRemoteMyProfileSettingsNotification;
}

export interface BerealAppRepositoriesRemoteEntitiesRemoteMyProfileSettingsNotification {
  push: BerealAppRepositoriesRemoteEntitiesRemoteMyProfileSettingsNotificationsPush;
}

export interface BerealAppRepositoriesRemoteEntitiesRemoteMyProfileSettingsNotificationsPush {
  late: boolean;
  comment: boolean;
  mention: boolean;
  friendRequest: boolean;
  realmoji: boolean;
}

export interface BerealAppRepositoriesCommonModelGetSingleSignedUploadUrlResponse {
  data?: BerealAppRepositoriesCommonModelGetSignedUploadUrlData;
}

export interface BerealAppRepositoriesCommonModelGetSignedUploadUrlData {
  url: string;
  expireAt: string;
  path: string;
  headers: {
    "x-goog-content-length-range": string;
    "Content-Type": string;
    "Cache-Control": string;
  };
  bucket?: string;
}

/** bereal.app.repositories.image.Media */
export interface BerealAppRepositoriesImageMedia {
  bucket?: string;
  path?: string;
  width?: number;
  height?: number;
}

/** bereal.app.repositories.remote_entities.RemoteProfilePicture */
export interface BerealAppRepositoriesRemoteEntitiesRemoteProfilePicture {
  url?: string;
  width?: number;
  height?: number;
}

/** bereal.app.repositories.usermoderation.datasources.remote.model.ReportRequest */
export interface BerealAppRepositoriesUsermoderationDatasourcesRemoteModelReportRequest {
  reason?: string;
  refId?: string;
  type?: string;
}

/** bereal.app.repositories.memories.datasource.remote.api.model.RemoteGetMemoriesVideoResponse */
export interface BerealAppRepositoriesMemoriesDatasourceRemoteApiModelRemoteGetMemoriesVideoResponse {
  primary?: BerealAppRepositoriesMemoriesDatasourceRemoteApiModelRemoteMemoriesMedia;
  secondary?: BerealAppRepositoriesMemoriesDatasourceRemoteApiModelRemoteMemoriesMedia;
  status?: string;
  url?: string;
}

/** bereal.app.repositories.memories.datasource.remote.api.model.RemoteMemoriesMedia */
export interface BerealAppRepositoriesMemoriesDatasourceRemoteApiModelRemoteMemoriesMedia {
  url?: string;
  width?: string;
  height?: string;
}

export interface BerealAppRepositoriesConfigDatasourcesRemoteApiModelSettingsVersion {
  android?: string;
}

/** bereal.app.repositories.notifications.datasources.remote.api.model.RemoteNotifications */
export interface BerealAppRepositoriesNotificationsDatasourcesRemoteApiModelRemoteNotifications {
  comment?: boolean;
  friendRequest?: boolean;
  late?: boolean;
  mention?: boolean;
  realmoji?: boolean;
}

/** bereal.app.repositories.friending.datasource.remote.api.model.RemoteGetFriendsResponse */
export interface BerealAppRepositoriesFriendingDatasourceRemoteApiModelRemoteGetFriendsResponse {
  data?: BerealAppRepositoriesFriendingDatasourceRemoteApiModelRemoteFriend[];
  next?: string;
}

/** bereal.app.repositories.friending.datasource.remote.api.model.RemoteProfilePicture */
export interface BerealAppRepositoriesFriendingDatasourceRemoteApiModelRemoteProfilePicture {
  url?: string;
}

/** bereal.app.repositories.post.datasources.remote.model.RemoteDiscoveryResponse */
export interface BerealAppRepositoriesPostDatasourcesRemoteModelRemoteDiscoveryResponse {
  posts?: BerealAppRepositoriesPostDatasourcesRemoteModelRemotePost[];
  lastIndex?: string;
}

export interface BerealAppRepositoriesPostDatasourcesRemoteModelRemotePost {
  id?: string;
  bucket?: string;
  user?: BerealAppRepositoriesPostDatasourcesRemoteModelRemotePostUser;
  creationDate?: BerealAppRepositoriesPostDatasourcesRemoteModelFirebaseTimestamp;
  takenAt?: BerealAppRepositoriesPostDatasourcesRemoteModelFirebaseTimestamp;
  photoURL?: string;
  /** @format double */
  imageHeight?: number;
  /** @format double */
  imageWidth?: number;
  secondaryPhotoURL?: string;
  /** @format double */
  secondaryImageHeight?: number;
  /** @format double */
  secondaryImageWidth?: number;
  region?: string;
  mediaType?: string;
  notificationID?: string;
  ownerID?: string;
  userName?: string;
  caption?: string;
  comment?: BerealAppRepositoriesPostDatasourcesRemoteModelRemoteComment[];
  realMojis?: BerealAppRepositoriesPostDatasourcesRemoteModelRemoteRealMoji[];
  geoHash?: string;
  location?: BerealAppRepositoriesPostDatasourcesRemoteModelFirebaseLocation;
  isPublic?: boolean;
  lateInSeconds?: number;
  retakeCounter?: number;
  screenshotsV2?: BerealAppRepositoriesPostDatasourcesRemoteModelRemoteScreenshotUser[];
  visibility?: VisibilityTypes[];
}

/** bereal.app.repositories.post.datasources.remote.model.RemotePostUser */
export interface BerealAppRepositoriesPostDatasourcesRemoteModelRemotePostUser {
  id?: string;
  username?: string;
  fullname?: string;
  profilePicture?: BerealAppRepositoriesPostDatasourcesRemoteModelRemotePostUserPhoto;
}

/** bereal.app.repositories.post.datasources.remote.model.RemotePostUserPhoto */
export interface BerealAppRepositoriesPostDatasourcesRemoteModelRemotePostUserPhoto {
  url?: string;
  height?: number;
  width?: number;
}

export interface BerealAppRepositoriesPostDatasourcesRemoteModelRemoteComment {
  id?: string;
  user?: BerealAppRepositoriesPostDatasourcesRemoteModelRemotePostUser;
  text?: string;
  creationDate?: BerealAppRepositoriesPostDatasourcesRemoteModelFirebaseTimestamp;
}

/** bereal.app.repositories.post.datasources.remote.model.RemoteRealMoji */
export interface BerealAppRepositoriesPostDatasourcesRemoteModelRemoteRealMoji {
  id?: string;
  uid?: string;
  emoji?: string;
  type?: string;
  uri?: string;
  userName?: string;
  date?: BerealAppRepositoriesPostDatasourcesRemoteModelFirebaseTimestamp;
}

export interface BerealAppRepositoriesPostDatasourcesRemoteModelFirebaseLocation {
  /** @format double */
  _latitude?: number;
  /** @format double */
  _longitude?: number;
}

/** bereal.app.repositories.post.datasources.remote.model.RemoteScreenshotUser */
export interface BerealAppRepositoriesPostDatasourcesRemoteModelRemoteScreenshotUser {
  /** bereal.app.repositories.remote_entities.RemoteBasicUser */
  user?: BerealAppRepositoriesRemoteEntitiesRemoteBasicUser;
}

export interface BerealAppRepositoriesPostDatasourcesRemoteModelFofRemoteFriendOfFriendPost {
  id?: string;
  user?: object;
  moment?: object;
  primary?: object;
  secondary?: object;
  location?: object;
  realmojis?: object;
  caption?: string;
  takenAt?: string;
  /** @format int64 */
  lateInSeconds?: number;
}

export interface BerealAppRepositoriesPostDatasourcesRemoteModelRemotePostRealMojiResponse {
  id?: string;
  user?: BerealAppRepositoriesPostDatasourcesRemoteModelRemotePostUser;
  emoji?: string;
  isInstant?: boolean;
  /** bereal.app.repositories.post.datasources.remote.model.RemotePostRealMojiMediaResponse */
  media?: {
    url?: string;
    width?: number;
    /** yes, this one has a typo in their app */
    heigh?: number;
  };
  postedAt?: string;
}

export interface BerealAppRepositoriesMyuserDatasourcesRemoteApiModelResponseParentalConsentRequestResponse {
  parentalConsentRequest?: BerealAppEntitiesParentalConsentRequest;
}

export interface BerealAppEntitiesParentalConsentRequest {
  id?: string;
  email?: string;
  /** TODO figure out if it's string or int */
  status?: "APPROVED";
  locale?: string;
  isApproved?: boolean;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "https://mobile.bereal.com/api" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title BeReal API
 * @version 0.0.1
 * @license MIT (https://opensource.org/licenses/MIT)
 * @baseUrl https://mobile.bereal.com/api
 * @contact
 *
 * This is reverse engineered api for BeReal application
 * <https://github.com/Woyken/bereal-webapp>
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  moderation = {
    /**
     * No description
     *
     * @tags Moderation
     * @name DeleteModerationBlockUsersBlockedUserId
     * @request DELETE:/moderation/block-users/{blockedUserId}
     * @secure
     */
    deleteModerationBlockUsersBlockedUserId: (blockedUserId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/moderation/block-users/${blockedUserId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Moderation
     * @name GetModerationBlockUsers
     * @request GET:/moderation/block-users
     * @secure
     */
    getModerationBlockUsers: (
      query?: {
        page?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BerealAppRepositoriesUsermoderationDatasourcesRemoteModelRemoteGetBlockedUsers, any>({
        path: `/moderation/block-users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Moderation
     * @name PostModerationBlockUsers
     * @request POST:/moderation/block-users
     * @secure
     */
    postModerationBlockUsers: (
      data: BerealAppRepositoriesUsermoderationDatasourcesRemoteModelRequestBlockUser,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/moderation/block-users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Moderation
     * @name PostModerationReports
     * @request POST:/moderation/reports
     * @secure
     */
    postModerationReports: (
      data: BerealAppRepositoriesUsermoderationDatasourcesRemoteModelReportRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/moderation/reports`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  person = {
    /**
     * No description
     *
     * @tags Person
     * @name PatchPersonMeCancelDelete
     * @request PATCH:/person/me/cancel-delete
     * @secure
     */
    patchPersonMeCancelDelete: (params: RequestParams = {}) =>
      this.request<BerealAppRepositoriesRemoteEntitiesRemoteMyProfile, any>({
        path: `/person/me/cancel-delete`,
        method: "PATCH",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name GetPersonRealmojisUploadUrl
     * @request GET:/person/realmojis/upload-url
     * @secure
     */
    getPersonRealmojisUploadUrl: (
      query: {
        /** usually "image/webp" */
        mimeType: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BerealAppRepositoriesCommonModelGetSingleSignedUploadUrlResponse, any>({
        path: `/person/realmojis/upload-url`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name DeletePersonMeProfilePicture
     * @request DELETE:/person/me/profile-picture
     * @secure
     */
    deletePersonMeProfilePicture: (params: RequestParams = {}) =>
      this.request<BerealAppRepositoriesRemoteEntitiesRemoteMyProfile, any>({
        path: `/person/me/profile-picture`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PutPersonMeProfilePicture
     * @request PUT:/person/me/profile-picture
     * @secure
     */
    putPersonMeProfilePicture: (data: object, params: RequestParams = {}) =>
      this.request<BerealAppRepositoriesRemoteEntitiesRemoteMyProfile, any>({
        path: `/person/me/profile-picture`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PatchMeUsername
     * @request PATCH:/person/me/username
     * @secure
     */
    patchMeUsername: (
      data: {
        username: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BerealAppRepositoriesRemoteEntitiesRemoteMyProfile, any>({
        path: `/person/me/username`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name GetMe
     * @request GET:/person/me
     * @secure
     */
    getMe: (params: RequestParams = {}) =>
      this.request<BerealAppRepositoriesRemoteEntitiesRemoteMyProfile, any>({
        path: `/person/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PatchMe
     * @request PATCH:/person/me
     * @secure
     */
    patchMe: (
      data: {
        fullname?: string;
        birthdate?: string;
        language?: string;
        timezone?: string;
        biography?: string;
        location?: string;
        pushToken?: string;
        clientVersion?: string;
        device?: string;
        deviceId?: string;
        platform?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          fullname?: string;
          birthdate?: string;
          language?: string;
          timezone?: string;
          biography?: string;
          location?: string;
          pushToken?: string;
          clientVersion?: string;
          device?: string;
          deviceId?: string;
          platform?: string;
        },
        any
      >({
        path: `/person/me`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PostMe
     * @request POST:/person/me
     * @secure
     */
    postMe: (
      data: {
        username: string;
        fullname: string;
        birthdate: string;
        language?: string;
        pushToken?: string;
        clientVersion?: string;
        device?: string;
        deviceId?: string;
        platform?: string;
        parentalConsentRequestId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BerealAppRepositoriesRemoteEntitiesRemoteMyProfile, any>({
        path: `/person/me`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name DeleteApiPersonMe
     * @request DELETE:/person/me
     * @secure
     */
    deleteApiPersonMe: (params: RequestParams = {}) =>
      this.request<BerealAppRepositoriesRemoteEntitiesRemoteMyProfile, any>({
        path: `/person/me`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PutPersonMeRealmojis
     * @request PUT:/person/me/realmojis
     * @secure
     */
    putPersonMeRealmojis: (
      data: {
        media?: BerealAppRepositoriesImageMedia;
        emoji?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BerealAppRepositoriesRemoteEntitiesRemoteMyProfile, any>({
        path: `/person/me/realmojis`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name DeletePersonMeRealmojis
     * @request DELETE:/person/me/realmojis
     * @secure
     */
    deletePersonMeRealmojis: (
      data: {
        emoji?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BerealAppRepositoriesRemoteEntitiesRemoteMyProfile, any>({
        path: `/person/me/realmojis`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PatchPersonMeRegion
     * @request PATCH:/person/me/region
     * @secure
     */
    patchPersonMeRegion: (
      data: {
        region?: RegionCodeModel;
      },
      params: RequestParams = {},
    ) =>
      this.request<BerealAppRepositoriesRemoteEntitiesRemoteMyProfile, any>({
        path: `/person/me/region`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name GetPersonProfilesUserId
     * @request GET:/person/profiles/{userId}
     * @secure
     */
    getPersonProfilesUserId: (userId: string, params: RequestParams = {}) =>
      this.request<
        {
          id?: string;
          username?: string;
          fullname?: string;
          /** bereal.app.repositories.remote_entities.ProfilePicture */
          profilePicture?: {
            url?: string;
            /** @format int64 */
            width?: number;
            /** @format int64 */
            height?: number;
          };
          biography?: string;
          location?: string;
          /** bereal.app.repositories.remote_entities.Relationship */
          relationship?: {
            status?: string;
            /** bereal.app.repositories.remote_entities.CommonFriends */
            commonFriends?: {
              /** bereal.app.repositories.remote_entities.Sample */
              sample?: {
                id?: string;
                username?: string;
                fullname?: string;
                /** bereal.app.repositories.remote_entities.ProfilePicture */
                profilePicture?: {
                  url?: string;
                  /** @format int64 */
                  width?: number;
                  /** @format int64 */
                  height?: number;
                };
              }[];
              total?: string;
            };
            friendedAt?: string;
          };
          createdAt?: string;
        },
        any
      >({
        path: `/person/profiles/${userId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  notification = {
    /**
     * No description
     *
     * @tags Notification
     * @name PutNotificationPushMe
     * @request PUT:/notification/push/me
     * @secure
     */
    putNotificationPushMe: (
      data: {
        pushToken?: string;
        clientVersion?: string;
        device?: string;
        deviceId?: string;
        language?: string;
        timezone?: string;
        platform?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/notification/push/me`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  feeds = {
    /**
     * No description
     *
     * @tags Feeds
     * @name GetFeedsMemories
     * @request GET:/feeds/memories
     * @secure
     */
    getFeedsMemories: (
      query?: {
        from?: string;
        limit?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BerealAppRepositoriesMemoriesDatasourceRemoteApiModelRemoteGetMemoriesResponse, any>({
        path: `/feeds/memories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Feeds
     * @name GetFeedsMemoriesVideo
     * @request GET:/feeds/memories/video
     * @secure
     */
    getFeedsMemoriesVideo: (params: RequestParams = {}) =>
      this.request<BerealAppRepositoriesMemoriesDatasourceRemoteApiModelRemoteGetMemoriesResponse, any>({
        path: `/feeds/memories/video`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Feeds
     * @name DeleteFeedsMemoriesVideo
     * @request DELETE:/feeds/memories/video
     * @secure
     */
    deleteFeedsMemoriesVideo: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/feeds/memories/video`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Feeds
     * @name DeleteMemory
     * @request DELETE:/feeds/memories/{id}
     * @secure
     */
    deleteMemory: (id: string, params: RequestParams = {}) =>
      this.request<BerealAppRepositoriesMemoriesDatasourceRemoteApiModelRemoteGetMemoriesResponse[], any>({
        path: `/feeds/memories/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Feeds
     * @name GetFeedsDiscovery
     * @request GET:/feeds/discovery
     * @secure
     */
    getFeedsDiscovery: (
      query?: {
        limit?: string;
        lastIndex?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BerealAppRepositoriesPostDatasourcesRemoteModelRemoteDiscoveryResponse, any>({
        path: `/feeds/discovery`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Feeds
     * @name GetFeedsFriendsOfFriends
     * @summary Your GET endpoint
     * @request GET:/feeds/friends-of-friends
     * @secure
     */
    getFeedsFriendsOfFriends: (
      query?: {
        page?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          prev?: string;
          next?: string;
          data?: BerealAppRepositoriesPostDatasourcesRemoteModelFofRemoteFriendOfFriendPost[];
        },
        any
      >({
        path: `/feeds/friends-of-friends`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Feeds
     * @name GetFriends
     * @request GET:/feeds/friends
     * @secure
     */
    getFriends: (params: RequestParams = {}) =>
      this.request<BerealAppRepositoriesPostDatasourcesRemoteModelRemotePost, any>({
        path: `/feeds/friends`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  settings = {
    /**
     * No description
     *
     * @tags Settings
     * @name GetSettings
     * @summary Your GET endpoint
     * @request GET:/settings
     * @secure
     */
    getSettings: (params: RequestParams = {}) =>
      this.request<
        {
          mandatoryVersions?: BerealAppRepositoriesConfigDatasourcesRemoteApiModelSettingsVersion;
          recommendedVersions?: BerealAppRepositoriesConfigDatasourcesRemoteApiModelSettingsVersion;
          /** bereal.app.repositories.config.datasources.remote.api.model.SettingsStorage */
          storage?: {
            bucket?: string;
          };
          /** bereal.app.repositories.config.datasources.remote.api.model.SettingsPolling */
          polling?: {
            /** @format int64 */
            feedsFriends?: number;
            /** @format int64 */
            moment?: number;
          };
          /** bereal.app.repositories.config.datasources.remote.api.model.SettingsFeatureFlags */
          featureFlags?: {
            friendsOfFriendsFeed?: boolean;
            messaging?: boolean;
          };
          /** bereal.app.repositories.config.datasources.remote.api.model.SettingsGdpr */
          gdpr?: {
            updateDate?: string;
          };
        },
        any
      >({
        path: `/settings`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name GetSettingsNotificationPush
     * @request GET:/settings/notification-push
     * @secure
     */
    getSettingsNotificationPush: (params: RequestParams = {}) =>
      this.request<BerealAppRepositoriesNotificationsDatasourcesRemoteApiModelRemoteNotifications, any>({
        path: `/settings/notification-push`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description TODO
     *
     * @tags Settings
     * @name PutSettingsNotificationPush
     * @request PUT:/settings/notification-push
     * @secure
     */
    putSettingsNotificationPush: (
      data: BerealAppRepositoriesNotificationsDatasourcesRemoteApiModelRemoteNotifications,
      params: RequestParams = {},
    ) =>
      this.request<BerealAppRepositoriesNotificationsDatasourcesRemoteApiModelRemoteNotifications, any>({
        path: `/settings/notification-push`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  bereal = {
    /**
     * No description
     *
     * @tags Moments
     * @name GetBerealMomentsLast
     * @summary Your GET endpoint
     * @request GET:/bereal/moments/last
     * @secure
     */
    getBerealMomentsLast: (params: RequestParams = {}) =>
      this.request<BerealAppRepositoriesMomentDatasourcesRemoteApiModelRemoteMoment, any>({
        path: `/bereal/moments/last`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Moments
     * @name GetBerealMomentsLastRegionCode
     * @summary Your GET endpoint
     * @request GET:/bereal/moments/last/{regionCode}
     * @secure
     */
    getBerealMomentsLastRegionCode: (
      regionCode: "asia-east" | "asia-west" | "europe-west" | "us-central",
      params: RequestParams = {},
    ) =>
      this.request<BerealAppRepositoriesMomentDatasourcesRemoteApiModelRemoteMoment, any>({
        path: `/bereal/moments/last/${regionCode}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  terms = {
    /**
     * No description
     *
     * @tags Terms
     * @name PutTermsCode
     * @request PUT:/terms/{code}
     * @secure
     */
    putTermsCode: (
      code: string,
      data: {
        status?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BerealAppRepositoriesTermsDatasourcesRemoteApiModelRemoteTerm, any>({
        path: `/terms/${code}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Terms
     * @name GetTermsCode
     * @request GET:/terms/{code}
     * @secure
     */
    getTermsCode: (code: string, params: RequestParams = {}) =>
      this.request<BerealAppRepositoriesTermsDatasourcesRemoteApiModelRemoteTerm, any>({
        path: `/terms/${code}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Terms
     * @name GetTerms
     * @request GET:/terms
     * @secure
     */
    getTerms: (params: RequestParams = {}) =>
      this.request<BerealAppRepositoriesTermsDatasourcesRemoteApiModelRemoteAllTerms, any>({
        path: `/terms`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  relationships = {
    /**
     * No description
     *
     * @tags Relationships
     * @name GetRelationshipsFriendsCommonOtherUserId
     * @request GET:/relationships/friends/common/{otherUserId}
     * @secure
     */
    getRelationshipsFriendsCommonOtherUserId: (
      otherUserId: string,
      query?: {
        page?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BerealAppRepositoriesFriendingDatasourceRemoteApiModelRemoteGetFriendsResponse, any>({
        path: `/relationships/friends/common/${otherUserId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Relationships
     * @name GetSuggestions
     * @request GET:/relationships/suggestions
     * @secure
     */
    getSuggestions: (
      query?: {
        page?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BerealAppRepositoriesFriendingDatasourceRemoteApiModelRemoteGetFriendsResponse, any>({
        path: `/relationships/suggestions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Relationships
     * @name PatchRelationshipsFriendRequestsUid
     * @request PATCH:/relationships/friend-requests/{uid}
     * @secure
     */
    patchRelationshipsFriendRequestsUid: (
      uid: string,
      data: {
        /**
         * bereal.app.repositories.friending.datasource.remote.api.FriendRequestStatus
         *
         * TODO, check if this is string or integer
         */
        status?: "accepted" | "canceled" | "rejected";
      },
      params: RequestParams = {},
    ) =>
      this.request<BerealAppRepositoriesFriendingDatasourceRemoteApiModelRemoteFriend, any>({
        path: `/relationships/friend-requests/${uid}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Relationships
     * @name DeleteRelationshipsSuggestionsUserId
     * @request DELETE:/relationships/suggestions/{userId}
     * @secure
     */
    deleteRelationshipsSuggestionsUserId: (userId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/relationships/suggestions/${userId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Relationships
     * @name GetFriendRequestsReceived
     * @request GET:/relationships/friend-requests/received
     * @secure
     */
    getFriendRequestsReceived: (
      query?: {
        page?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BerealAppRepositoriesFriendingDatasourceRemoteApiModelRemoteGetFriendsResponse, any>({
        path: `/relationships/friend-requests/received`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Relationships
     * @name GetFriendRequestsSent
     * @request GET:/relationships/friend-requests/sent
     * @secure
     */
    getFriendRequestsSent: (
      query?: {
        page?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BerealAppRepositoriesFriendingDatasourceRemoteApiModelRemoteGetFriendsResponse, any>({
        path: `/relationships/friend-requests/sent`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Relationships
     * @name PostRelationshipsContacts
     * @request POST:/relationships/contacts
     * @secure
     */
    postRelationshipsContacts: (
      data: {
        phoneNumbers?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BerealAppRepositoriesFriendingDatasourceRemoteApiModelRemoteFriend[], any>({
        path: `/relationships/contacts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Relationships
     * @name DeleteRelationshipsFriendsUid
     * @request DELETE:/relationships/friends/{uid}
     * @secure
     */
    deleteRelationshipsFriendsUid: (uid: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/relationships/friends/${uid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Relationships
     * @name PostRelationshipsFriendRequests
     * @request POST:/relationships/friend-requests
     * @secure
     */
    postRelationshipsFriendRequests: (
      data: {
        source?: string;
        userId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BerealAppRepositoriesFriendingDatasourceRemoteApiModelRemoteFriend, any>({
        path: `/relationships/friend-requests`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Relationships
     * @name GetRelationshipsFriends
     * @request GET:/relationships/friends
     * @secure
     */
    getRelationshipsFriends: (
      query?: {
        page?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BerealAppRepositoriesFriendingDatasourceRemoteApiModelRemoteGetFriendsResponse, any>({
        path: `/relationships/friends`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  content = {
    /**
     * No description
     *
     * @tags Content
     * @name PatchContentPostsVisibility
     * @request PATCH:/content/posts/visibility
     * @secure
     */
    patchContentPostsVisibility: (
      data: BerealAppRepositoriesPostDatasourcesRemoteModelMyPostVisibilityRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/content/posts/visibility`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name PostNewPost
     * @request POST:/content/posts
     * @secure
     */
    postNewPost: (data: BerealAppRepositoriesPostDatasourcesRemoteApiPostBody, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/content/posts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name DeleteContentPosts
     * @request DELETE:/content/posts
     * @secure
     */
    deleteContentPosts: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/content/posts`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name GetPostsUploadUrl
     * @request GET:/content/posts/upload-url
     * @secure
     */
    getPostsUploadUrl: (
      query?: {
        mimeType?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: BerealAppRepositoriesCommonModelGetSignedUploadUrlData[];
        },
        any
      >({
        path: `/content/posts/upload-url`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name PatchPostCaption
     * @request PATCH:/content/posts/caption
     * @secure
     */
    patchPostCaption: (
      data: BerealAppRepositoriesPostDatasourcesRemoteModelMyPostCaptionRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/content/posts/caption`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name DeleteContentRealmojis
     * @request DELETE:/content/realmojis
     * @secure
     */
    deleteContentRealmojis: (
      query: {
        postId: string;
      },
      data: {
        realmojiIds?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/content/realmojis`,
        method: "DELETE",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name PutContentRealmojis
     * @request PUT:/content/realmojis
     * @secure
     */
    putContentRealmojis: (
      query: {
        postId: string;
      },
      data: {
        emoji?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BerealAppRepositoriesPostDatasourcesRemoteModelRemotePostRealMojiResponse, any>({
        path: `/content/realmojis`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name PostContentScreenshots
     * @request POST:/content/screenshots
     * @secure
     */
    postContentScreenshots: (
      query: {
        postId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/content/screenshots`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name GetRealmojisUploadUrl
     * @request GET:/content/realmojis/upload-url
     * @secure
     */
    getRealmojisUploadUrl: (params: RequestParams = {}) =>
      this.request<BerealAppRepositoriesCommonModelGetSingleSignedUploadUrlResponse, any>({
        path: `/content/realmojis/upload-url`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name DeleteContentComments
     * @request DELETE:/content/comments
     * @secure
     */
    deleteContentComments: (
      data: {
        commentIds?: string[];
      },
      query?: {
        postId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/content/comments`,
        method: "DELETE",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name PostContentComments
     * @request POST:/content/comments
     * @secure
     */
    postContentComments: (
      data: {
        content?: string;
      },
      query?: {
        postId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id?: string;
          user?: BerealAppRepositoriesPostDatasourcesRemoteModelRemotePostUser;
          postedAt?: string;
          content?: string;
        },
        any
      >({
        path: `/content/comments`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name PutContentRealmojisInstant
     * @request PUT:/content/realmojis/instant
     * @secure
     */
    putContentRealmojisInstant: (
      query: {
        postId: string;
      },
      data: {
        media?: BerealAppRepositoriesImageMedia;
      },
      params: RequestParams = {},
    ) =>
      this.request<BerealAppRepositoriesPostDatasourcesRemoteModelRemotePostRealMojiResponse, any>({
        path: `/content/realmojis/instant`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  parentalConsentRequest = {
    /**
     * No description
     *
     * @tags ParentalConsent
     * @name GetParentalConsentRequestId
     * @request GET:/parental-consent-request/{id}
     * @secure
     */
    getParentalConsentRequestId: (id: string, params: RequestParams = {}) =>
      this.request<BerealAppRepositoriesMyuserDatasourcesRemoteApiModelResponseParentalConsentRequestResponse, any>({
        path: `/parental-consent-request/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ParentalConsent
     * @name PostParentalConsentRequest
     * @request POST:/parental-consent-request
     * @secure
     */
    postParentalConsentRequest: (
      data: {
        email?: string;
        birthdate?: string;
        location?: string;
        fullname?: string;
        locale?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BerealAppRepositoriesMyuserDatasourcesRemoteApiModelResponseParentalConsentRequestResponse, any>({
        path: `/parental-consent-request`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  search = {
    /**
     * No description
     *
     * @tags Search
     * @name GetSearchProfile
     * @request GET:/search/profile
     * @secure
     */
    getSearchProfile: (
      query?: {
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BerealAppRepositoriesFriendingDatasourceRemoteApiModelRemoteGetFriendsResponse, any>({
        path: `/search/profile`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
