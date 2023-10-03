import { IonCard, IonCol, IonIcon, IonRow } from '@ionic/react'
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
                <IonIcon className='tabsIcon' style={{ color: location.pathname === "/home" ? '#167F71' : "black" }} icon={location.pathname === "/home" ? home : homeOutline}></IonIcon>
              </IonRow>
              <p style={{ color: location.pathname === "/home" ? '#167F71' : "black", marginTop: "5px",fontSize:"12px" }} className='cen top'>Home</p>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className='tabcard' button routerLink='/tools'>
              <IonRow>
                <IonIcon style={{ color: location.pathname === "/tools" ? '#167F71' : "black" }} className='tabsIcon' icon={location.pathname === "/tools" ? hammer : hammerOutline}></IonIcon>
              </IonRow>
              <p style={{ color: location.pathname === "/tools" ? '#167F71' : "black", marginTop: "5px",fontSize:"12px" }} className='cen top'>Tools</p>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className='tabcard' button routerLink='/chats'>
              <IonRow>
                <IonIcon style={{ color: location.pathname === "/chats" ? '#167F71' : "black" }} className='tabsIcon' icon={location.pathname === "/chats" ? chatbubbleEllipses : chatbubbleEllipsesOutline}></IonIcon>
              </IonRow>
              <p style={{ color: location.pathname === "/chats" ? '#167F71' : "black", marginTop: "5px",fontSize:"12px" }} className='cen top'>Chats</p>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className='tabcard' button routerLink='/transaction'>
              <IonRow>
                <IonIcon style={{ color: location.pathname === "/transaction" ? '#167F71' : "black" }} className='tabsIcon' icon={location.pathname === "/transaction" ? wallet : walletOutline}></IonIcon>
              </IonRow>
              <p style={{ color: location.pathname === "/transaction" ? '#167F71' : "black", marginTop: "5px",fontSize:"12px" }} className='cen top'>Transaction</p>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className='tabcard' button routerLink='/profile'>
              <IonRow>
                <IonIcon style={{ color: location.pathname === "/profile" ? '#167F71' : "black" }} className='tabsIcon' icon={location.pathname === "/profile" ? person : personOutline}></IonIcon>
              </IonRow>
              <p style={{ color: location.pathname === "/profile" ? '#167F71' : "black", marginTop: "5px",fontSize:"12px" }} className='cen top'>Profile</p>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonCard>
    </>
  )
}

export default Tabs