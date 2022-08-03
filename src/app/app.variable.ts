import { environment } from "src/environments/environment";

export class ApiUrl {
  private static baseUrl = environment.baseURL;
  public static login = ApiUrl.baseUrl  + "login";
  public static users = ApiUrl.baseUrl  + "users";
}