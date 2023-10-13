import { IonCard, IonCol, IonIcon, IonLabel, IonRow } from '@ionic/react'
import React from 'react'
import './tabs.css'
import { chatbubbleEllipses, chatbubbleEllipsesOutline, hammer, hammerOutline, home, homeOutline, person, personOutline, wallet, walletOutline } from 'ionicons/icons'
import { useHistory, useLocation } from 'react-router';
function Tabs() {
  const location = useLocation();

  return (
    <>
      <IonCard className='Tabscard'>
        <IonRow>
          <IonCol>
            <IonCard className='tabcard' button routerLink='/home'>
              <IonRow>
                <IonIcon className='tabsIcon' color={location.pathname === "/home" ? 'primary' : "dark"} icon={location.pathname === "/home" ? home : homeOutline}></IonIcon>
              </IonRow>
              <IonRow>
                <IonLabel color={location.pathname === "/home" ? 'primary' : "dark"} style={{ marginTop: "5px", fontSize: "12px", marginLeft: "auto", marginRight: "auto" }}>Home</IonLabel>
              </IonRow>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className='tabcard' button routerLink='/tools'>
              <IonRow>
                <IonIcon color={location.pathname === "/tools" ? 'primary' : "dark"} className='tabsIcon' icon={location.pathname === "/tools" ? hammer : hammerOutline}></IonIcon>
              </IonRow>
              <IonRow>
                <IonLabel color={location.pathname === "/tools" ? 'primary' : "dark"} style={{ marginTop: "5px", fontSize: "12px", marginLeft: "auto", marginRight: "auto" }}>Tools</IonLabel>
              </IonRow>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className='tabcard' button routerLink='/chats'>
              <IonRow>
                <IonIcon color={location.pathname === "/chats" ? 'primary' : "dark"} className='tabsIcon' icon={location.pathname === "/chats" ? chatbubbleEllipses : chatbubbleEllipsesOutline}></IonIcon>
              </IonRow>
              <IonRow>
                <IonLabel color={location.pathname === "/chats" ? 'primary' : "dark"} style={{ marginTop: "5px", fontSize: "12px", marginLeft: "auto", marginRight: "auto" }}>Chats</IonLabel>
              </IonRow>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className='tabcard' button routerLink='/transaction'>
              <IonRow>
                <IonIcon color={location.pathname === "/transaction" ? 'primary' : "dark"} className='tabsIcon' icon={location.pathname === "/transaction" ? wallet : walletOutline}></IonIcon>
              </IonRow>
              <IonRow>
                <IonLabel color={location.pathname === "/transaction" ? 'primary' : "dark"} style={{ marginTop: "5px", fontSize: "12px", marginLeft: "auto", marginRight: "auto" }}>Transaction</IonLabel>
              </IonRow>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className='tabcard' button routerLink='/profile'>
              <IonRow>
                <IonIcon color={location.pathname === "/profile" ? 'primary' : "dark"} className='tabsIcon' icon={location.pathname === "/profile" ? person : personOutline}></IonIcon>
              </IonRow>
              <IonRow>
                <IonLabel color={location.pathname === "/profile" ? 'primary' : "dark"} style={{ marginTop: "5px", fontSize: "12px", marginLeft: "auto", marginRight: "auto" }}>Profile</IonLabel>
              </IonRow>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonCard >
    </>
  )
}

export default Tabs