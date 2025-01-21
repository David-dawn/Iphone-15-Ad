import { PerspectiveCamera, View, OrbitControls } from "@react-three/drei";
import Lights from "./Lights";
import Loader from "./Loader";
import Iphone from "./Iphone";
import { Suspense, RefObject } from "react";
import { Group, Vector3 } from "three"; // Import Group explicitly from three

// Define the props interface
interface ModelViewProps {
  index: number;
  groupRef: RefObject<Group>; // Proper type for Three.js group ref
  gsapType: string;
  controlRef: RefObject<any>; // Adjust type if needed for OrbitControls
  setRotationState: (rotation: number) => void;
  size: [number, number, number];
  item: any; // Replace `any` with the actual type of the model object
}

const ModelView: React.FC<ModelViewProps> = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new Vector3(0, 0, 0)}
        onEnd={() =>
          setRotationState(controlRef.current.getAzimuthalAngle())
        }
      />

      <group
        ref={groupRef}
        name={`${index === 1 ? "small" : "large"}`}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <Iphone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item} // Prop passed here is valid
            // Prop passed here is valid
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
