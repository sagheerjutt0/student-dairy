// src/pages/PdfGenerator.tsx
import { IonButton, IonImg } from '@ionic/react';
import React, { useState } from 'react';
import { Capacitor, Plugins } from '@capacitor/core';

const { DocumentScanner, Camera } = Plugins;

const PdfGenerator: React.FC = () => {
  const [scannedImages, setScannedImages] = useState<string[]>([]);

  const scanDocument = async () => {
    if (Capacitor.isPluginAvailable('DocumentScanner')) {
      const result = await DocumentScanner.scanDocument({
        letUserAdjustCrop: false,
      });

      // Check if scannedImages is defined before accessing its properties
      if (result && result.scannedImages && result.scannedImages.length > 0) {
        setScannedImages(result.scannedImages);
      }
    } else {
      // Handle the web platform case or show a message that the feature is not supported
      console.warn('Document scanning is not supported on the web.');

      // For demonstration purposes, you can use the Capacitor Camera plugin on the web
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: 'dataUrl',
        source: 'camera',
      });

      setScannedImages([image.dataUrl!]);
    }
  };

  return (
    <div>
      <IonButton onClick={scanDocument}>Scan Document</IonButton>

      {scannedImages.length > 0 && (
        <div>
          {scannedImages.map((image, index) => (
            <IonImg key={index} src={image} alt={`Scanned Image ${index + 1}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PdfGenerator;
