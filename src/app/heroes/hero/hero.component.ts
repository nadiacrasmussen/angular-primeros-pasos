import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  public name: string = 'spiderman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  getHeroDescription(): string {
    return `${this.name}-${this.age}`;
  }
changeHero():void{
  this.name = 'ironman'
}
changeAge():void{
  this.age = 34;
}

reset():void{
  this.age = 45;
  this.name = 'spiderman'
}



}
