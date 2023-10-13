import { IonAvatar, IonBackButton, IonBadge, IonButton, IonButtons, IonCard, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import { logoFacebook, logoGoogle, logoTwitter, logoWhatsapp } from 'ionicons/icons'
import React from 'react'

function Invitefriend() {
  return (
    <IonPage>
      <IonHeader className='header' mode='md'>
        <IonToolbar className='silver'>
          <IonButtons  slot="start">
            <IonButton routerLink='/profile' mode='ios' className='back-button'>
              <IonIcon size='default' src='/public/svg/back.svg'></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle ><b style={{color:'black'}}>Invite Friends</b></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color={'light'} className='ion-padding'>
        <IonCard style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px", borderRadius: "10px", margin: '0px' }}>

          {
            [0, 1, 2, 3, 4, 5, 6].map(
              data => (
                <>
                  <IonItem mode='md' lines='full' button >
                    <IonAvatar slot='start'>
                      <img src="" alt="" />
                    </IonAvatar>
                    <IonLabel>
                      <h2><b>Sagheer Ahmed</b></h2>
                      <p>+9230000000000</p>
                    </IonLabel>
                    <IonChip color={'primary'}>
                      invite
                    </IonChip>
                  </IonItem>
                </>
              )
            )
          }
        </IonCard>
        <h3>Share via invite</h3>
        <IonButtons>
          <IonButton mode='ios'><IonIcon color='primary' icon={logoFacebook} size='large'></IonIcon></IonButton>
          <IonButton mode='ios'><IonIcon color='primary' icon={logoTwitter} size='large'></IonIcon></IonButton>
          <IonButton mode='ios'><IonIcon color='primary' icon={logoGoogle} size='large'></IonIcon></IonButton>
          <IonButton mode='ios'><IonIcon color='primary' icon={logoWhatsapp} size='large'></IonIcon></IonButton>
        </IonButtons>
      </IonContent>
    </IonPage>
  )
}

export default Invitefriend