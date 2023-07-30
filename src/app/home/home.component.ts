import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public dialog: MatDialog, private router: Router) {}

  openMenu(): void {
    this.dialog.open(MenuDialog, {
      width: '250px',
    });
  }

  routeToCreateCharacter(): void {
    this.router.navigateByUrl('/create');
  }
}

@Component({
  selector: 'menu-dialog',
  templateUrl: 'menu-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class MenuDialog {
  constructor(public dialogRef: MatDialogRef<MenuDialog>) {}
}
