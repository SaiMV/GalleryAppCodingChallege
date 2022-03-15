import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageGalleryService } from 'src/app/shared/services/image-gallery.service';
import { GalleryComponent } from './gallery.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ImageGalleryService],
})
export class GalleryRoutingModule {}
