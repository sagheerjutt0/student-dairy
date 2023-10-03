import { IonBackButton, IonButton, IonButtons, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonLabel, IonModal, IonPage, IonRow, IonTextarea, IonTitle, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import Tabs from '../../components/tabs'
import { arrowForward, cameraOutline, close, cloudUpload, cloudUploadOutline, createOutline, documentOutline, scanCircleOutline } from 'ionicons/icons'
import './Tools.css'

function Tools() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState("");
  return (
    <IonPage>
      <IonHeader className='header' mode='md'>
        <IonToolbar className='silver'>
          <IonButtons slot="start">
            <IonBackButton defaultHref="#"></IonBackButton>
          </IonButtons>
          <IonTitle>Tools</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='silver ion-padding'>
        <IonRow>
          <IonCol size='6'>
            <IonCard onClick={() => { setIsOpen(true), setState("camera") }} className='toolsCard'>
              <IonIcon className='cameraIcon' icon={cameraOutline}></IonIcon>
              <h3 className='cameraText'>Camera</h3>
            </IonCard>
          </IonCol>
          <IonCol size='6'>
            <IonCard onClick={() => { setIsOpen(true), setState("scaner") }} className='toolsCard'>
              <IonIcon className='cameraIcon' icon={scanCircleOutline}></IonIcon>
              <h3 className='cameraText'>Scaner</h3>
            </IonCard>
          </IonCol>
          <IonCol size='6'>
            <IonCard onClick={() => { setIsOpen(true), setState("file") }} className='toolsCard'>
              <IonIcon className='cameraIcon' icon={documentOutline}></IonIcon>
              <h3 className='cameraText'>Chose file</h3>
            </IonCard>
          </IonCol>
          <IonCol size='6'>
            <IonCard onClick={() => { setIsOpen(true), setState("text") }} className='toolsCard'>
              <IonIcon className='creaticon' icon={createOutline}></IonIcon>
              <h3 className='cameraText'>Write Text</h3>
            </IonCard>
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
                <IonButton expand='full' shape='round' mode='ios' color='primary' >
                  <IonLabel>Open Camera</IonLabel> <IonIcon className='iconForword' icon={arrowForward}></IonIcon>
                </IonButton>
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