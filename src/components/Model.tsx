import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { useEffect, useRef, useState } from "react";
import { yellowImg } from "../utils";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import * as THREE from "three";
import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from "../utils/animation"; // Update path to animation.ts
import { extend } from "@react-three/fiber";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

extend({ View });

const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iphone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE789", "#6F6C64"],
    img: yellowImg,
  });

  // CameraControl
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // Model
  const small = useRef<THREE.Group>(new THREE.Group());
  const large = useRef<THREE.Group>(new THREE.Group());

  // Rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);


  const tl = gsap.timeline();

  useEffect(() => {
    if(size === 'large') {
      animateWithGsapTimeline(tl, small, smallRotation, '#view1', '#view2', {
        transform: 'translateX(-100%)',
        duration: 2
      })
    }

    if(size === 'small') {
      animateWithGsapTimeline(tl, large, largeRotation, '#view2', '#view1', {
        transform: 'translateX(0)',
        duration: 2
      })
    }
  }, [size])

  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  });

  const sizeMap: Record<string, [number, number, number]> = {
    small: [1, 1, 1], // Example values for "small"
    large: [2, 2, 2], // Example values for "large"
  };

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>

        <div className="flex flex-col items-center mt-">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            {/* Render ModelView components with View already defined */}
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={sizeMap[size]}
            />
            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={sizeMap[size]}
            />

            {/* Canvas */}
            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={rootElement}
            >
              <View.Port/>
            </Canvas>
              
             </div>
           
          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center">{model.title}</p>

            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                    style={{
                      backgroundColor: item.color[0],
                    }}
                    onClick={() => setModel(item)}
                  ></li>
                ))}
              </ul>

              <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
