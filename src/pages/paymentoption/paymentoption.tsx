import { IonBackButton, IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import { arrowForward, cloudUploadOutline } from 'ionicons/icons'
import React from 'react'

function Paymentoption() {
    return (
        <IonPage>
            <IonHeader className='header' mode='md'>
                <IonToolbar className='silver'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="#"></IonBackButton>
                    </IonButtons>
                    <IonTitle><b style={{color:'black'}}>Payment Option</b></IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='silver ion-padding'>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px", borderRadius: "10px" }} lines='none'>
                                <p slot='start'>
                                    0293209470129309
                                </p>
                                <IonButton style={{ color: "#167F71", }} mode='ios' fill='clear' slot='end'>
                                    Connected
                                </IonButton>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
            <IonCard className='SearchBar'>
                <IonButton routerLink='/addnewcard' className='btnbottom' expand='full' shape='round' mode='ios' color='primary' >
                    <IonLabel>Add New Card</IonLabel> <IonIcon className='iconForword' icon={arrowForward}></IonIcon>
                </IonButton>
            </IonCard>
        </IonPage>
    )
}

export default Paymentoption