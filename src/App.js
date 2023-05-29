// Originally forked from https://codesandbox.io/s/r3f-basic-demo-3izwu?file=/src/App.js:0-2775
import "./styles.css";
import { useState, Suspense } from "react";
import { motion, MotionConfig } from "framer-motion";
import { Scene } from "./Scene";
import { transition } from "./settings";

export default function App() {
  const [isFullscreen, setFullscreen] = useState(false);

  return (
    <MotionConfig transition={transition}>
      <div
        data-is-fullscreen={isFullscreen}
        onClick={() => setFullscreen(!isFullscreen)}
      >
        <motion.h1 layout children="<LayoutCamera />" />
        <motion.div className="container" layout>
          <Suspense fallback={null}>
            <Scene isFullscreen={isFullscreen} />
          </Suspense>
        </motion.div>
      </div>
    </MotionConfig>
  );
}
