import { IonBackButton, IonButton, IonButtons, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonLabel, IonModal, IonPage, IonRow, IonTextarea, IonTitle, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import Tabs from '../../components/tabs'
import { arrowForward, camera, cameraOutline, close, cloudUpload, cloudUploadOutline, create, createOutline, document, documentOutline, scanCircle, scanCircleOutline } from 'ionicons/icons'
import './Tools.css'
import ScanbotSDK from 'cordova-plugin-scanbot-sdk';
import CameraOpen from '../../components/cameraOpen'
import PdfGenerator from '../../components/PdfGenerator'
import tool1 from '../../images/scan.png'
import tool2 from '../../images/smartphone.png'
import tool3 from '../../images/doc.png'
import tool4 from '../../images/notepad.png'

function Tools() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState("");
  const [scannedImage, setScannedImage] = useState();

  // const scanDocument = async () => {
  //   // start the document scanner
  //   const  {scannedImages}  = await DocumentScanner.scanDocument()
  //   // setScannedImage(scannedImages)
  //   // get back an array with scanned image file paths
  //   // if (scannedImages.length > 0) {
  //   //   // set the img src, so we can view the first scanned image
  //   //   setScannedImage(scannedImages[0])
  //   // }
  // }
  return (
    <IonPage>
      <IonHeader className='header' mode='md'>
        <IonToolbar color='light'>
          <IonButtons slot="start">
            <IonBackButton defaultHref="#"></IonBackButton>
          </IonButtons>
          <IonTitle><b style={{ color: 'black' }}>Tools</b></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color='light' className=' ion-padding'>

      <PdfGenerator/>

        <IonRow>
          <IonCol onClick={() => { setIsOpen(true), setState("camera") }} size='6' sizeMd='3'>
            <IonRow>
              <IonImg className='cameraIcon cen' src={tool2}>
              </IonImg>
            </IonRow>
            <h3 color='primary' className='cameraText'>Camera</h3>
          </IonCol>
          <IonCol onClick={() => { setIsOpen(true), setState("scaner") }} size='6' sizeMd='3'>
            <IonRow>
              <IonImg className='cameraIcon cen' src={tool1}>
              </IonImg>
            </IonRow>
            <h3 color='primary' className='cameraText'>Scaner</h3>
          </IonCol>
          <IonCol onClick={() => { setIsOpen(true), setState("file") }} size='6' sizeMd='3'>
            <IonRow>
              <IonImg className='cameraIcon cen' src={tool3}>
              </IonImg>
            </IonRow>
            <h3 color='primary' className='cameraText'>Chose file</h3>
          </IonCol>
          <IonCol onClick={() => { setIsOpen(true), setState("text") }} size='6' sizeMd='3'>
            <IonRow>
              <IonImg className='cameraIcon cen' src={tool4}>
              </IonImg>
            </IonRow>
            <h3 color='primary' className='cameraText'>Write Text</h3>
          </IonCol>
        </IonRow>
        {/* xsx */}
        <IonModal className='silver' mode='ios' isOpen={isOpen}>
          <IonHeader mode='md' className='header'>
            <IonToolbar className='silver'>
              <IonTitle>Tools</IonTitle>
              <IonButtons slot="end">
                <IonButton color="danger" onClick={() => setIsOpen(false)}> <IonIcon icon={close}></IonIcon> </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className=" silver ion-padding">
            {
              state === "camera" ? <>

                <CameraOpen />
                <br />
                <IonInput className='custom' placeholder='write aditional text max cracter (30)' maxlength={30}></IonInput>
              </> : state === "scaner" ? <>
                <IonButton expand='full' shape='round' mode='ios' color='primary' >
                  <IonLabel>Scan Now</IonLabel> <IonIcon className='iconForword' icon={arrowForward}></IonIcon>
                </IonButton>
                <br />
                <IonInput className='custom' placeholder='write aditional text max cracter (30)' maxlength={30}></IonInput>
              </> : state === "file" ? <>
                <label className="custom-file-upload">
                  <input multiple type="file" />
                </label>
                <br />
                <br />
                <IonInput className='custom' placeholder='write aditional text max cracter (30)' maxlength={30}></IonInput>
              </> : state === "text" ? <>
                <IonTextarea
                  placeholder="Enter your data"
                  fill="outline"
                  className='textarea'
                  rows={100}
                ></IonTextarea>
              </> : <></>
            }




          </IonContent>
          <IonButton className='btnbottom' expand='full' shape='round' mode='ios' color='primary' >
            <IonLabel>Upload</IonLabel> <IonIcon className='iconForword' icon={cloudUploadOutline}></IonIcon>
          </IonButton>
        </IonModal>
      </IonContent>

      <Tabs />
    </IonPage>
  )
}

export default Tools