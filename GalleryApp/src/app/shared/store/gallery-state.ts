import { ImageGallaryStore } from '../models/image-gallery/imgage-gallery.model';

export interface GalleryState {
  readonly galleryStore: ImageGallaryStore[];
}
