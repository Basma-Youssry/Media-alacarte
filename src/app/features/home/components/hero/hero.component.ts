import { Component, ElementRef } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {

  // ngAfterViewInit(): void {
  //   this.initTimeline();
  // }

  // private initTimeline(): void {
  //   const timeline1 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '#section1',
  //       start: '-50% top',
  //       end: '100% bottom',
  //       scrub: true,
  //       markers: true, // شيلها في production
  //     },
  //   });

  //   // TEXT 1
  //   timeline1.fromTo(
  //     '#section1-content-text-left-text1',
  //     {
  //       clipPath: 'inset(0 100% 0 0)',
  //       opacity: 0,
  //     },
  //     {
  //       clipPath: 'inset(0 0% 0 0)',
  //       opacity: 1,
  //       duration: 1,
  //       ease: 'power2.inOut',
  //     }
  //   );

  //   // TEXT 2
  //   timeline1.fromTo(
  //     '#section1-content-text-left-text2',
  //     {
  //       clipPath: 'inset(0 0 0 100%)',
  //       opacity: 0,
  //     },
  //     {
  //       clipPath: 'inset(0 0 0 0%)',
  //       opacity: 1,
  //       duration: 1,
  //       ease: 'power2.inOut',
  //     },
  //     '+=0.2'
  //   );
  // }

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.initTimeline();
  }

  private initTimeline(): void {
    const section = this.el.nativeElement.querySelector('#section1');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,

        start: 'top 75%',
        end: 'bottom 25%',

        toggleActions: 'play reverse play reverse',

        markers: false,
      },
    });

    // TEXT 1
    tl.fromTo(
      '#section1-content-text-left-text1',
      {
        clipPath: 'inset(0 100% 0 0)',
        opacity: 0,
      },
      {
        clipPath: 'inset(0 0% 0 0)',
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    // TEXT 2
    tl.fromTo(
      '#section1-content-text-left-text2',
      {
        clipPath: 'inset(0 0 0 100%)',
        opacity: 0,
      },
      {
        clipPath: 'inset(0 0 0 0%)',
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.4'
    );
  }
}