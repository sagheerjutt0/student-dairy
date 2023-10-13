import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react'
import { arrowForward, call, cameraOutline, eyeOffOutline, eyeOutline, imageOutline } from 'ionicons/icons'
import React, { useState } from 'react'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
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
                    <IonTitle> <b style={{color:'black'}}>Edit Profile</b> </IonTitle>
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
                        <IonItem style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px", borderRadius: "10px", marginTop: "10px",height:'45px' }} lines='none'>
                            <IonInput style={{marginTop:'-2px'}} type='text' className='custom boxshadow' placeholder='Full Name'></IonInput>
                        </IonItem>
                    </IonCol>
                    <IonCol size='12'>
                        <IonItem style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px", borderRadius: "10px", marginTop: "10px",height:'45px' }} lines='none'>
                            <IonInput style={{marginTop:'-2px'}} type='text' className='custom boxshadow' placeholder='Nick Name'></IonInput>
                        </IonItem>
                    </IonCol>
                    <IonCol size='12'>
                        <IonItem style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px", borderRadius: "10px", marginTop: "10px",height:'45px' }} lines='none'>
                            <IonInput style={{marginTop:'-2px'}} type='date' className='custom ' placeholder='date of birth'></IonInput>
                        </IonItem>
                    </IonCol>
                    <IonCol size='12'>
                        <IonItem style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px", borderRadius: "10px", marginTop: "10px",height:'45px' }} lines='none'>
                            <IonInput style={{marginTop:'-2px'}} type='email' className='custom boxshadow' placeholder='Email'></IonInput>
                        </IonItem>
                    </IonCol>

                    <IonCol size='12'>
                        <IonItem lines='none' style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px", borderRadius: "10px", marginTop: "10px", height: "45px" }}>
                            <IonSelect
                                style={{marginTop:'-5px'}}
                                mode='md' interface="action-sheet" aria-label='none' placeholder='Gender' >
                                <IonSelectOption>Male</IonSelectOption>
                                <IonSelectOption >Female</IonSelectOption>
                                <IonSelectOption >Others</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </IonCol>
                    <IonCol size='12'>
                        <IonItem style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px", borderRadius: "10px", marginTop: "10px", height: "45px" }} lines='none'>
                            <PhoneInput inputStyle={{  border: "none",  }} country={"pk"} />
                        </IonItem>
                    </IonCol>
                    <IonCol size='12'>
                        <IonButton expand='full' shape='round' mode='ios' color='primary' >
                            <IonLabel>Update</IonLabel> <IonIcon className='iconForword' icon={arrowForward}></IonIcon>
                        </IonButton>
                    </IonCol>

                </IonRow>


            </IonContent>
        </IonPage>
    )
}

export default Editprofile