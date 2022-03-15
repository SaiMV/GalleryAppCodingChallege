export class Gallery {
  author?: string;
  download_url?: string;
  height?: number;
  id?: string;
  url?: string;
  width?: number;
}

export class ImageGallaryStore {
  currentPage?: number;
  galleryStoreData?: Gallery[];
}
