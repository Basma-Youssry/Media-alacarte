import { Component } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  animations: [

    trigger('fadeUp', [
      state('show', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(30px)'
      })),
      transition('hidden => show', [
        animate('700ms ease-out')
      ])
    ]),

    trigger('fadeDown', [
      state('show', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(-30px)'
      })),
      transition('hidden => show', [
        animate('700ms ease-out')
      ])
    ]),

    trigger('zoomIn', [
      state('show', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      state('hidden', style({
        opacity: 0,
        transform: 'scale(0.8)'
      })),
      transition('hidden => show', [
        animate('500ms ease-out')
      ])
    ])
  ]
})
export class HeroComponent {

  animationState = 'hidden';

  ngOnInit() {
    setTimeout(() => {
      this.animationState = 'show';
    });
  }
}