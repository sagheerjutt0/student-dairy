import { IonAvatar, IonBackButton, IonButtons, IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import './call.css'
import React from 'react'
import { callOutline, micOffOutline, videocamOffOutline } from 'ionicons/icons'

function Call() {
    return (
        <IonPage>
            <IonHeader className='header' mode='md'>
                <IonToolbar className='silver'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="#"></IonBackButton>
                    </IonButtons>

                </IonToolbar>
            </IonHeader>
            <IonContent className='silver ion-padding'>

                <div className='centr'>
                    <IonAvatar className='callavatar'>
                        <img src="" alt="" />
                    </IonAvatar>
                    <h1 className='cen'>Ladi jutT</h1>
                    <p className='cen'>4:00</p>
                </div>
                <div className='callcut'>
                    <IonRow>
                        <IonCol size="4">
                            <IonRow>
                                <IonIcon className='miciconcall' icon={micOffOutline}></IonIcon>
                            </IonRow>
                        </IonCol>
                        <IonCol size="4">
                            <IonRow>
                                <IonIcon className='cutticoncall' icon={callOutline}></IonIcon>
                            </IonRow>
                        </IonCol>
                        <IonCol size="4">
                            <IonRow>
                                <IonIcon className='vedioiconcall' icon={videocamOffOutline}></IonIcon>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Call