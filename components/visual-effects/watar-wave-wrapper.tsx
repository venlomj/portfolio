"use client";
import React, { FC, ReactNode } from "react";
import WaterWave from "react-water-wave";

interface WatarWaveWrapperprops {
  imageUrl: string;
  dropRadius: string;
  perturbance: string;
  resolution: string;
  children: () => ReactNode;
}

const WatarWaveWrapper: FC<WatarWaveWrapperprops> = ({
  imageUrl,
  dropRadius,
  perturbance,
  resolution,
  children,
}) => {
  return (
    <WaterWave
      imageUrl={imageUrl}
      dropRadius={dropRadius}
      perturbance={perturbance}
      resolution={resolution}
    >
      {children}
    </WaterWave>
  );
};

export default WatarWaveWrapper;
