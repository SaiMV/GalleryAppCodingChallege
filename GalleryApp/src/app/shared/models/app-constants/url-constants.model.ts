export class URLConstants {
  private static readonly IMAGE_GALLAGRY_BASE_URL: string =
    'https://picsum.photos';
  public static readonly IMAGE_GALLAGRY_GET_BY_PAGE_URL =
    URLConstants.IMAGE_GALLAGRY_BASE_URL + '/v2/list';
  public static readonly IMAGE_GALLAGRY_GET_ALL_URL =
    URLConstants.IMAGE_GALLAGRY_BASE_URL + '/v2/list?all';
}
