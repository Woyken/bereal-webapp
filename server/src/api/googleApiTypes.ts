export interface SendVerificationCodeRequest {
  phoneNumber: string;
  iosReceipt: string;
}

export interface SendVerificationCodeResponse {
  sessionInfo: string;
}

export interface VerifyPhoneNumberRequest {
  sessionInfo: string;
  code: string;
  operation: string;
}

export interface VerifyPhoneNumberResponse {
  idToken: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  isNewUser: boolean;
  phoneNumber: string;
}

export interface RefreshTokenRequest {
  refresh_token: string;
  grant_type: string;
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
