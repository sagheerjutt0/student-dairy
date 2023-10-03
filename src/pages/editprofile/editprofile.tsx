import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react'
import { arrowForward, call, cameraOutline, eyeOffOutline, eyeOutline, imageOutline } from 'ionicons/icons'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import './editprofile.css'

function Editprofile() {
    const [showPassword, setShowPassword] = useState(true);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <IonPage>
            <IonHeader className='header' mode='md'>
                <IonToolbar className='silver'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="#"></IonBackButton>
                    </IonButtons>
                    <IonTitle>Edit Profile</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='silver ion-padding'>
                
                    <IonRow>
                        <IonCol size='12'>
                                <IonAvatar className='profiepic'>
                                    <img src="" alt="" />
                                </IonAvatar>
                                <IonIcon className='imageiconp' icon={imageOutline}></IonIcon>
                           
                        </IonCol>
                        <IonCol size='12'>
                            <IonInput  type='text' className='custom boxshadow' placeholder='Full Name'></IonInput>
                        </IonCol>
                        <IonCol size='12'>
                            <IonInput type='text' className='custom boxshadow' placeholder='Nick Name'></IonInput>
                        </IonCol>
                        <IonCol size='12'>
                            <IonInput type='email' className='custom boxshadow' placeholder='Email'></IonInput>
                        </IonCol>
                        <IonCol size='12'>
                            <IonIcon onClick={togglePasswordVisibility} className='eyeicon' size='defualt' icon={showPassword ? eyeOutline : eyeOffOutline}></IonIcon>
                            <IonInput type={showPassword ? 'password' : 'text'} className='custom boxshadow' placeholder='Password'>

                            </IonInput>
                        </IonCol>
                        <IonCol size='12'>
                            
                        </IonCol>
                        <IonCol size='12'>
                            <IonSelect

                                className='slect boxshadow' mode='md' interface="action-sheet" aria-label='none' placeholder='Gender' >
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

                    </IonRow>


            </IonContent>
        </IonPage>
    )
}

export default Editprofile