import { Component, Input } from '@angular/core';
import { MenuItemComponent } from './menu-item/menu-item.component';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MenuItemComponent],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css',
})
export class MenuBarComponent {}
