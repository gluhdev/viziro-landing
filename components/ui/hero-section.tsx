'use client'
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Shape, ExtrudeGeometry } from 'three';
import * as THREE from 'three';

interface BoxProps {
    position: [number, number, number];
    rotation: [number, number, number];
}

const Box: React.FC<BoxProps> = ({ position, rotation }) => {
    const shape = new Shape();
    const angleStep = Math.PI * 0.5;
    const radius = 1;

    shape.absarc(2, 2, radius, angleStep * 0, angleStep * 1);
    shape.absarc(-2, 2, radius, angleStep * 1, angleStep * 2);
    shape.absarc(-2, -2, radius, angleStep * 2, angleStep * 3);
    shape.absarc(2, -2, radius, angleStep * 3, angleStep * 4);

    const extrudeSettings = {
        depth: 0.3,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.05,
        bevelSegments: 20,
        curveSegments: 20
    };

    const geometry = new ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();

    // Generate gradient color based on position
    const colorIndex = Math.abs(position[0]) / 20;
    const hue = (colorIndex * 60 + 200) % 360; // Blue to purple gradient
    const color = `hsl(${hue}, 70%, 50%)`;

    return (
        <mesh
            geometry={geometry}
            position={position}
            rotation={rotation}
        >
            <meshPhysicalMaterial
                color={color}
                metalness={0.8}
                roughness={0.2}
                reflectivity={0.8}
                emissive={color}
                emissiveIntensity={0.1}
                transparent={false}
                opacity={1.0}
                transmission={0.0}
                clearcoat={0.3}
                clearcoatRoughness={0.1}
                flatShading={false}
                depthWrite={true}
                depthTest={true}
            />
        </mesh>
    );
};

const AnimatedBoxes = () => {
    const groupRef = useRef<THREE.Group>(null);

    // Определяем количество элементов в зависимости от устройства
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const boxCount = isMobile ? 25 : 50; // Меньше элементов для мобильных

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.x += delta * 0.15;
            groupRef.current.rotation.y += delta * 0.08;
        }
    });

    const boxes = Array.from({ length: boxCount }, (_, index) => ({
        position: [(index - boxCount/2) * 0.75, 0, 0] as [number, number, number],
        rotation: [
            (index - 10) * 0.1,
            Math.PI / 2,
            0
        ] as [number, number, number],
        id: index
    }));

    return (
        <group ref={groupRef}>
            {boxes.map((box) => (
                <Box
                    key={box.id}
                    position={box.position}
                    rotation={box.rotation}
                />
            ))}
        </group>
    );
};

export const Scene = () => {
    // Оптимизация для мобильных устройств
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    return (
        <div className="w-full h-full absolute inset-0 z-0">
            <Canvas
                camera={{ position: [5, 5, 20], fov: 40 }}
                dpr={isMobile ? [1, 1.5] : [1, 2]} // Ограничиваем DPR на мобильных
                performance={{ min: 0.5 }} // Адаптивная производительность
                gl={{
                    antialias: !isMobile, // Отключаем антиалиасинг на мобильных для производительности
                    powerPreference: "high-performance"
                }}
            >
                <ambientLight intensity={15} />
                <directionalLight position={[10, 10, 5]} intensity={15} />
                <AnimatedBoxes />
            </Canvas>
        </div>
    );
};