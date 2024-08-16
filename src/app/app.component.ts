import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreviewCardComponent } from './preview-card/preview-card.component';
import { CardList } from './card-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PreviewCardComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  cardData: CardList[] = [
    {
      carName: 'SEDANS',
      description:
        'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
      color: 'hsl(31, 77%, 52%)',
      logo: '/assets/icon-sedans.svg',
    },
    {
      carName: 'SUVS',
      description:
        'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
      color: 'hsl(184, 100%, 22%)',
      logo: '/assets/icon-suvs.svg',
    },
    {
      carName: 'LUXURY',
      description:
        'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
      color: 'hsl(179, 100%, 13%)',
      logo: 'assets/icon-luxury.svg',
    },
  ];
}
