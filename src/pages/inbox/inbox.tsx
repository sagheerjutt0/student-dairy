import { IonBackButton, IonButtons, IonCard, IonChip, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonList, IonPage, IonRow, IonTextarea, IonTitle, IonToolbar } from '@ionic/react'
import { attachOutline, callOutline, micOutline, paperPlane, paperPlaneOutline, search, searchOutline } from 'ionicons/icons'
import React, { useEffect, useState } from 'react'
import './inbox.css'

function Inbox() {
    const [search, setSearch] = useState(false)
    const [message, setMessage] = useState("")
    const [option, setOption] = useState(Boolean)


    useEffect(() => {
        if (message === "") {
            setOption(true)
        }
        else {
            setOption(false)
        }
    }, [message])

    return (
        <IonPage>
            <IonHeader className='header' mode='md'>
                <IonToolbar color='light'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="#"></IonBackButton>
                    </IonButtons>
                    <IonTitle><b style={{color:'black'}}>Inbox</b></IonTitle>
                    <div  className='searchIcon1' slot='end'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0173 16.6612L17.5035 17.1782C15.3921 19.2863 10.7335 18.9032 5.91342 14.0798C1.09412 9.26054 0.706923 4.59952 2.81907 2.48738L3.33047 1.97354C3.80939 1.49868 4.58298 1.49868 5.06191 1.97354L6.84611 3.76262C7.3153 4.2318 7.32261 4.99241 6.86154 5.47458C5.73403 6.61264 5.55301 8.38548 6.43132 9.72647C7.44274 11.2387 8.74315 12.5392 10.2579 13.5473C11.5964 14.4256 13.366 14.2511 14.5041 13.126C14.9862 12.6625 15.7501 12.6658 16.2225 13.1382L18.0108 14.9232C18.2421 15.1521 18.372 15.4655 18.3753 15.7926C18.3753 16.1157 18.2486 16.4298 18.0173 16.6612ZM19.1651 13.7787L17.3801 11.9937C16.2704 10.8938 14.4878 10.8873 13.3717 11.9774C12.7791 12.5708 11.8497 12.6625 11.1556 12.1934C9.82764 11.3053 8.68227 10.1672 7.79504 8.83843C7.33397 8.13465 7.43057 7.20927 8.02557 6.61589C9.10438 5.4965 9.09058 3.72447 8.00122 2.61725L6.21296 0.832237C5.09844 -0.277412 3.29881 -0.277412 2.18591 0.832237L1.67127 1.34932C-1.00504 4.02562 -0.804538 9.65666 4.76562 15.2276C8.12704 18.5891 11.5104 19.9966 14.2532 19.9966C15.8832 20.051 17.4685 19.4487 18.6513 18.3228L19.1651 17.809C20.278 16.6961 20.278 14.8916 19.1651 13.7787Z" fill="#1D1D1B" />
                        </svg>
                    </div>
                    <div  className='searchIcon1' slot='end' onClick={() => { setSearch(!search) }}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7549 18.6058L16.3169 15.2468L16.239 15.1258C16.087 14.9728 15.884 14.8908 15.669 14.8908C15.4579 14.8908 15.2509 14.9728 15.103 15.1258C12.181 17.8048 7.68095 17.9498 4.58295 15.4648C1.48495 12.9768 0.75495 8.63277 2.87595 5.30977C4.99695 1.98777 9.30995 0.71977 12.9539 2.34477C16.5989 3.96977 18.446 7.98377 17.267 11.7268C17.1849 12.0008 17.2509 12.2938 17.4499 12.5008C17.6459 12.7078 17.9429 12.7938 18.2239 12.7308C18.5049 12.6688 18.7319 12.4608 18.8179 12.1918C20.2239 7.75077 18.0989 2.96977 13.818 0.940771C9.53595 -1.08523 4.37995 0.250771 1.68895 4.08577C-1.00305 7.92177 -0.42505 13.1018 3.05195 16.2818C6.52395 19.4578 11.853 19.6758 15.587 16.7938L18.6299 19.7698C18.9429 20.0788 19.45 20.0788 19.767 19.7698C20.079 19.4608 20.079 18.9608 19.767 18.6488L19.7549 18.6058Z" fill="#202244" />
                        </svg>

                    </div>

                </IonToolbar>
            </IonHeader>
            <IonContent color='light' className=' ion-padding'>
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
                            <p>Hello</p>
                            <p className='timetextincoming'>2:30pm</p>
                        </IonCard>
                    </IonCol>
                    <IonCol size='12'>
                        <IonCard className='incomingmessagecard'>
                            <p>What are doing right noew i want to ask you somthing if you are free please text me</p>
                            <p className='timetextincoming'> 2:30pm</p>
                        </IonCard>
                    </IonCol>
                    {/* sending message */}
                    <IonCol size='12'>
                        <IonCard className='sendmessagecard'>
                            <p>Hello! good morning </p>
                            <span className='timetextincoming'>2:30pm</span>
                        </IonCard>
                    </IonCol>
                    <IonCol size='12'>
                        <IonCard className='sendmessagecard'>
                            <p>Yes Bro i am free you can ask what you have problem i shall help you as possible</p>
                            <span className='timetextincoming'>2:30pm</span>
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