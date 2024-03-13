import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { ArrayToArraydoblePipe } from './array-to-arraydoble.pipe';



@NgModule({
  declarations: [ImagePipe, ArrayToArraydoblePipe],
  exports: [ImagePipe, ArrayToArraydoblePipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
