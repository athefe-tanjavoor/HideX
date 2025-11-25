"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import LiquidEther to avoid SSR issues
const LiquidEther = dynamic(() => import("../effects/LiquidEther"), {
  ssr: false,
});

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <LiquidEther
        colors={['#8b4513', '#d2691e', '#cd853f']}
        mouseForce={15}
        cursorSize={120}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.4}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.3}
        autoIntensity={1.8}
        takeoverDuration={0.3}
        autoResumeDelay={4000}
        autoRampDuration={0.8}
      />
    </div>
  );
}
