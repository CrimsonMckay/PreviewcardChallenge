import { CardList } from './../card-list';
import { Component, Input, input } from '@angular/core';
import { LearnMoreButtonComponent } from '../learn-more-button/learn-more-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview-card',
  standalone: true,
  imports: [CommonModule, LearnMoreButtonComponent],
  templateUrl: './preview-card.component.html',
  styleUrl: './preview-card.component.css',
})
export class PreviewCardComponent {
  @Input() cardList!: CardList;
}
