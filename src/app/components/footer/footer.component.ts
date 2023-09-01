import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      {{ id }}
    </p>
  `,
  styles: [
  ]
})
export class FooterComponent {
  @Input({ required: true, alias: 'elementId' }) id!: string;
}
