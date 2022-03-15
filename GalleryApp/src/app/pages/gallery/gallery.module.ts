import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { UIComponentsModule } from 'src/app/shared/ui-components/ui-components.module';
import { HttpClientModule } from '@angular/common/http';
import { GalleryRoutingModule } from './gallery-routing.module';

@NgModule({
  declarations: [GalleryComponent],
  imports: [CommonModule, UIComponentsModule, HttpClientModule, GalleryRoutingModule],
})
export class GalleryModule {}
