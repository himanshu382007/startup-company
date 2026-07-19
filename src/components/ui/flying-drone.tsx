'use client'

import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { SplineScene } from './splite';

export function FlyingDrone() {
  const [isMounted, setIsMounted] = useState(false);
  
  // Drone exact coordinates
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Tilt/rotation
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  
  // Mutable state for the loop to fetch without re-renders
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setIsMounted(true);
    
    // Set initial cursor target to center
    target.current = { x: 0, y: 0 };
    current.current = { x: 0, y: 0 };
    
    const handleMouseMove = (e: MouseEvent) => {
      // The container is a fixed flex-center, so coordinate (0,0) is the exact center of the screen
      target.current.x = e.clientX - window.innerWidth / 2;
      target.current.y = e.clientY - window.innerHeight / 2;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Continuous Animation Loop using requestAnimationFrame (via Framer Motion)
  useAnimationFrame(() => {
    // 1. Calculate the distance and velocity to the target (lag effect)
    const velX = target.current.x - current.current.x;
    const velY = target.current.y - current.current.y;
    
    // 2. Interpolate position for a smooth pursuit/following effect
    current.current.x += velX * 0.05;
    current.current.y += velY * 0.05;
    
    // 3. Set the interpolated positions on the MotionValues
    x.set(current.current.x);
    y.set(current.current.y);
    
    // 4. Calculate subtle tilt based on the velocity
    // If it's moving fast to the right, it should tilt facing right (positive rotateY)
    // If it's moving fast downwards, it should tip forward (negative rotateX)
    const targetRotateY = velX * 0.03;
    const targetRotateX = -velY * 0.03;
    
    // Interpolate the rotation so the tilting is also smoothed
    const currentRotX = rotateX.get();
    const currentRotY = rotateY.get();
    
    rotateX.set(currentRotX + (targetRotateX - currentRotX) * 0.1);
    rotateY.set(currentRotY + (targetRotateY - currentRotY) * 0.1);
  });

  if (!isMounted) return null;

  return (
    <div className="hidden md:flex fixed inset-0 pointer-events-none z-[100] perspective-1000 overflow-hidden items-center justify-center">
      <motion.div
        className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] relative"
        style={{
          x,
          y,
          scale: 0.5,
        }}
      >
        <motion.div
          className="w-full h-full"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          <SplineScene 
            scene="https://prod.spline.design/R7ngLTRGSsIszOL0/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
