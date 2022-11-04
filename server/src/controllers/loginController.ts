import axios from "axios";
import { Body, Controller, Post, Request, Route } from "tsoa";
import {
  RefreshTokenRequest,
  RefreshTokenResponse,
  SendVerificationCodeRequest,
  SendVerificationCodeResponse,
  VerifyPhoneNumberRequest,
  VerifyPhoneNumberResponse,
} from "../api/googleApiTypes";
import envConfig from "../envConfig";

@Route("api/login")
export class LoginController extends Controller {
  @Post("/sendVerificationCode")
  public async postSendVerificationCode(
    @Body() data: Omit<SendVerificationCodeRequest, "iosReceipt">
  ) {
    const params = new URLSearchParams({ key: envConfig.loginKey });
    const response = await axios.post<SendVerificationCodeResponse>(
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/sendVerificationCode",
      { ...data, iosReceipt: envConfig.iosReceipt },
      {
        params,
        headers: {
          "x-ios-bundle-identifier": envConfig.iosBundleId,
        },
      }
    );
    return response.data;
  }

  @Post("/verifyPhoneNumber")
  public async postVerifyPhoneNumber(
    @Body() data: Omit<VerifyPhoneNumberRequest, "operation">
  ) {
    const params = new URLSearchParams({ key: envConfig.loginKey });
    const response = await axios.post<VerifyPhoneNumberResponse>(
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPhoneNumber",
      { ...data, operation: "SIGN_UP_OR_IN" },
      {
        params,
        headers: {
          "x-ios-bundle-identifier": envConfig.iosBundleId,
        },
      }
    );
    return response.data;
  }

  @Post("/refreshToken")
  public async postRefreshToken(
    @Body() data: Omit<RefreshTokenRequest, "grant_type">
  ) {
    const params = new URLSearchParams({ key: envConfig.loginKey });
    const response = await axios.post<RefreshTokenResponse>(
      "https://securetoken.googleapis.com/v1/token",
      { ...data, grant_type: "refresh_token" },
      {
        params,
        headers: {
          "x-ios-bundle-identifier": envConfig.iosBundleId,
        },
      }
    );
    return response.data;
  }
}
