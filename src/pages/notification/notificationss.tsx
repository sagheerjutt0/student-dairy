import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonPage, IonRow, IonTitle, IonToggle, IonToolbar } from '@ionic/react'
import React from 'react'
import './notificationss.css'

function Notificationss() {
  return (
    <IonPage>
      <IonHeader className='header' mode='md'>
        <IonToolbar className='silver'>
          <IonButtons slot="start">
            <IonBackButton defaultHref="#"></IonBackButton>
          </IonButtons>
          <IonTitle>Notifications</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='silver ion-padding'>
        <IonGrid>
          <IonRow>
            <IonCol size='12'>
              <IonItem lines='none' className='backgroundtrnsparent'>
                <IonToggle className='toggle'>Special Offer</IonToggle>
              </IonItem>
            </IonCol>
            <IonCol size='12'>
              <IonItem lines='none' className='backgroundtrnsparent'>
                <IonToggle className='toggle'>Sound</IonToggle>
              </IonItem>
            </IonCol>
            <IonCol size='12'>
              <IonItem lines='none' className='backgroundtrnsparent'>
                <IonToggle className='toggle'>Vibrate</IonToggle>
              </IonItem>
            </IonCol>
            <IonCol size='12'>
              <IonItem lines='none' className='backgroundtrnsparent'>
                <IonToggle className='toggle'>Genral Notification</IonToggle>
              </IonItem>
            </IonCol>
            <IonCol size='12'>
              <IonItem lines='none' className='backgroundtrnsparent'>
                <IonToggle className='toggle'>Promo & Discount</IonToggle>
              </IonItem>
            </IonCol>
            <IonCol size='12'>
              <IonItem lines='none' className='backgroundtrnsparent'>
                <IonToggle className='toggle'>Payment Options</IonToggle>
              </IonItem>
            </IonCol>
            <IonCol size='12'>
              <IonItem lines='none' className='backgroundtrnsparent'>
                <IonToggle className='toggle'>App Update</IonToggle>
              </IonItem>
            </IonCol>
            <IonCol size='12'>
              <IonItem lines='none' className='backgroundtrnsparent'>
                <IonToggle className='toggle'>New Service Availabel</IonToggle>
              </IonItem>
            </IonCol>
            <IonCol size='12'>
              <IonItem lines='none' className='backgroundtrnsparent'>
                <IonToggle className='toggle'>New Tips Availabel</IonToggle>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Notificationss