import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      {{ title }}
    </p>
  `,
  styles: [
  ]
})
export class TitleComponent {
  @Input({ required: true }) title!: string;
}
