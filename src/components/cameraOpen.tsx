import React, { useState } from 'react'
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonButton, IonLabel, IonIcon, IonImg, IonCard } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';



function cameraOpen() {
  const [capturedImage, setCapturedImage] = useState<any>([]);


  const takePhoto = async () => {
    try {
      const image = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        quality: 90,
        source: CameraSource.Camera,
        
      });


      setCapturedImage(() => {
        return [...capturedImage, { capturedImage, image: image.webPath }];
      });

      console.log(image.webPath);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(capturedImage)

  return (
    <div>
      <IonButton onClick={takePhoto} expand='full' shape='round' mode='ios' color='primary' >
        <IonLabel>Open Camera</IonLabel> <IonIcon className='iconForword' icon={arrowForward}></IonIcon>
      </IonButton>
      {capturedImage.length > 0 && (
        <Swiper spaceBetween={5} slidesPerView={1.2}>
          {capturedImage.map((item: any,index:number) => (
            <SwiperSlide key={index}>
              <IonCard>
              <IonImg src={item.image} alt={`Captured ${index}`} />
              </IonCard>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

    </div>
  )
}

export default cameraOpen