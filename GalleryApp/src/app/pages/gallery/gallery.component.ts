import { Component, OnDestroy } from '@angular/core';
import { Gallery } from 'src/app/shared/models/image-gallery/imgage-gallery.model';
import { AlertMessageService } from 'src/app/shared/services/alert-message/alert-message.service';
import { ImageGalleryService } from 'src/app/shared/services/image-gallery.service';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnDestroy {
  imageListData: Gallery[] = [];
  observerInstance: any = null;

  constructor(
    private imageGalleryService: ImageGalleryService,
    private alertMessageService: AlertMessageService
  ) {}

  getDataForSelectedPage(page: number) {
    this.observerInstance = this.imageGalleryService
      .getImageListByIndex(page, 20)
      .subscribe(
        (data: Gallery[]) => {
          this.imageListData = data;
        },
        (error) => {
          console.log(error);
          if(error.status === 0){
            this.alertMessageService.errorCallBackMsg({
              errorType: 'error',
              message:
                'Server is down at this moment. Please try again after some time',
            });
          }
        }
      );
  }

  trackByFn(index: number) {
    return index;
  }

  ngOnDestroy(): void {
    if (this.observerInstance) {
      this.observerInstance.unsubscribe();
    }
    this.imageListData = [];
  }
}
