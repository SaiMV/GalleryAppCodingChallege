import { Action } from '@ngrx/store';
import { ImageGallaryStore } from '../../../models/image-gallery/imgage-gallery.model';

export const ADD_GALLERY = 'Add Gallery';
export const REMOVE_GELLERY = 'Remove Gallery';

export class AddGallery implements Action {
  readonly type = ADD_GALLERY;

  constructor(public payload: ImageGallaryStore) {}
}

export class RemoveGallery implements Action {
  readonly type = REMOVE_GELLERY;

  constructor(public payload: number) {}
}

export type Actions = AddGallery | RemoveGallery;
