import { environment } from 'src/environments/environment';

export class ApiUrl {
  private static baseUrl = environment.baseURL;
  public static login = ApiUrl.baseUrl + 'login';
  public static users = ApiUrl.baseUrl + 'users';
  public static user = ApiUrl.baseUrl + 'user';
  public static category = ApiUrl.baseUrl + 'category';
  public static addPb = ApiUrl.baseUrl + 'pb';
  public static updateWithoutImagePb = ApiUrl.baseUrl + 'pbwi';
  public static photoBased = ApiUrl.baseUrl + 'pb';
  public static catogries = ApiUrl.baseUrl + 'category';
  public static Photos = ApiUrl.baseUrl + 'pb';
  public static video = ApiUrl.baseUrl + 'vb';
  public static visitor = ApiUrl.baseUrl + 'visitor';
  public static visitors = ApiUrl.baseUrl + 'visitors';
  public static donater = ApiUrl.baseUrl + 'donater';
  public static donaters = ApiUrl.baseUrl + 'donaters';
}
