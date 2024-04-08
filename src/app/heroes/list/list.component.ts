import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {

  public heroNames: string[] = [
    'spiderman',
    'ironman',
    'superman',
    'hulk',
    'thor',
  ];
public deletedHero? :string ;

   removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
