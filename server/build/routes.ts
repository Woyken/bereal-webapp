/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { Controller, ValidationService, FieldErrors, ValidateError, TsoaRoute, HttpStatusCodeLiteral, TsoaResponse, fetchMiddlewares } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ModerationController } from './../src/controllers/moderationController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { FeedsController } from './../src/controllers/feedsController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { LoginController } from './../src/controllers/loginController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { PersonController } from './../src/controllers/personController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { RelationshipsController } from './../src/controllers/relationshipsController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TermsController } from './../src/controllers/termsController';
import type { RequestHandler } from 'express';
import * as express from 'express';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "DatumUser": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "username": {"dataType":"string","required":true},
            "fullname": {"dataType":"string","required":true},
            "profilePicture": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ModerationBlockUsersResponseDatum": {
        "dataType": "refObject",
        "properties": {
            "userId": {"dataType":"string","required":true},
            "blockedAt": {"dataType":"datetime","required":true},
            "user": {"ref":"DatumUser","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ModerationBlockUsersResponse": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"ModerationBlockUsersResponseDatum"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ModerationBlockUsersRequest": {
        "dataType": "refObject",
        "properties": {
            "blockedUserId": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ProfilePicture": {
        "dataType": "refObject",
        "properties": {
            "url": {"dataType":"string","required":true},
            "width": {"dataType":"double","required":true},
            "height": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FeedsFriendsResponseUser": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "username": {"dataType":"string","required":true},
            "profilePicture": {"ref":"ProfilePicture"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MediaType": {
        "dataType": "refEnum",
        "enums": ["late","photo"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Region": {
        "dataType": "refEnum",
        "enums": ["europe-west","us-central"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Bucket": {
        "dataType": "refEnum",
        "enums": ["storage.bere.al"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PostLocation": {
        "dataType": "refObject",
        "properties": {
            "_latitude": {"dataType":"double","required":true},
            "_longitude": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreationDate": {
        "dataType": "refObject",
        "properties": {
            "_seconds": {"dataType":"double","required":true},
            "_nanoseconds": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FluffyProfilePicture": {
        "dataType": "refObject",
        "properties": {
            "height": {"dataType":"double","required":true},
            "width": {"dataType":"double","required":true},
            "url": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PostUser": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "username": {"dataType":"string","required":true},
            "profilePicture": {"ref":"FluffyProfilePicture"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Type": {
        "dataType": "refEnum",
        "enums": ["heartEyes","instant","laughing","surprised","up"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FeedsFriendsResponseRealMoji": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "uid": {"dataType":"string","required":true},
            "userName": {"dataType":"string","required":true},
            "user": {"ref":"PostUser","required":true},
            "emoji": {"dataType":"string","required":true},
            "type": {"ref":"Type","required":true},
            "uri": {"dataType":"string","required":true},
            "date": {"ref":"CreationDate","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FeedsFriendsResponse": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "notificationID": {"dataType":"string","required":true},
            "ownerID": {"dataType":"string","required":true},
            "userName": {"dataType":"string","required":true},
            "user": {"ref":"FeedsFriendsResponseUser","required":true},
            "mediaType": {"ref":"MediaType","required":true},
            "region": {"ref":"Region","required":true},
            "bucket": {"ref":"Bucket","required":true},
            "photoURL": {"dataType":"string","required":true},
            "imageWidth": {"dataType":"double","required":true},
            "imageHeight": {"dataType":"double","required":true},
            "secondaryPhotoURL": {"dataType":"string","required":true},
            "secondaryImageHeight": {"dataType":"double","required":true},
            "secondaryImageWidth": {"dataType":"double","required":true},
            "members": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "lateInSeconds": {"dataType":"double","required":true},
            "isPublic": {"dataType":"boolean","required":true},
            "location": {"ref":"PostLocation"},
            "caption": {"dataType":"string"},
            "retakeCounter": {"dataType":"double","required":true},
            "creationDate": {"ref":"CreationDate","required":true},
            "updatedAt": {"dataType":"double","required":true},
            "takenAt": {"ref":"CreationDate","required":true},
            "comment": {"dataType":"array","array":{"dataType":"any"},"required":true},
            "realMojis": {"dataType":"array","array":{"dataType":"refObject","ref":"FeedsFriendsResponseRealMoji"},"required":true},
            "screenshots": {"dataType":"array","array":{"dataType":"any"},"required":true},
            "screenshotsV2": {"dataType":"array","array":{"dataType":"any"},"required":true},
            "visibility": {"dataType":"array","array":{"dataType":"string"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PurpleProfilePicture": {
        "dataType": "refObject",
        "properties": {
            "height": {"dataType":"double","required":true},
            "width": {"dataType":"double","required":true},
            "url": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PurpleUser": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "username": {"dataType":"string","required":true},
            "profilePicture": {"ref":"PurpleProfilePicture","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PostRealMoji": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "uid": {"dataType":"string","required":true},
            "userName": {"dataType":"string","required":true},
            "user": {"ref":"PurpleUser","required":true},
            "emoji": {"dataType":"string","required":true},
            "type": {"dataType":"string","required":true},
            "uri": {"dataType":"string","required":true},
            "date": {"ref":"CreationDate","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Post": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "notificationID": {"dataType":"string","required":true},
            "ownerID": {"dataType":"string","required":true},
            "userName": {"dataType":"string","required":true},
            "user": {"ref":"PostUser","required":true},
            "mediaType": {"ref":"MediaType","required":true},
            "region": {"ref":"Region","required":true},
            "bucket": {"ref":"Bucket","required":true},
            "photoURL": {"dataType":"string","required":true},
            "imageWidth": {"dataType":"double","required":true},
            "imageHeight": {"dataType":"double","required":true},
            "secondaryPhotoURL": {"dataType":"string","required":true},
            "secondaryImageHeight": {"dataType":"double","required":true},
            "secondaryImageWidth": {"dataType":"double","required":true},
            "lateInSeconds": {"dataType":"double","required":true},
            "isPublic": {"dataType":"boolean","required":true},
            "location": {"ref":"PostLocation"},
            "retakeCounter": {"dataType":"double","required":true},
            "creationDate": {"ref":"CreationDate","required":true},
            "updatedAt": {"dataType":"double","required":true},
            "takenAt": {"ref":"CreationDate","required":true},
            "comment": {"dataType":"array","array":{"dataType":"any"},"required":true},
            "realMojis": {"dataType":"array","array":{"dataType":"refObject","ref":"PostRealMoji"},"required":true},
            "screenshots": {"dataType":"array","array":{"dataType":"any"},"required":true},
            "screenshotsV2": {"dataType":"array","array":{"dataType":"any"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FeedsDiscoveryResponse": {
        "dataType": "refObject",
        "properties": {
            "posts": {"dataType":"array","array":{"dataType":"refObject","ref":"Post"},"required":true},
            "lastIndex": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DatumLocation": {
        "dataType": "refObject",
        "properties": {
            "longitude": {"dataType":"double","required":true},
            "latitude": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FeedsMemoriesResponseDatum": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "thumbnail": {"ref":"ProfilePicture","required":true},
            "primary": {"ref":"ProfilePicture","required":true},
            "secondary": {"ref":"ProfilePicture","required":true},
            "isLate": {"dataType":"boolean","required":true},
            "memoryDay": {"dataType":"datetime","required":true},
            "location": {"dataType":"union","subSchemas":[{"ref":"DatumLocation"},{"dataType":"enum","enums":[null]}],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FeedsMemoriesResponse": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"FeedsMemoriesResponseDatum"},"required":true},
            "next": {"dataType":"enum","enums":[null],"required":true},
            "memoriesSynchronized": {"dataType":"boolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SendVerificationCodeResponse": {
        "dataType": "refObject",
        "properties": {
            "sessionInfo": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_SendVerificationCodeRequest.Exclude_keyofSendVerificationCodeRequest.iosReceipt__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"phoneNumber":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_SendVerificationCodeRequest.iosReceipt_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_SendVerificationCodeRequest.Exclude_keyofSendVerificationCodeRequest.iosReceipt__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "VerifyPhoneNumberResponse": {
        "dataType": "refObject",
        "properties": {
            "idToken": {"dataType":"string","required":true},
            "refreshToken": {"dataType":"string","required":true},
            "expiresIn": {"dataType":"string","required":true},
            "localId": {"dataType":"string","required":true},
            "isNewUser": {"dataType":"boolean","required":true},
            "phoneNumber": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "VerifyPhoneNumberRequest": {
        "dataType": "refObject",
        "properties": {
            "sessionInfo": {"dataType":"string","required":true},
            "code": {"dataType":"string","required":true},
            "operation": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RefreshTokenResponse": {
        "dataType": "refObject",
        "properties": {
            "access_token": {"dataType":"string","required":true},
            "expires_in": {"dataType":"string","required":true},
            "token_type": {"dataType":"string","required":true},
            "refresh_token": {"dataType":"string","required":true},
            "id_token": {"dataType":"string","required":true},
            "user_id": {"dataType":"string","required":true},
            "project_id": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RefreshTokenRequest": {
        "dataType": "refObject",
        "properties": {
            "refresh_token": {"dataType":"string","required":true},
            "grant_type": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Realmoji": {
        "dataType": "refObject",
        "properties": {
            "emoji": {"dataType":"string","required":true},
            "media": {"ref":"ProfilePicture","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Device": {
        "dataType": "refObject",
        "properties": {
            "clientVersion": {"dataType":"string","required":true},
            "device": {"dataType":"string","required":true},
            "deviceId": {"dataType":"string","required":true},
            "pushToken": {"dataType":"string","required":true},
            "platform": {"dataType":"string","required":true},
            "language": {"dataType":"string","required":true},
            "timezone": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Stats": {
        "dataType": "refObject",
        "properties": {
            "postTotal": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MeResponse": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "username": {"dataType":"string","required":true},
            "birthdate": {"dataType":"datetime","required":true},
            "fullname": {"dataType":"string","required":true},
            "profilePicture": {"ref":"ProfilePicture","required":true},
            "realmojis": {"dataType":"array","array":{"dataType":"refObject","ref":"Realmoji"},"required":true},
            "devices": {"dataType":"array","array":{"dataType":"refObject","ref":"Device"},"required":true},
            "stats": {"ref":"Stats","required":true},
            "canDeletePost": {"dataType":"boolean","required":true},
            "canUpdateRegion": {"dataType":"boolean","required":true},
            "phoneNumber": {"dataType":"string","required":true},
            "biography": {"dataType":"string","required":true},
            "location": {"dataType":"string","required":true},
            "countryCode": {"dataType":"string","required":true},
            "region": {"ref":"Region","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "newUsername": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PersonMePatchRequest": {
        "dataType": "refObject",
        "properties": {
            "biography": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PersonMePostRequest": {
        "dataType": "refObject",
        "properties": {
            "username": {"dataType":"string","required":true},
            "birthdate": {"dataType":"datetime","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PersonMeUsernamePatchRequest": {
        "dataType": "refObject",
        "properties": {
            "username": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RelationshipsFriendsResponseDatum": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "username": {"dataType":"string","required":true},
            "fullname": {"dataType":"string","required":true},
            "status": {"dataType":"string","required":true},
            "profilePicture": {"ref":"ProfilePicture"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RelationshipsFriendsResponse": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"RelationshipsFriendsResponseDatum"},"required":true},
            "next": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RelationshipsFriendRequestsSentResponseDatum": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "username": {"dataType":"string","required":true},
            "fullname": {"dataType":"string","required":true},
            "status": {"dataType":"string","required":true},
            "profilePicture": {"ref":"ProfilePicture","required":true},
            "mutualFriends": {"dataType":"double","required":true},
            "updatedAt": {"dataType":"datetime","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RelationshipsFriendRequestsSentResponse": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"RelationshipsFriendRequestsSentResponseDatum"},"required":true},
            "next": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RelationshipsSuggestionsResponse": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"any"},"required":true},
            "next": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RelationshipsFriendRequestsPostResponse": {
        "dataType": "refObject",
        "properties": {
            "statusCode": {"dataType":"double","required":true},
            "errorKey": {"dataType":"enum","enums":[null],"required":true},
            "fields": {"dataType":"enum","enums":[null],"required":true},
            "timestamp": {"dataType":"datetime","required":true},
            "requestId": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RelationshipsFriendRequestsPostRequest": {
        "dataType": "refObject",
        "properties": {
            "userId": {"dataType":"string","required":true},
            "source": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TermsResponseDatum": {
        "dataType": "refObject",
        "properties": {
            "code": {"dataType":"string","required":true},
            "status": {"dataType":"string","required":true},
            "signedAt": {"dataType":"datetime"},
            "termUrl": {"dataType":"string","required":true},
            "version": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TermsResponse": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"TermsResponseDatum"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: express.Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        app.get('/api/moderation/block-users',
            ...(fetchMiddlewares<RequestHandler>(ModerationController)),
            ...(fetchMiddlewares<RequestHandler>(ModerationController.prototype.getBlockedUsers)),

            function ModerationController_getBlockedUsers(request: any, response: any, next: any) {
            const args = {
                    auth: {"in":"header","name":"authorization","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ModerationController();


              const promise = controller.getBlockedUsers.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/api/moderation/block-users',
            ...(fetchMiddlewares<RequestHandler>(ModerationController)),
            ...(fetchMiddlewares<RequestHandler>(ModerationController.prototype.postBlockUser)),

            function ModerationController_postBlockUser(request: any, response: any, next: any) {
            const args = {
                    auth: {"in":"header","name":"authorization","required":true,"dataType":"string"},
                    data: {"in":"body","name":"data","required":true,"ref":"ModerationBlockUsersRequest"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ModerationController();


              const promise = controller.postBlockUser.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/api/moderation/block-users/:userId',
            ...(fetchMiddlewares<RequestHandler>(ModerationController)),
            ...(fetchMiddlewares<RequestHandler>(ModerationController.prototype.deleteBlockUser)),

            function ModerationController_deleteBlockUser(request: any, response: any, next: any) {
            const args = {
                    auth: {"in":"header","name":"authorization","required":true,"dataType":"string"},
                    userId: {"in":"path","name":"userId","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ModerationController();


              const promise = controller.deleteBlockUser.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/api/feeds/friends',
            ...(fetchMiddlewares<RequestHandler>(FeedsController)),
            ...(fetchMiddlewares<RequestHandler>(FeedsController.prototype.getFriends)),

            function FeedsController_getFriends(request: any, response: any, next: any) {
            const args = {
                    auth: {"in":"header","name":"authorization","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new FeedsController();


              const promise = controller.getFriends.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/api/feeds/discovery',
            ...(fetchMiddlewares<RequestHandler>(FeedsController)),
            ...(fetchMiddlewares<RequestHandler>(FeedsController.prototype.getDiscovery)),

            function FeedsController_getDiscovery(request: any, response: any, next: any) {
            const args = {
                    auth: {"in":"header","name":"authorization","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new FeedsController();


              const promise = controller.getDiscovery.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/api/feeds/memories',
            ...(fetchMiddlewares<RequestHandler>(FeedsController)),
            ...(fetchMiddlewares<RequestHandler>(FeedsController.prototype.getMemories)),

            function FeedsController_getMemories(request: any, response: any, next: any) {
            const args = {
                    auth: {"in":"header","name":"authorization","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new FeedsController();


              const promise = controller.getMemories.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/api/feeds/memories/:memoryId',
            ...(fetchMiddlewares<RequestHandler>(FeedsController)),
            ...(fetchMiddlewares<RequestHandler>(FeedsController.prototype.deleteMemory)),

            function FeedsController_deleteMemory(request: any, response: any, next: any) {
            const args = {
                    auth: {"in":"header","name":"authorization","required":true,"dataType":"string"},
                    memoryId: {"in":"path","name":"memoryId","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new FeedsController();


              const promise = controller.deleteMemory.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/api/login/sendVerificationCode',
            ...(fetchMiddlewares<RequestHandler>(LoginController)),
            ...(fetchMiddlewares<RequestHandler>(LoginController.prototype.postSendVerificationCode)),

            function LoginController_postSendVerificationCode(request: any, response: any, next: any) {
            const args = {
                    data: {"in":"body","name":"data","required":true,"ref":"Omit_SendVerificationCodeRequest.iosReceipt_"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new LoginController();


              const promise = controller.postSendVerificationCode.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/api/login/verifyPhoneNumber',
            ...(fetchMiddlewares<RequestHandler>(LoginController)),
            ...(fetchMiddlewares<RequestHandler>(LoginController.prototype.postVerifyPhoneNumber)),

            function LoginController_postVerifyPhoneNumber(request: any, response: any, next: any) {
            const args = {
                    data: {"in":"body","name":"data","required":true,"ref":"VerifyPhoneNumberRequest"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new LoginController();


              const promise = controller.postVerifyPhoneNumber.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/api/login/refreshToken',
            ...(fetchMiddlewares<RequestHandler>(LoginController)),
            ...(fetchMiddlewares<RequestHandler>(LoginController.prototype.postRefreshToken)),

            function LoginController_postRefreshToken(request: any, response: any, next: any) {
            const args = {
                    data: {"in":"body","name":"data","required":true,"ref":"RefreshTokenRequest"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new LoginController();


              const promise = controller.postRefreshToken.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/api/person/me',
            ...(fetchMiddlewares<RequestHandler>(PersonController)),
            ...(fetchMiddlewares<RequestHandler>(PersonController.prototype.getMe)),

            function PersonController_getMe(request: any, response: any, next: any) {
            const args = {
                    auth: {"in":"header","name":"authorization","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new PersonController();


              const promise = controller.getMe.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.patch('/api/person/me',
            ...(fetchMiddlewares<RequestHandler>(PersonController)),
            ...(fetchMiddlewares<RequestHandler>(PersonController.prototype.patchMe)),

            function PersonController_patchMe(request: any, response: any, next: any) {
            const args = {
                    auth: {"in":"header","name":"authorization","required":true,"dataType":"string"},
                    data: {"in":"body","name":"data","required":true,"ref":"PersonMePatchRequest"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new PersonController();


              const promise = controller.patchMe.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/api/person/me',
            ...(fetchMiddlewares<RequestHandler>(PersonController)),
            ...(fetchMiddlewares<RequestHandler>(PersonController.prototype.postMe)),

            function PersonController_postMe(request: any, response: any, next: any) {
            const args = {
                    auth: {"in":"header","name":"authorization","required":true,"dataType":"string"},
                    data: {"in":"body","name":"data","required":true,"ref":"PersonMePostRequest"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new PersonController();


              const promise = controller.postMe.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.patch('/api/person/me/username',
            ...(fetchMiddlewares<RequestHandler>(PersonController)),
            ...(fetchMiddlewares<RequestHandler>(PersonController.prototype.patchMeUsername)),

            function PersonController_patchMeUsername(request: any, response: any, next: any) {
            const args = {
                    auth: {"in":"header","name":"authorization","required":true,"dataType":"string"},
                    data: {"in":"body","name":"data","required":true,"ref":"PersonMeUsernamePatchRequest"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new PersonController();


              const promise = controller.patchMeUsername.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/api/relationships/friends',
            ...(fetchMiddlewares<RequestHandler>(RelationshipsController)),
            ...(fetchMiddlewares<RequestHandler>(RelationshipsController.prototype.getFriends)),

            function RelationshipsController_getFriends(request: any, response: any, next: any) {
            const args = {
                    auth: {"in":"header","name":"authorization","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new RelationshipsController();


              const promise = controller.getFriends.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/api/relationships/friend-requests/sent',
            ...(fetchMiddlewares<RequestHandler>(RelationshipsController)),
            ...(fetchMiddlewares<RequestHandler>(RelationshipsController.prototype.getFriendRequestsSent)),

            function RelationshipsController_getFriendRequestsSent(request: any, response: any, next: any) {
            const args = {
                    auth: {"in":"header","name":"authorization","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new RelationshipsController();


              const promise = controller.getFriendRequestsSent.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/api/relationships/friend-requests/received',
            ...(fetchMiddlewares<RequestHandler>(RelationshipsController)),
            ...(fetchMiddlewares<RequestHandler>(RelationshipsController.prototype.getFriendRequestsReceived)),

            function RelationshipsController_getFriendRequestsReceived(request: any, response: any, next: any) {
            const args = {
                    auth: {"in":"header","name":"authorization","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new RelationshipsController();


              const promise = controller.getFriendRequestsReceived.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/api/relationships/suggestions',
            ...(fetchMiddlewares<RequestHandler>(RelationshipsController)),
            ...(fetchMiddlewares<RequestHandler>(RelationshipsController.prototype.getSuggestions)),

            function RelationshipsController_getSuggestions(request: any, response: any, next: any) {
            const args = {
                    auth: {"in":"header","name":"authorization","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new RelationshipsController();


              const promise = controller.getSuggestions.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/api/relationships/friend-requests',
            ...(fetchMiddlewares<RequestHandler>(RelationshipsController)),
            ...(fetchMiddlewares<RequestHandler>(RelationshipsController.prototype.postFriendRequest)),

            function RelationshipsController_postFriendRequest(request: any, response: any, next: any) {
            const args = {
                    auth: {"in":"header","name":"authorization","required":true,"dataType":"string"},
                    data: {"in":"body","name":"data","required":true,"ref":"RelationshipsFriendRequestsPostRequest"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new RelationshipsController();


              const promise = controller.postFriendRequest.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/api/relationships/contacts',
            ...(fetchMiddlewares<RequestHandler>(RelationshipsController)),
            ...(fetchMiddlewares<RequestHandler>(RelationshipsController.prototype.postContacts)),

            function RelationshipsController_postContacts(request: any, response: any, next: any) {
            const args = {
                    auth: {"in":"header","name":"authorization","required":true,"dataType":"string"},
                    data: {"in":"body","name":"data","required":true,"dataType":"array","array":{"dataType":"string"}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new RelationshipsController();


              const promise = controller.postContacts.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/api/terms',
            ...(fetchMiddlewares<RequestHandler>(TermsController)),
            ...(fetchMiddlewares<RequestHandler>(TermsController.prototype.getTerms)),

            function TermsController_getTerms(request: any, response: any, next: any) {
            const args = {
                    auth: {"in":"header","name":"authorization","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new TermsController();


              const promise = controller.getTerms.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function isController(object: any): object is Controller {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }

    function promiseHandler(controllerObj: any, promise: any, response: any, successStatus: any, next: any) {
        return Promise.resolve(promise)
            .then((data: any) => {
                let statusCode = successStatus;
                let headers;
                if (isController(controllerObj)) {
                    headers = controllerObj.getHeaders();
                    statusCode = controllerObj.getStatus() || statusCode;
                }

                // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                returnHandler(response, statusCode, data, headers)
            })
            .catch((error: any) => next(error));
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function returnHandler(response: any, statusCode?: number, data?: any, headers: any = {}) {
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach((name: string) => {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            data.pipe(response);
        } else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        } else {
            response.status(statusCode || 204).end();
        }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function responder(response: any): TsoaResponse<HttpStatusCodeLiteral, unknown>  {
        return function(status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    };

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function getValidatedArgs(args: any, request: any, response: any): any[] {
        const fieldErrors: FieldErrors  = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.file, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    } else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.files, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    } else {
                        return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    }
                case 'res':
                    return responder(response);
            }
        });

        if (Object.keys(fieldErrors).length > 0) {
            throw new ValidateError(fieldErrors, '');
        }
        return values;
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
