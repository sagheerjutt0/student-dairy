// // src/pages/PdfGenerator.tsx
// import React, { useState, useRef, useCallback } from 'react';
// import { IonButton, IonImg } from '@ionic/react';
// import Tesseract from 'tesseract.js';
// import ReactEasyCrop from 'react-easy-crop';
// import jsPDF from 'jspdf';

// const PdfGenerator: React.FC = () => {
//   const [selectedImages, setSelectedImages] = useState<File[]>([]);
//   const [galleryVisible, setGalleryVisible] = useState(false);
//   const [crop, setCrop] = useState({ x: 0, y: 0, width: 100, height: 100 });

//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const openGallery = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     const files = event.target.files;

//     if (files) {
//       const fileArray = Array.from(files);
//       setSelectedImages(fileArray);

//       if (fileArray.length > 0) {
//         await recognizeText(fileArray[0]);
//       }

//       setGalleryVisible(true);
//     }
//   };

//   const recognizeText = async (file: File) => {
//     const { data: { text } } = await Tesseract.recognize(
//       URL.createObjectURL(file),
//       'eng',
//       { logger: info => console.log(info) }
//     );

//     console.log('Recognized Text:', text);
//   };

//   const onCropChange = (newCrop: React.SetStateAction<{ x: number; y: number; width: number; height: number; }>) => {
//     setCrop(newCrop);
//   };

//   const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
//     const highlightedText = extractHighlightedText(croppedAreaPixels);
//     console.log('Highlighted Text:', highlightedText);
//   }, [selectedImages]);

//   const extractHighlightedText = (croppedAreaPixels: any) => {
//     // Process croppedAreaPixels to get highlighted text information
//     // For simplicity, let's assume the text is highlighted with a color, and we detect pixels with that color.

//     return 'Highlighted Text';
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF();

//     for (let i = 0; i < selectedImages.length; i++) {
//       const file = selectedImages[i];
//       const img = new Image();
//       img.src = URL.createObjectURL(file);

//       const width = doc.internal.pageSize.getWidth() - 20;
//       const height = (width / img.width) * img.height;

//       if (i > 0) {
//         doc.addPage();
//       }

//       doc.addImage(img, 'JPEG', 10, 10, width, height);
//     }

//     doc.save('images.pdf');
//   };

//   return (
//     <div>
//       <IonButton onClick={openGallery}>Pick Images</IonButton>
//       <input
//         ref={fileInputRef}
//         type="file"
//         accept="image/*"
//         multiple
//         style={{ display: 'none' }}
//         onChange={handleFileChange}
//       />
//       {galleryVisible && selectedImages.length > 0 && (
//         <div>
//           <IonImg src={URL.createObjectURL(selectedImages[0])} alt={`Selected`} />
//           <ReactEasyCrop
//             image={URL.createObjectURL(selectedImages[0])}
//             crop={crop}
//             onCropComplete={onCropComplete}
//             zoom={1} // Add a default zoom level
//             onZoomChange={() => { }} // Add a placeholder function for onZoomChange
//             aspect={0}
//           />
//           <IonButton onClick={generatePDF}>Generate PDF</IonButton>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PdfGenerator;
