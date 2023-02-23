import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() imgSrc!: string;
  @Input() title!: string;

  imgFallback($event: any) {
    $event.target.src = 'https://via.placeholder.com/300x450.png?text=No+Image';
  }
}
