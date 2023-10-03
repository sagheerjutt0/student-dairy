import { IonAvatar, IonBackButton, IonBadge, IonButton, IonButtons, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import { searchOutline } from 'ionicons/icons'
import React, { useState } from 'react'
import Tabs from '../../components/tabs'
import './transaction.css'

function Transaction() {
    const [search, setSearch] = useState(false)
    return (
        <IonPage>
            <IonHeader className='header' mode='md'>
                <IonToolbar className='silver'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="#"></IonBackButton>
                    </IonButtons>
                    <IonTitle>Transaction</IonTitle>
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
                    <IonCol size='12' sizeSm='6' sizeMd='6'>
                        <IonItem className='itemtran' lines='full'>
                            <IonAvatar className='transactionAvatar' slot='start'>
                                <img src="" alt="" />
                            </IonAvatar>
                            <div slot='start'>
                                <p className='companyName'>Sagheer</p>
                                <p className='messageuser'>message from user</p>
                                <IonButton mode='ios' expand='full' className='paidbtn' size='small'>Paid</IonButton>
                            </div>

                        </IonItem>
                    </IonCol>
                </IonRow>
            </IonContent>
            <Tabs />
        </IonPage>
    )
}

export default Transaction