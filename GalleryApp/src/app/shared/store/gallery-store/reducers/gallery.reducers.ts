import { Gallery } from 'src/app/shared/models/image-gallery/imgage-gallery.model';
import * as GalleryActions from './../actions/gallery.actions';

export function reducer(state: Gallery[] = [], action: GalleryActions.Actions) {
  switch (action.type) {
    case GalleryActions.ADD_GALLERY:
      return [...state, action.payload];
    case GalleryActions.REMOVE_GELLERY:
      state.splice(action.payload, 1);
      return state;
    default:
      return state;
  }
}

export function counterReducer(state: any, action: any) {
  return reducer(state, action);
}
