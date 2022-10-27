// generated using https://app.quicktype.io/
export interface PatchMeUsernameResponse {
  id: string;
  username: string;
  newUsername: string;
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
  createdAt: string;
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

export interface ProfilePicture {
  url: string;
  width: number;
  height: number;
}

export interface Realmoji {
  emoji: string;
  media: ProfilePicture;
}

export enum Region {
  EuropeWest = "europe-west",
  UsCentral = "us-central",
}

export interface Stats {
  postTotal: number;
}

export interface PersonMeUsernamePatchRequest {
  username: string;
}

export interface PersonMePostRequest {
  username: string;
  birthdate: string;
}

export interface PersonMePatchRequest {
  biography: string;
}

export interface RelationshipsSuggestionsResponse {
  data: any[];
  next: null;
}

export interface ModerationBlockUsersRequest {
  blockedUserId: string;
}

export interface RelationshipsFriendRequestsPostRequest {
  userId: string;
  source: string;
}

export interface RelationshipsFriendRequestsPostResponse {
  statusCode: number;
  errorKey: null;
  fields: null;
  timestamp: string;
  requestId: string;
}

export interface RelationshipsFriendRequestsSentResponse {
  data: RelationshipsFriendRequestsSentResponseDatum[];
  next: null;
}

export interface RelationshipsFriendRequestsSentResponseDatum {
  id: string;
  username: string;
  fullname: string;
  status: string;
  profilePicture: ProfilePicture;
  mutualFriends: number;
  updatedAt: string;
}

export interface RelationshipsFriendsResponse {
  data: RelationshipsFriendsResponseDatum[];
  next: null;
}

export interface RelationshipsFriendsResponseDatum {
  id: string;
  username: string;
  fullname: string;
  status: string;
  profilePicture?: ProfilePicture;
}

export interface FeedsMemoriesResponse {
  data: FeedsMemoriesResponseDatum[];
  next: null;
  memoriesSynchronized: boolean;
}

export interface FeedsMemoriesResponseDatum {
  id: string;
  thumbnail: ProfilePicture;
  primary: ProfilePicture;
  secondary: ProfilePicture;
  isLate: boolean;
  memoryDay: string;
  location: DatumLocation | null;
}

export interface DatumLocation {
  longitude: number;
  latitude: number;
}

export interface FeedsDiscoveryResponse {
  posts: Post[];
  lastIndex: string;
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
  imageWidth: number;
  imageHeight: number;
  secondaryPhotoURL: string;
  secondaryImageHeight: number;
  secondaryImageWidth: number;
  lateInSeconds: number;
  isPublic: boolean;
  location?: PostLocation;
  retakeCounter: number;
  creationDate: CreationDate;
  updatedAt: number;
  takenAt: CreationDate;
  comment: any[];
  realMojis: PostRealMoji[];
  screenshots: any[];
  screenshotsV2: any[];
}

export enum Bucket {
  StorageBereAl = "storage.bere.al",
}

export interface CreationDate {
  _seconds: number;
  _nanoseconds: number;
}

export interface PostLocation {
  _latitude: number;
  _longitude: number;
}

export enum MediaType {
  Late = "late",
  Photo = "photo",
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

export interface PurpleUser {
  id: string;
  username: string;
  profilePicture: PurpleProfilePicture;
}

export interface PurpleProfilePicture {
  height: number;
  width: number;
  url: string;
}

export interface PostUser {
  id: string;
  username: string;
  profilePicture?: FluffyProfilePicture;
}

export interface FluffyProfilePicture {
  height: number;
  width: number;
  url: string;
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
  imageWidth: number;
  imageHeight: number;
  secondaryPhotoURL: string;
  secondaryImageHeight: number;
  secondaryImageWidth: number;
  members: string[];
  lateInSeconds: number;
  isPublic: boolean;
  location?: PostLocation;
  caption?: string;
  retakeCounter: number;
  creationDate: CreationDate;
  updatedAt: number;
  takenAt: CreationDate;
  comment: any[];
  realMojis: FeedsFriendsResponseRealMoji[];
  screenshots: any[];
  screenshotsV2: any[];
  visibility?: string[];
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

export enum Type {
  HeartEyes = "heartEyes",
  Instant = "instant",
  Laughing = "laughing",
  Surprised = "surprised",
  Up = "up",
}

export interface FeedsFriendsResponseUser {
  id: string;
  username: string;
  profilePicture?: ProfilePicture;
}

export interface ModerationBlockUsersResponse {
  data: ModerationBlockUsersResponseDatum[];
}

export interface ModerationBlockUsersResponseDatum {
  userId: string;
  blockedAt: string;
  user: DatumUser;
}

export interface DatumUser {
  id: string;
  username: string;
  fullname: string;
  profilePicture: null;
}

export interface MeResponse {
  id: string;
  username: string;
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
  createdAt: string;
  newUsername?: string;
}

export interface TermsResponse {
  data: TermsResponseDatum[];
}

export interface TermsResponseDatum {
  code: string;
  status: string;
  signedAt?: string;
  termUrl: string;
  version: string;
}

export interface ContentPostsUploadUrlGetResponse {
  data: {
    url: string;
    expireAt: string;
    bucket: string;
    path: string;
    headers: {
      "Cache-Control": string;
      "Content-Type": string;
      "x-goog-content-length-range": string;
    };
  }[];
}

export interface ContentRealmojisUploadUrlGetResponse {
  data: {
    url: string;
    expireAt: string;
    bucket: string;
    path: string;
    headers: {
      "Cache-Control": string;
      "Content-Type": string;
      "x-goog-content-length-range": string;
    };
  };
}

type VisibilityTypes = "friends" | "friends-of-friends" | "public";

export interface ContentPostsVisibilityPatchRequest {
  visibility: VisibilityTypes;
}

export interface ContentPostsPostRequest {
  isPublic: boolean;
  isLate: boolean;
  retakeCounter: number;
  takenAt: string;
  location: DatumLocation;
  caption: string;
  backCamera: CameraPictureUploadData;
  frontCamera: CameraPictureUploadData;
}

interface CameraPictureUploadData {
  bucket: string;
  height: number;
  width: number;
  path: string;
}

export interface ContentPostsCaptionPatchRequest {
  caption: string;
}
