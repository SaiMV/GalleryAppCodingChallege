import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from 'src/app/shared/store/gallery-store/reducers/gallery.reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ImageGalleryService } from 'src/app/shared/services/image-gallery.service';
import { of } from 'rxjs';
import { UIComponentsModule } from 'src/app/shared/ui-components/ui-components.module';
import { Router } from '@angular/router';
import { AlertMessageService } from 'src/app/shared/services/alert-message/alert-message.service';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let service: ImageGalleryService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryComponent],
      imports: [
        HttpClientTestingModule,
        GalleryRoutingModule,
        UIComponentsModule,
        StoreModule.forRoot({
          galleryStore: counterReducer,
        }),
      ],
      providers: [AlertMessageService]
    }).compileComponents();

    service = TestBed.inject(ImageGalleryService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service getDataForSelectedPage and component should have the data', () => {
    let service = fixture.debugElement.injector.get(ImageGalleryService);

    const stubServiceData = [
      {
        author: 'Alejandro Escamilla',
        download_url: 'https://picsum.photos/id/0/5616/3744',
        height: 3744,
        id: '0',
        url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
        width: 5616,
      },
    ];

    spyOn(service, 'getImageListByIndex').and.callFake(() => {
      return of(stubServiceData);
    });
    component.getDataForSelectedPage(1);
    expect(component.imageListData).toBe(stubServiceData);
  });

  it('should create card after getting service data', () => {
    let service = fixture.debugElement.injector.get(ImageGalleryService);

    const stubServiceData = [
      {
        author: 'Alejandro Escamilla',
        download_url: 'https://picsum.photos/id/0/5616/3744',
        height: 3744,
        id: '0',
        url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
        width: 5616,
      },
    ];

    spyOn(service, 'getImageListByIndex').and.callFake(() => {
      return of(stubServiceData);
    });
    component.getDataForSelectedPage(1);
    fixture.detectChanges();

    const imageCardCreatedInDom = fixture.debugElement.nativeElement.querySelector(
      'image-card'
    );
    expect(imageCardCreatedInDom !== null).toBeTruthy();
  });
});
