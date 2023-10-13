import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonLabel, IonList, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import './signup.css'
import { arrowForward, cameraOutline, eyeOffOutline, eyeOutline, logoGoogle, mailOutline } from 'ionicons/icons'
import { useHistory } from 'react-router';

function Signup() {

    const [showPassword, setShowPassword] = useState(true);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const history = useHistory();
    const nevigate = () => {
        history.push('/login')
    }
    return (
        <IonPage>
            <IonHeader className='header' mode='md'>
                <IonToolbar className='silver'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="#"></IonBackButton>
                    </IonButtons>
                    <IonTitle><b style={{color:'black'}}>Fill Your Profile</b></IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='silver ion-padding'>
                <IonRow>
                    <IonCol size='12'>
                        <IonList className='div1'>
                            <IonAvatar className='dpAvatar'>
                                <img src="src\images\s.png" alt="" />
                            </IonAvatar>
                            <IonIcon className='cameradp' icon={cameraOutline}></IonIcon>
                        </IonList>
                    </IonCol>
                    <IonCol size='12'>
                        <br />
                        <IonInput type='text'  className='custom' placeholder='Full Name'></IonInput>
                    </IonCol>
                    <IonCol size='12'>
                        <IonInput type='text' className='custom' placeholder='Nick Name'></IonInput>
                    </IonCol>
                    <IonCol size='12'>
                        <IonInput type='email' className='custom' placeholder='Email'></IonInput>
                    </IonCol>
                    <IonCol size='12'>
                            <IonIcon onClick={togglePasswordVisibility} className='eyeicon' size='defualt' icon={showPassword ? eyeOutline : eyeOffOutline}></IonIcon>
                        <IonInput type={showPassword ? 'password' : 'text'} className='custom' placeholder='Password'>

                        </IonInput>
                    </IonCol>
                    <IonCol size='12'>
                        <IonSelect

                            className='slect' mode='md' interface="action-sheet" aria-label='none' placeholder='Gender' >
                            <IonSelectOption>Male</IonSelectOption>
                            <IonSelectOption >Female</IonSelectOption>
                            <IonSelectOption >Others</IonSelectOption>
                        </IonSelect>
                    </IonCol>
                    <IonCol size='12'>
                        <IonButton expand='full' shape='round' mode='ios' color='primary' >
                            <IonLabel>Continue</IonLabel> <IonIcon className='iconForword' icon={arrowForward}></IonIcon>
                        </IonButton>
                    </IonCol>
                    <IonCol size='12'>
                        <p className='cen fontsize'>Already have an Account <span onClick={nevigate} className='textcolor'>Login</span> </p>
                    </IonCol>
                </IonRow>


            </IonContent>
        </IonPage>
    )
}

export default Signup