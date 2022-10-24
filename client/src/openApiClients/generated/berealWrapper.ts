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

export interface DatumUser {
  id: string;
  username: string;
  fullname: string;
  profilePicture: null;
}

export interface ModerationBlockUsersResponseDatum {
  userId: string;
  /** @format date-time */
  blockedAt: string;
  user: DatumUser;
}

export interface ModerationBlockUsersResponse {
  data: ModerationBlockUsersResponseDatum[];
}

export interface ModerationBlockUsersRequest {
  blockedUserId: string;
}

export interface ProfilePicture {
  url: string;
  /** @format double */
  width: number;
  /** @format double */
  height: number;
}

export interface FeedsFriendsResponseUser {
  id: string;
  username: string;
  profilePicture?: ProfilePicture;
}

export enum MediaType {
  Late = "late",
  Photo = "photo",
}

export enum Region {
  EuropeWest = "europe-west",
  UsCentral = "us-central",
}

export enum Bucket {
  StorageBereAl = "storage.bere.al",
}

export interface PostLocation {
  /** @format double */
  _latitude: number;
  /** @format double */
  _longitude: number;
}

export interface CreationDate {
  /** @format double */
  _seconds: number;
  /** @format double */
  _nanoseconds: number;
}

export interface FluffyProfilePicture {
  /** @format double */
  height: number;
  /** @format double */
  width: number;
  url: string;
}

export interface PostUser {
  id: string;
  username: string;
  profilePicture?: FluffyProfilePicture;
}

export enum Type {
  HeartEyes = "heartEyes",
  Instant = "instant",
  Laughing = "laughing",
  Surprised = "surprised",
  Up = "up",
}

export interface FeedsFriendsResponseRealMoji {
  id: string;
  uid: string;
  userName: string;
  user: PostUser;
  emoji: string;
  type: Type;
  uri: string;
  date: CreationDate;
}

export interface FeedsFriendsResponse {
  id: string;
  notificationID: string;
  ownerID: string;
  userName: string;
  user: FeedsFriendsResponseUser;
  mediaType: MediaType;
  region: Region;
  bucket: Bucket;
  photoURL: string;
  /** @format double */
  imageWidth: number;
  /** @format double */
  imageHeight: number;
  secondaryPhotoURL: string;
  /** @format double */
  secondaryImageHeight: number;
  /** @format double */
  secondaryImageWidth: number;
  members: string[];
  /** @format double */
  lateInSeconds: number;
  isPublic: boolean;
  location?: PostLocation;
  caption?: string;
  /** @format double */
  retakeCounter: number;
  creationDate: CreationDate;
  /** @format double */
  updatedAt: number;
  takenAt: CreationDate;
  comment: any[];
  realMojis: FeedsFriendsResponseRealMoji[];
  screenshots: any[];
  screenshotsV2: any[];
  visibility?: string[];
}

export interface PurpleProfilePicture {
  /** @format double */
  height: number;
  /** @format double */
  width: number;
  url: string;
}

export interface PurpleUser {
  id: string;
  username: string;
  profilePicture: PurpleProfilePicture;
}

export interface PostRealMoji {
  id: string;
  uid: string;
  userName: string;
  user: PurpleUser;
  emoji: string;
  type: string;
  uri: string;
  date: CreationDate;
}

export interface Post {
  id: string;
  notificationID: string;
  ownerID: string;
  userName: string;
  user: PostUser;
  mediaType: MediaType;
  region: Region;
  bucket: Bucket;
  photoURL: string;
  /** @format double */
  imageWidth: number;
  /** @format double */
  imageHeight: number;
  secondaryPhotoURL: string;
  /** @format double */
  secondaryImageHeight: number;
  /** @format double */
  secondaryImageWidth: number;
  /** @format double */
  lateInSeconds: number;
  isPublic: boolean;
  location?: PostLocation;
  /** @format double */
  retakeCounter: number;
  creationDate: CreationDate;
  /** @format double */
  updatedAt: number;
  takenAt: CreationDate;
  comment: any[];
  realMojis: PostRealMoji[];
  screenshots: any[];
  screenshotsV2: any[];
}

export interface FeedsDiscoveryResponse {
  posts: Post[];
  lastIndex: string;
}

export interface DatumLocation {
  /** @format double */
  longitude: number;
  /** @format double */
  latitude: number;
}

export interface FeedsMemoriesResponseDatum {
  id: string;
  thumbnail: ProfilePicture;
  primary: ProfilePicture;
  secondary: ProfilePicture;
  isLate: boolean;
  /** @format date-time */
  memoryDay: string;
  location: DatumLocation | null;
}

export interface FeedsMemoriesResponse {
  data: FeedsMemoriesResponseDatum[];
  next: null;
  memoriesSynchronized: boolean;
}

export interface SendVerificationCodeResponse {
  sessionInfo: string;
}

/**
 * From T, pick a set of properties whose keys are in the union K
 */
export interface PickSendVerificationCodeRequestExcludeKeysIosReceipt {
  phoneNumber: string;
}

/**
 * Construct a type with the properties of T except for those in type K.
 */
export type OmitSendVerificationCodeRequestIosReceipt = PickSendVerificationCodeRequestExcludeKeysIosReceipt;

export interface VerifyPhoneNumberResponse {
  idToken: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  isNewUser: boolean;
  phoneNumber: string;
}

export interface VerifyPhoneNumberRequest {
  sessionInfo: string;
  code: string;
  operation: string;
}

export interface RefreshTokenResponse {
  access_token: string;
  expires_in: string;
  token_type: string;
  refresh_token: string;
  id_token: string;
  user_id: string;
  project_id: string;
}

export interface RefreshTokenRequest {
  refresh_token: string;
  grant_type: string;
}

export interface Realmoji {
  emoji: string;
  media: ProfilePicture;
}

export interface Device {
  clientVersion: string;
  device: string;
  deviceId: string;
  pushToken: string;
  platform: string;
  language: string;
  timezone: string;
}

export interface Stats {
  /** @format double */
  postTotal: number;
}

export interface MeResponse {
  id: string;
  username: string;
  /** @format date-time */
  birthdate: string;
  fullname: string;
  profilePicture: ProfilePicture;
  realmojis: Realmoji[];
  devices: Device[];
  stats: Stats;
  canDeletePost: boolean;
  canUpdateRegion: boolean;
  phoneNumber: string;
  biography: string;
  location: string;
  countryCode: string;
  region: Region;
  /** @format date-time */
  createdAt: string;
  newUsername?: string;
}

export interface PersonMePatchRequest {
  biography: string;
}

export interface PersonMePostRequest {
  username: string;
  /** @format date-time */
  birthdate: string;
}

export interface PersonMeUsernamePatchRequest {
  username: string;
}

export interface RelationshipsFriendsResponseDatum {
  id: string;
  username: string;
  fullname: string;
  status: string;
  profilePicture?: ProfilePicture;
}

export interface RelationshipsFriendsResponse {
  data: RelationshipsFriendsResponseDatum[];
  next: null;
}

export interface RelationshipsFriendRequestsSentResponseDatum {
  id: string;
  username: string;
  fullname: string;
  status: string;
  profilePicture: ProfilePicture;
  /** @format double */
  mutualFriends: number;
  /** @format date-time */
  updatedAt: string;
}

export interface RelationshipsFriendRequestsSentResponse {
  data: RelationshipsFriendRequestsSentResponseDatum[];
  next: null;
}

export interface RelationshipsSuggestionsResponse {
  data: any[];
  next: null;
}

export interface RelationshipsFriendRequestsPostResponse {
  /** @format double */
  statusCode: number;
  errorKey: null;
  fields: null;
  /** @format date-time */
  timestamp: string;
  requestId: string;
}

export interface RelationshipsFriendRequestsPostRequest {
  userId: string;
  source: string;
}

export interface TermsResponseDatum {
  code: string;
  status: string;
  /** @format date-time */
  signedAt?: string;
  termUrl: string;
  version: string;
}

export interface TermsResponse {
  data: TermsResponseDatum[];
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "/";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title server
 * @version 1.0.0
 * @license ISC
 * @baseUrl /
 * @contact
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @name GetBlockedUsers
     * @request GET:/api/moderation/block-users
     */
    getBlockedUsers: (params: RequestParams = {}) =>
      this.request<ModerationBlockUsersResponse, any>({
        path: `/api/moderation/block-users`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PostBlockUser
     * @request POST:/api/moderation/block-users
     */
    postBlockUser: (data: ModerationBlockUsersRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/moderation/block-users`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteBlockUser
     * @request DELETE:/api/moderation/block-users/{userId}
     */
    deleteBlockUser: (userId: string, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/moderation/block-users/${userId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetFriends
     * @request GET:/api/feeds/friends
     */
    getFriends: (params: RequestParams = {}) =>
      this.request<FeedsFriendsResponse[], any>({
        path: `/api/feeds/friends`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetDiscovery
     * @request GET:/api/feeds/discovery
     */
    getDiscovery: (params: RequestParams = {}) =>
      this.request<FeedsDiscoveryResponse[], any>({
        path: `/api/feeds/discovery`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetMemories
     * @request GET:/api/feeds/memories
     */
    getMemories: (params: RequestParams = {}) =>
      this.request<FeedsMemoriesResponse[], any>({
        path: `/api/feeds/memories`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteMemory
     * @request DELETE:/api/feeds/memories/{memoryId}
     */
    deleteMemory: (memoryId: string, params: RequestParams = {}) =>
      this.request<FeedsMemoriesResponse[], any>({
        path: `/api/feeds/memories/${memoryId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PostSendVerificationCode
     * @request POST:/api/login/sendVerificationCode
     */
    postSendVerificationCode: (data: OmitSendVerificationCodeRequestIosReceipt, params: RequestParams = {}) =>
      this.request<SendVerificationCodeResponse, any>({
        path: `/api/login/sendVerificationCode`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PostVerifyPhoneNumber
     * @request POST:/api/login/verifyPhoneNumber
     */
    postVerifyPhoneNumber: (data: VerifyPhoneNumberRequest, params: RequestParams = {}) =>
      this.request<VerifyPhoneNumberResponse, any>({
        path: `/api/login/verifyPhoneNumber`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PostRefreshToken
     * @request POST:/api/login/refreshToken
     */
    postRefreshToken: (data: RefreshTokenRequest, params: RequestParams = {}) =>
      this.request<RefreshTokenResponse, any>({
        path: `/api/login/refreshToken`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetMe
     * @request GET:/api/person/me
     */
    getMe: (params: RequestParams = {}) =>
      this.request<MeResponse, any>({
        path: `/api/person/me`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PatchMe
     * @request PATCH:/api/person/me
     */
    patchMe: (data: PersonMePatchRequest, params: RequestParams = {}) =>
      this.request<MeResponse, any>({
        path: `/api/person/me`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PostMe
     * @request POST:/api/person/me
     */
    postMe: (data: PersonMePostRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/person/me`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name PatchMeUsername
     * @request PATCH:/api/person/me/username
     */
    patchMeUsername: (data: PersonMeUsernamePatchRequest, params: RequestParams = {}) =>
      this.request<MeResponse, any>({
        path: `/api/person/me/username`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetFriends2
     * @request GET:/api/relationships/friends
     * @originalName getFriends
     * @duplicate
     */
    getFriends2: (params: RequestParams = {}) =>
      this.request<RelationshipsFriendsResponse, any>({
        path: `/api/relationships/friends`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetFriendRequestsSent
     * @request GET:/api/relationships/friend-requests/sent
     */
    getFriendRequestsSent: (params: RequestParams = {}) =>
      this.request<RelationshipsFriendRequestsSentResponse, any>({
        path: `/api/relationships/friend-requests/sent`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetFriendRequestsReceived
     * @request GET:/api/relationships/friend-requests/received
     */
    getFriendRequestsReceived: (params: RequestParams = {}) =>
      this.request<RelationshipsSuggestionsResponse, any>({
        path: `/api/relationships/friend-requests/received`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetSuggestions
     * @request GET:/api/relationships/suggestions
     */
    getSuggestions: (params: RequestParams = {}) =>
      this.request<RelationshipsSuggestionsResponse, any>({
        path: `/api/relationships/suggestions`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PostFriendRequest
     * @request POST:/api/relationships/friend-requests
     */
    postFriendRequest: (data: RelationshipsFriendRequestsPostRequest, params: RequestParams = {}) =>
      this.request<RelationshipsFriendRequestsPostResponse, any>({
        path: `/api/relationships/friend-requests`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PostContacts
     * @request POST:/api/relationships/contacts
     */
    postContacts: (data: string[], params: RequestParams = {}) =>
      this.request<any[], any>({
        path: `/api/relationships/contacts`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetTerms
     * @request GET:/api/terms
     */
    getTerms: (params: RequestParams = {}) =>
      this.request<TermsResponse, any>({
        path: `/api/terms`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
