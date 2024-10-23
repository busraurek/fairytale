import { Injectable } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class PageTransitionService {
  constructor(private animationCtrl: AnimationController) {}

  slidePageTransition = (baseEl: any, opts?: any) => {
    var anim1 = this.animationCtrl
      .create()
      .addElement(
        opts.enteringEl
          ? opts.enteringEl.querySelector('.modal-wrapper')
          : baseEl.querySelector('.modal-wrapper')
      )
      .duration(500)
      .easing('ease-in-out')
      .fromTo('transform', 'translateY(100%)', 'translateY(0%)')
      .fromTo('opacity', '0', '1');
    var anim2 = this.animationCtrl
      .create()
      .addElement(
        opts.leavingEl
          ? opts.leavingEl.querySelector('.modal-wrapper')
          : baseEl.querySelector('.modal-wrapper')
      )
      .duration(500)
      .easing('ease-in-out')
      .fromTo('transform', 'translateY(0%)', 'translateY(100%)')
      .fromTo('opacity', '1', '0');
    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-in-out')
      .duration(500)
      .addAnimation([anim1, anim2]);
  };

  CustomPageTransition = (baseEl: any, opts?: any) => {
    var anim1 = this.animationCtrl
      .create()
      .addElement(baseEl.querySelector('.modal-wrapper'))
      .duration(500)
      .easing('ease-in-out')
      .fromTo('transform', 'translateY(100%)', 'translateY(0%)')
      .fromTo('opacity', '0', '1');
    var anim2 = this.animationCtrl
      .create()
      .addElement(baseEl.querySelector('.modal-wrapper'))
      .duration(500)
      .easing('ease-in-out')
      .fromTo('transform', 'translateY(0%)', 'translateY(100%)')
      .fromTo('opacity', '1', '0');
    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-in-out')
      .duration(500)
      .addAnimation([anim1, anim2]);
  };

  fadePageTransition = (baseEl: any, opts?: any) => {
    var anim1 = this.animationCtrl
      .create()
      .addElement(opts.leavingEl)
      .duration(200)
      .iterations(1)
      .easing('ease-out')
      .fromTo('opacity', '1', '0.0');
    var anim2 = this.animationCtrl
      .create()
      .addElement(opts.enteringEl)
      .duration(200)
      .iterations(1)
      .easing('ease-out')
      .fromTo('opacity', '0.0', '1');
    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-in-out')
      .duration(200)
      .addAnimation([anim1, anim2]);
  };

  bouncePageTransition = (baseEl: any, opts?: any) => {
    var anim1 = this.animationCtrl
      .create()
      .addElement(opts.enteringEl)
      .duration(500)
      .iterations(1)
      .easing('ease-out')
      .fromTo('transform', 'translateY(100%)', 'translateY(0%)')
      .fromTo('opacity', '0.0', '1');
    var anim2 = this.animationCtrl
      .create()
      .addElement(opts.leavingEl)
      .duration(500)
      .iterations(1)
      .easing('ease-out')
      .fromTo('transform', 'translateY(0%)', 'translateY(100%)')
      .fromTo('opacity', '1', '0.0');
    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-in-out')
      .duration(500)
      .addAnimation([anim1, anim2]);
  };

  zoomPageTransition = (baseEl: any, opts?: any) => {
    var anim1 = this.animationCtrl
      .create()
      .addElement(opts.enteringEl)
      .duration(500)
      .iterations(1)
      .easing('ease-out')
      .fromTo('transform', 'scale(0.5)', 'scale(1)')
      .fromTo('opacity', '0.0', '1');
    var anim2 = this.animationCtrl
      .create()
      .addElement(opts.leavingEl)
      .duration(500)
      .iterations(1)
      .easing('ease-out')
      .fromTo('transform', 'scale(1)', 'scale(0.5)')
      .fromTo('opacity', '1', '0.0');
    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-in-out')
      .duration(500)
      .addAnimation([anim1, anim2]);
  };

  flipPageTransition = (baseEl: any, opts?: any) => {
    var anim1 = this.animationCtrl
      .create()
      .addElement(opts.enteringEl)
      .duration(500)
      .iterations(1)
      .easing('ease-out')
      .fromTo('transform', 'rotateY(90deg)', 'rotateY(0deg)')
      .fromTo('opacity', '0.0', '1');
    var anim2 = this.animationCtrl
      .create()
      .addElement(opts.leavingEl)
      .duration(500)
      .iterations(1)
      .easing('ease-out')
      .fromTo('transform', 'rotateY(0deg)', 'rotateY(90deg)')
      .fromTo('opacity', '1', '0.0');
    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-in-out')
      .duration(500)
      .addAnimation([anim1, anim2]);
  };

  fadeInOutPageTransition = (baseEl: any, opts?: any) => {
    var anim1 = this.animationCtrl
      .create()
      .addElement(opts.enteringEl)
      .duration(500)
      .iterations(1)
      .easing('ease-out')
      .fromTo('opacity', '0.0', '1');
    var anim2 = this.animationCtrl
      .create()
      .addElement(opts.leavingEl)
      .duration(500)
      .iterations(1)
      .easing('ease-out')
      .fromTo('opacity', '1', '0.0');
    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-in-out')
      .duration(500)
      .addAnimation([anim1, anim2]);
  };

  fadeOutInPageTransition = (baseEl: any, opts?: any) => {
    var anim1 = this.animationCtrl
      .create()
      .addElement(opts.leavingEl)
      .duration(500)
      .iterations(1)
      .easing('ease-out')
      .fromTo('opacity', '1', '0.0');
    var anim2 = this.animationCtrl
      .create()
      .addElement(opts.enteringEl)
      .duration(500)
      .iterations(1)
      .easing('ease-out')
      .fromTo('opacity', '0.0', '1');
    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-in-out')
      .duration(500)
      .addAnimation([anim1, anim2]);
  };
}
