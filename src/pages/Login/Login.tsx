import { IonAvatar, IonButton, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonLabel, IonList, IonPage, IonRow } from '@ionic/react'
import React, { useState } from 'react'
import './Login.css'
import { arrowForward, eyeOffOutline, eyeOutline, logoGoogle, mailOutline } from 'ionicons/icons'
import { useHistory } from 'react-router';

function Login() {

    const [showPassword, setShowPassword] = useState(true);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const history = useHistory();
    const nevigate = () => {
        history.push('/signup')
    }
    return (
        <IonPage>
            <IonContent className='silver ion-padding'>
                <IonRow>
                    <IonCol size='12'>
                        <IonList className='imag-list'></IonList>
                    </IonCol>
                    <IonCol size='12'>
                        <h3 className='bold'>Getting Started.!</h3>
                        <p>Creat an Account for store data</p>
                    </IonCol>
                    <IonCol size='12'>
                        <IonInput type='email'  className='custom' placeholder='Email'></IonInput>
                    </IonCol>
                    <IonCol size='12'>
                            <IonIcon onClick={togglePasswordVisibility} className='eyeicon' size='defualt' icon={showPassword ? eyeOutline : eyeOffOutline}></IonIcon>
                        <IonInput type={showPassword ? 'password' : 'text'}  className='custom' placeholder='Password'></IonInput>
                    </IonCol>
                    <IonCol size='12'></IonCol>
                    <IonCol size='12'>
                        <IonButton routerLink='/home' expand='full' shape='round' mode='ios' color='primary' >
                            <IonLabel>Sign Up</IonLabel> <IonIcon className='iconForword' icon={arrowForward}></IonIcon>
                        </IonButton>
                    </IonCol>
                    <IonCol size='12'>
                        <p className='center top'>Or Continue With</p>
                        <IonRow>
                            <IonAvatar className='googlelogo'>
                                <img src="src\images\WhatsApp Image 2023-09-14 at 1.11.35 AM.jpeg" alt="" />
                            </IonAvatar>
                        </IonRow>
                        <br />
                        <p className='cen fontsize'>Don't have an Account <span onClick={nevigate} className='textcolor'>Sign Up</span> </p>
                    </IonCol>
                </IonRow>


            </IonContent>
        </IonPage>
    )
}

export default Login