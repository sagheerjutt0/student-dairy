import { IonBackButton, IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToggle, IonToolbar } from '@ionic/react'
import { arrowForward, chevronForwardOutline } from 'ionicons/icons'
import React from 'react'
import "./security.css"

function Security() {
    return (
        <IonPage>
            <IonHeader className='header' mode='md'>
                <IonToolbar className='silver'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="#"></IonBackButton>
                    </IonButtons>
                    <IonTitle> <b style={{color:'black'}}>Security</b> </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='silver ion-padding'>
                <IonGrid>
                    <IonRow>
                        <IonCol size='12'>
                            <IonItem lines='none' className='backgroundtrnsparent'>
                                <IonToggle color='primary'>Remember Me</IonToggle>
                            </IonItem>
                        </IonCol>
                        <IonCol size='12'>
                            <IonItem lines='none' className='backgroundtrnsparent'>
                                <IonToggle color='primary'>Biometric Id</IonToggle>
                            </IonItem>
                        </IonCol>
                        <IonCol size='12'>
                            <IonItem lines='none' className='backgroundtrnsparent'>
                                <IonToggle color='primary' >Face ID</IonToggle>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonItem className='backgroundtrnsparent' button routerLink='/editprofile' lines='none' mode='md'>
                                <p style={{ color: "black" }} slot='start'>Google Authenticator</p>
                                <IonIcon className='chevronprofile' slot='end' icon={chevronForwardOutline}></IonIcon>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
            <IonCard className='SearchBar1'>
                <IonButton  className='btnbottom34' expand='full' shape='round' mode='ios'  >
                    <IonLabel>Change Pin</IonLabel>
                </IonButton>
                <IonButton  className='btnbottom' expand='full' shape='round' mode='ios' color='primary' >
                    <IonLabel>Change Password</IonLabel> <IonIcon className='iconForword' icon={arrowForward}></IonIcon>
                </IonButton>
            </IonCard>
        </IonPage>
    )
}

export default Security