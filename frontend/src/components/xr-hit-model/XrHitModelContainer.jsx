import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrHitModel from "./XrHitModel";

const XrHitModelContainer = () => {
  return (
    <div className="h-screen">
      <ARButton
        sessionInit={{
          requiredFeatures: ["hit-test"],
        }}
      />
      <Canvas>
        <XR>
          <XrHitModel />
        </XR>
      </Canvas>

      {/* <button className="fixed bg-black text-white top-0 left-0">Test</button> */}
    </div>
  );
};

export default XrHitModelContainer;
