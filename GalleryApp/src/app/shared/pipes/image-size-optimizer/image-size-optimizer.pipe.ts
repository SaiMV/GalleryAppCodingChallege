import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'optimizeImage' })
export class ImageSizeOptimizer implements PipeTransform {
  transform(
    currentUrl: string,
    imageWidth?: number,
    imageHeight?: number
  ): string {
    const splittedText = currentUrl?.split('/');
    if (splittedText) {
      splittedText[splittedText?.length - 1] =
        imageWidth?.toString() !== undefined ? imageWidth?.toString() : '200';
      splittedText[splittedText?.length - 2] =
        imageHeight?.toString() !== undefined ? imageHeight?.toString() : '200';
      splittedText[1] = '/';
      return splittedText?.join('/');
    } else {
      return currentUrl;
    }
  }
}
