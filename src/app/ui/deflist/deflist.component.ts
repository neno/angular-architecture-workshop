import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMovie } from 'src/app/types';

@Component({
  selector: 'app-deflist',
  templateUrl: './deflist.component.html',
})
export class DeflistComponent {
  @Input() movie!: IMovie;

  @Output() onAddMovie = new EventEmitter<IMovie>();
}
