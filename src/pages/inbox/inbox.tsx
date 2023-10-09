import { IonBackButton, IonButtons, IonCard, IonChip, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonList, IonPage, IonRow, IonTextarea, IonTitle, IonToolbar } from '@ionic/react'
import { attachOutline, callOutline, micOutline, paperPlane, paperPlaneOutline, search, searchOutline } from 'ionicons/icons'
import React, { useEffect, useState } from 'react'
import './inbox.css'

function Inbox() {
    const [search, setSearch] = useState(false)
    const [message, setMessage] = useState("")
    const [option,setOption] = useState(Boolean)


    useEffect(()=>{
        if(message ===""){
            setOption(true)
        }
        else{
            setOption(false)
        }
    },[message])

    return (
        <IonPage>
            <IonHeader className='header' mode='md'>
                <IonToolbar className='silver'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="#"></IonBackButton>
                    </IonButtons>
                    <IonTitle>Inbox</IonTitle>
                    <IonIcon slot='end' className='searchIcon1' icon={callOutline}></IonIcon>
                    <IonIcon onClick={() => { setSearch(!search) }} className='searchIcon1' slot='end' icon={searchOutline}></IonIcon>
                </IonToolbar>
            </IonHeader>
            <IonContent className='silver ion-padding'>
                <IonRow>
                    {
                        search && <>

                            <IonCol size='12'>
                                <IonInput mode='ios' clearInput={true} placeholder='Search' className='searchBar bottompading'>
                                    <IonIcon className='searchIcon' icon={searchOutline}></IonIcon>
                                </IonInput>
                            </IonCol>
                        </>
                    }
                    <IonCol size='12'>
                        <IonRow>
                            <IonChip class='chip'>
                                Today
                            </IonChip>
                        </IonRow>
                    </IonCol>
                    <IonCol size='12'>
                        <IonCard className='incomingmessagecard'>
                            <p>Hello Good Morning</p>
                            <p className='timetextincoming'>2:30pm</p>
                        </IonCard>
                    </IonCol>
                    <IonCol size='12'>
                        <IonCard className='incomingmessagecard'>
                            <p>What are doing right noew i want to ask you somthing if you are free please text me</p>
                            <p className='timetextincoming'>2:30pm</p>
                        </IonCard>
                    </IonCol>
                    {/* sending message */}
                    <IonCol size='12'>
                        <IonCard className='sendmessagecard'>
                            <p>Hello! good morning</p>
                            <p className='timetextincoming'>2:30pm</p>
                        </IonCard>
                    </IonCol>
                    <IonCol size='12'>
                        <IonCard className='sendmessagecard'>
                            <p>Yes Bro i am free you can ask what you have problem i shall help you as possible</p>
                            <p className='timetextincoming'>2:30pm</p>
                        </IonCard>
                    </IonCol>

                </IonRow>
            </IonContent>
            <IonCard className='SearchBar'>
                <div className='textareaformessage'>
                    <IonTextarea mode='ios'
                        placeholder="Write Message    "
                        onIonInput={(e: any) => setMessage(e.target.value)}
                        className='texterea1'
                        rows={1}
                    ></IonTextarea>
                    <div className='listmicorsendbutton'>
                        {
                            option ? <>
                                <IonIcon className='attachicon' icon={attachOutline}></IonIcon>
                                <IonIcon className='micicon' size='large' icon={micOutline}></IonIcon>
                            </> : <>
                                <IonIcon className='micicon' size='large' icon={paperPlaneOutline}></IonIcon>
                            </>
                        }
                    </div>
                </div>
            </IonCard>
        </IonPage>
    )
}

export default Inbox