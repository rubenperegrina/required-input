import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FooterComponent, TitleComponent],
  template: `
    <app-title [title]="'This is the title'"]/>
    <app-footer [elementId]="'This is de id'"/>
  `,
  styles: [],
})
export class AppComponent {
  title = 'required-input';
}
