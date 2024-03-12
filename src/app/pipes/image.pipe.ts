import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';


@Pipe({
  name: 'toImageUrl'
})
export class ImagePipe implements PipeTransform {

  transform(image: string, size: string = "w500"): string {
    if (!image) {
      return './assets/no-image-banner.jpg';
    }
    const imgUrl = `${environment.ROOTIMAGEPATH}/${size}${image}`;

    return imgUrl
  }

}
