import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { URLConstants } from '../models/app-constants/url-constants.model';
import { GalleryState } from '../store/gallery-state';
import { Store } from '@ngrx/store';
import * as GalleryActions from '../store/gallery-store/actions/gallery.actions';
import { ImageGallaryStore } from '../models/image-gallery/imgage-gallery.model';

@Injectable({
  providedIn: 'root',
})
export class ImageGalleryService {
  constructor(private http: HttpClient, private store: Store<GalleryState>) {}

  getAllImageList(): Observable<[any, any, any, any, any]> {
    return combineLatest([
      this.getImageListByIndex(1, 20),
      this.getImageListByIndex(2, 20),
      this.getImageListByIndex(3, 20),
      this.getImageListByIndex(4, 20),
      this.getImageListByIndex(5, 20),
    ]);
  }

  getImageListByIndex(page: number, limit: number): Observable<any> {
    return this.store.select('galleryStore').pipe(
      switchMap((imageGallaryStore: ImageGallaryStore[]) => {
        const currentPageData = imageGallaryStore?.find(
          (imageGallaryStoreItem) => imageGallaryStoreItem?.currentPage === page
        );
        if (
          currentPageData?.galleryStoreData &&
          currentPageData?.galleryStoreData?.length > 0
        ) {
          return of(currentPageData.galleryStoreData);
        } else {
          return this.http
            .get(
              URLConstants.IMAGE_GALLAGRY_GET_BY_PAGE_URL +
                '?page=' +
                page +
                '&limit=' +
                limit
            )
            .pipe(
              tap((data: any) => {
                const imageGallaryStore = {} as ImageGallaryStore;
                imageGallaryStore.currentPage = page;
                imageGallaryStore.galleryStoreData = data;
                this.store.dispatch(
                  new GalleryActions.AddGallery(imageGallaryStore)
                );
              })
            );
        }
      })
    );
  }
}
