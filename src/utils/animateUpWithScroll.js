import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const animateUpWithScroll = (elements, contentWrapper) => {
  gsap.set([...elements], {autoAlpha: 0});
  [...elements].forEach(el => {
    gsap.fromTo(el, {y: '+=100'}, {
      duration: 1, y: '-=100', autoAlpha: 1, scrollTrigger: {
        trigger: el,
        scroller: contentWrapper,
        start: 'top 100%',
      }
    });
  });
};