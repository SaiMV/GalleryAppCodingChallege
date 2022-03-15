import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UIComponentsModule } from './shared/ui-components/ui-components.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/store/gallery-store/reducers/gallery.reducers';
import { AlertMessageService } from './shared/services/alert-message/alert-message.service';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIComponentsModule,
    StoreModule.forRoot({
      galleryStore: counterReducer,
    }),
  ],
  providers: [AlertMessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
