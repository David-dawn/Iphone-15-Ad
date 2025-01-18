import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Group } from "three";
import  Timeline  from "gsap";

gsap.registerPlugin(ScrollTrigger);

// Define types for the parameters
type GsapTarget = string | Element | HTMLElement; // Adjust based on your use case
type AnimationProps = gsap.TweenVars; // GSAP's TweenVars for animation properties
type ScrollProps = ScrollTrigger.Vars; // ScrollTrigger's Vars for scroll properties

export const animateWithGsap = (
  target: GsapTarget,
  animationProps: AnimationProps,
  scrollProps: ScrollProps
) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

// Define a type for rotationState
type RotationState = {
  rotation: number;
};

// Define the animateWithGsapTimeline function


// Update types for props
export const animateWithGsapTimeline = (
  timeline: gsap.core.Timeline,
  rotationRef: React.MutableRefObject<Group>, // Correct type
  rotationState: number, // This assumes you're animating `rotation.y` specifically
  firstTarget: string,
  secondTarget: string,
  animationProps: Record<string, any>
) => {
  // Access the y-axis rotation for GSAP animations
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};

