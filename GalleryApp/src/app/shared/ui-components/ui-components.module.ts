import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from './image-card/image-card.component';
import { PaginationButtonComponent } from './pagination-button/pagination-button.component';
import { ImageSizeOptimizer } from '../pipes/image-size-optimizer/image-size-optimizer.pipe';
import { PaginationCreator } from '../pipes/pagination-creator/pagination-creator.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IconsListComponent } from './icons-list/icons-list.component';
import { AppIconComponent } from './app-icon/app-icon.component';
import { RouterModule } from '@angular/router';
import { InputBoxComponent } from './input-box/input-box.component';
import { AlertMessageComponent } from './alert-message/alert-message.component';

@NgModule({
  declarations: [
    ImageCardComponent,
    PaginationButtonComponent,
    ImageSizeOptimizer,
    PaginationCreator,
    NavBarComponent,
    IconsListComponent,
    AppIconComponent,
    InputBoxComponent,
    AlertMessageComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ImageCardComponent,
    PaginationButtonComponent,
    NavBarComponent,
    AppIconComponent,
    InputBoxComponent,
    AlertMessageComponent
  ],
})
export class UIComponentsModule {}
