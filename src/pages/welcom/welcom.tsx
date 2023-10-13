import { IonAvatar, IonButton, IonContent, IonGrid, IonImg, IonLabel, IonList, IonPage } from '@ionic/react'
import React from 'react'
import './welcom.css'
import { useHistory } from 'react-router';

function Welcom() {
    const history = useHistory();
    const signupPage = () => {
        history.push('/login')
    }
  

    return (
        <IonPage>
            <IonList className='IonPage'>


                <IonImg onClick={()=>history.push('/login')} src="src\images\logo tranperant.png" className='welcomimage'></IonImg>
               
            </IonList>
        </IonPage>
    )
}

export default Welcom