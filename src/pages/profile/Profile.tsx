import React from 'react'
import './Profile.css'
import { IonAvatar, IonBackButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonPage, IonRow, IonTitle, IonToolbar, useIonAlert } from '@ionic/react'
import Tabs from '../../components/tabs'
import { chevronForwardOutline, eyeOutline, helpCircleOutline, imageOutline, languageOutline, lockClosedOutline, notificationsOutline, personOutline, shareOutline, walletOutline, warningOutline } from 'ionicons/icons'

function Profile() {
  const [presentAlert] = useIonAlert();
  return (
    <IonPage>
      <IonHeader className='header' mode='md'>
        <IonToolbar className='silver'>
          <IonButtons slot="start">
            <IonBackButton defaultHref="#"></IonBackButton>
          </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='silver ion-padding'>
        <IonGrid>
          <IonRow>
            <IonCol size='12'>
              <div className='divprofile'>
                <IonAvatar className='profiepic'>
                  <img src="" alt="" />
                </IonAvatar>
                <IonIcon className='imageiconp' icon={imageOutline}></IonIcon>
              </div>
              <IonCard className='profilemaincard'>
                <h3 className='profilename'> Sagheer Jutt</h3>
                <p className='cen topprofil'>sagheer@gmail.com</p>
                <IonItem button routerLink='/editprofile' lines='none' mode='md'>
                  <IonIcon className='functionicon' slot='start' icon={personOutline}></IonIcon>
                  <h3 className='functionname' slot='start'>Edit Profile</h3>
                  <IonIcon className='chevronprofile' slot='end' icon={chevronForwardOutline}></IonIcon>
                </IonItem>
                <IonItem routerLink='/paymentoption' lines='none' mode='md'>
                  <IonIcon className='functionicon' slot='start' icon={walletOutline}></IonIcon>
                  <h3 className='functionname' slot='start'>Payment Option</h3>
                  <IonIcon className='chevronprofile' slot='end' icon={chevronForwardOutline}></IonIcon>
                </IonItem>
                <IonItem routerLink='/notificationss' lines='none' mode='md'>
                  <IonIcon className='functionicon' slot='start' icon={notificationsOutline}></IonIcon>
                  <h3 className='functionname' slot='start'>Notifications</h3>
                  <IonIcon className='chevronprofile' slot='end' icon={chevronForwardOutline}></IonIcon>
                </IonItem>
                <IonItem routerLink='/security' lines='none' mode='md'>
                  <IonIcon className='functionicon' slot='start' icon={lockClosedOutline}></IonIcon>
                  <h3 className='functionname' slot='start'>Security</h3>
                  <IonIcon className='chevronprofile' slot='end' icon={chevronForwardOutline}></IonIcon>
                </IonItem>
                <IonItem
                onClick={() =>
                  presentAlert({
                    header: 'On Dark Mode',
                   
                    buttons:[
                      {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                          console.log('Alert canceled');
                        },
                      },
                      {
                        text: 'OK',
                        role: 'confirm',
                        handler: () => {
                          console.log('Alert confirmed');
                        },
                      },
                    ],
                  })
                }
                lines='none' mode='md'>
                  <IonIcon className='functionicon' slot='start' icon={eyeOutline}></IonIcon>
                  <h3 className='functionname' slot='start'>Dark Mode</h3>
                  <IonIcon className='chevronprofile' slot='end' icon={chevronForwardOutline}></IonIcon>
                </IonItem>
                <IonItem lines='none' mode='md'>
                  <IonIcon className='functionicon' slot='start' icon={warningOutline}></IonIcon>
                  <h3 className='functionname' slot='start'>Terms & Condition</h3>
                  <IonIcon className='chevronprofile' slot='end' icon={chevronForwardOutline}></IonIcon>
                </IonItem>
                <IonItem lines='none' mode='md'>
                  <IonIcon className='functionicon' slot='start' icon={helpCircleOutline}></IonIcon>
                  <h3 className='functionname' slot='start'>Help Center</h3>
                  <IonIcon className='chevronprofile' slot='end' icon={chevronForwardOutline}></IonIcon>
                </IonItem>
                <IonItem routerLink='/invitefriend' lines='none' mode='md'>
                  <IonIcon className='functionicon' slot='start' icon={shareOutline}></IonIcon>
                  <h3 className='functionname' slot='start'>Share With Friends</h3>
                  <IonIcon className='chevronprofile' slot='end' icon={chevronForwardOutline}></IonIcon>
                </IonItem>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        
      </IonContent>
      <Tabs />
    </IonPage>
  )
}

export default Profile