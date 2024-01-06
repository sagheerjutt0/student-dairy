declare module 'react-easy-crop' {
    import React from 'react';
  
    interface Area {
      x: number;
      y: number;
      width: number;
      height: number;
    }
  
    interface Crop {
      x: number;
      y: number;
    }
  
    interface CropperProps {
      image: string;
      crop: Crop;
      zoom: number;
      aspect: number;
      onCropChange: (crop: Crop) => void;
      onZoomChange: (zoom: number) => void;
      onCropComplete: (croppedArea: Area, croppedAreaPixels: Area) => void;
    }
  
    export const ReactEasyCrop: React.ComponentType<CropperProps>;
    export default ReactEasyCrop;
  }
  