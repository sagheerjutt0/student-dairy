import React, { useState } from 'react'
import "./chats.css"
import { IonAvatar, IonBackButton, IonBadge, IonButton, IonButtons, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import Tabs from '../../components/tabs'
import { callOutline, searchOutline } from 'ionicons/icons'

function Chats() {
  const [search, setSearch] = useState(false)
  const [segButton, setSegButton] = useState("Chat")
  return (
    <IonPage>
      <IonHeader className='header' mode='md'>
        <IonToolbar className='silver'>
          <IonButtons slot="start">
            <IonBackButton defaultHref="#"></IonBackButton>
          </IonButtons>
          <IonTitle>Chats</IonTitle>
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
          <IonCol size='6'>
            <IonButton expand='full' size='default' onClick={() => { setSegButton("Chat") }} className={segButton === "Chat" ? 'pdfbtn' : 'scanerbtn'} shape='round' mode='ios'>
              Chat
            </IonButton>
          </IonCol>
          <IonCol size='6'>
            <IonButton expand='full' size='default' onClick={() => { setSegButton("Calls") }} className={segButton === "Calls" ? 'pdfbtn' : 'scanerbtn'} shape='round' mode='ios'>
              Calls
            </IonButton>
          </IonCol>
          <IonCol size='12'>
            <IonCard className='mainc'>
              <IonRow>
                {
                  segButton === "Chat" ? <>
                    <IonCol size='12' sizeSm='6' sizeMd='6'>
                      <IonItem mode='md' lines='full' button routerLink='/inbox'>
                        <IonAvatar slot='start'>
                          <img src="" alt="" />
                        </IonAvatar>
                        <div slot='start'>
                          <p className='userName'>Sagheer</p>
                          <p className='messageuser'>message from user</p>
                        </div>
                        <div slot='end'>
                          <IonBadge className='badge' slot="start">
                            <p className='bagetext'>11</p>
                          </IonBadge>
                          <p className='timeText'>8:00</p>
                        </div>
                      </IonItem>
                    </IonCol>
                  </> : <>
                    <IonCol size='12' sizeSm='6' sizeMd='6'>
                      <IonItem lines='full' mode='ios' button routerLink='/call'>
                        <IonAvatar slot='start'>
                          <img src="" alt="" />
                        </IonAvatar>
                        <div slot='start'>
                          <p className='userName'>Sagheer</p>
                          <IonRow>
                            <IonCol size='2'>
                              <IonImg className='logoForCalls' src='src\images\missedcall.webp'></IonImg>
                            </IonCol>
                            <IonCol>
                            <p className='messageuser'>Missed call</p>
                            </IonCol>
                          </IonRow>
                        </div>
                        <div slot='end'>

                          <IonIcon className='phoneIcon' icon={callOutline}></IonIcon>
                        </div>
                      </IonItem>
                    </IonCol>
                  </>
                }
              </IonRow>
            </IonCard>
          </IonCol>
        </IonRow>


      </IonContent>
      <Tabs />
    </IonPage>
  )
}

export default Chats