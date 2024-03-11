import { Pipe, PipeTransform } from '@angular/core';

const URL = 'https://image.tmdb.org/t/p/';

@Pipe({
  name: 'toImageUrl'
})
export class ImagePipe implements PipeTransform {

  transform(image: string, size: string = "w500"): string {
    if (!image) {
      return './assets/no-image-banner.jpg';
    }
    const imgUrl = `${URL}/${size}${image}`;

    return imgUrl
  }

}
