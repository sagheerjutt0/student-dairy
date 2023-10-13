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
          <IonTitle><b style={{color:'black'}}>Chats</b></IonTitle>
          <div className='searchIcon1' slot='end' onClick={() => { setSearch(!search) }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7549 18.6058L16.3169 15.2468L16.239 15.1258C16.087 14.9728 15.884 14.8908 15.669 14.8908C15.4579 14.8908 15.2509 14.9728 15.103 15.1258C12.181 17.8048 7.68095 17.9498 4.58295 15.4648C1.48495 12.9768 0.75495 8.63277 2.87595 5.30977C4.99695 1.98777 9.30995 0.71977 12.9539 2.34477C16.5989 3.96977 18.446 7.98377 17.267 11.7268C17.1849 12.0008 17.2509 12.2938 17.4499 12.5008C17.6459 12.7078 17.9429 12.7938 18.2239 12.7308C18.5049 12.6688 18.7319 12.4608 18.8179 12.1918C20.2239 7.75077 18.0989 2.96977 13.818 0.940771C9.53595 -1.08523 4.37995 0.250771 1.68895 4.08577C-1.00305 7.92177 -0.42505 13.1018 3.05195 16.2818C6.52395 19.4578 11.853 19.6758 15.587 16.7938L18.6299 19.7698C18.9429 20.0788 19.45 20.0788 19.767 19.7698C20.079 19.4608 20.079 18.9608 19.767 18.6488L19.7549 18.6058Z" fill="#202244" />
            </svg>

          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent className='silver ion-padding'>
        {
          search && <>

            <IonCol size='12'>
              <IonInput mode='ios' clearInput={true} placeholder='Search' className='searchBar bottompading'>
                <IonIcon className='searchIcon' icon={searchOutline}></IonIcon>
              </IonInput>
            </IonCol>
          </>
        }
        <IonRow>
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
        </IonRow>
        <IonCard className='mainc'>
          {
            segButton === "Chat" ? <>
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
            </> : <>
              <IonItem lines='full' mode='ios' button routerLink='/call'>
                <IonAvatar slot='start'>
                  <img src="" alt="" />
                </IonAvatar>
                <div slot='start'>
                  <p className='userName'>Sagheer</p>
                  <IonRow>
                    <IonCol size='2'>
                      <div className='logoForCalls'>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.54545 6.36364H7.63636V4.45455C7.63636 4.1028 7.35175 3.81818 7 3.81818C6.64825 3.81818 6.36364 4.1028 6.36364 4.45455V6.36364H4.45455C4.1028 6.36364 3.81818 6.64825 3.81818 7C3.81818 7.35175 4.1028 7.63636 4.45455 7.63636H6.36364V9.54545C6.36364 9.8972 6.64825 10.1818 7 10.1818C7.35175 10.1818 7.63636 9.8972 7.63636 9.54545V7.63636H9.54545C9.8972 7.63636 10.1818 7.35175 10.1818 7C10.1818 6.64825 9.8972 6.36364 9.54545 6.36364ZM12.7273 12.0909C12.7273 12.4427 12.4427 12.7273 12.0909 12.7273H1.90909C1.55734 12.7273 1.27273 12.4427 1.27273 12.0909V1.90909C1.27273 1.55734 1.55734 1.27273 1.90909 1.27273H12.0909C12.4427 1.27273 12.7273 1.55734 12.7273 1.90909V12.0909ZM12.0909 0H1.90909C0.854477 0 0 0.854477 0 1.90909V12.0909C0 13.1455 0.854477 14 1.90909 14H12.0909C13.1455 14 14 13.1455 14 12.0909V1.90909C14 0.854477 13.1455 0 12.0909 0Z" fill="#332DA1" />
                        </svg>

                        {/* missed
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.25034 4.74966C9.00184 4.5018 8.59839 4.5018 8.34989 4.74966L7 6.10018L5.65043 4.7503C5.3997 4.51166 5.00516 4.51675 4.76111 4.76095C4.51691 5.00516 4.51166 5.3997 4.7503 5.65027L6.10034 7L4.7503 8.34973C4.51166 8.6003 4.51691 8.99484 4.76111 9.23905C5.00516 9.48325 5.3997 9.48834 5.65043 9.2497L7 7.89982L8.34989 9.2497C8.6003 9.48834 8.995 9.48325 9.2392 9.23905C9.48341 8.99484 9.48834 8.6003 9.2497 8.34973L7.89998 7L9.2497 5.65027C9.49836 5.40161 9.49836 4.99895 9.25034 4.74966ZM12.7273 12.0909C12.7273 12.4427 12.4427 12.7273 12.0909 12.7273H1.90909C1.5575 12.7273 1.27273 12.4427 1.27273 12.0909V1.90909C1.27273 1.55734 1.5575 1.27273 1.90909 1.27273H12.0909C12.4427 1.27273 12.7273 1.55734 12.7273 1.90909V12.0909ZM12.0909 0H1.90909C0.854636 0 0 0.854477 0 1.90909V12.0909C0 13.1455 0.854636 14 1.90909 14H12.0909C13.1455 14 14 13.1455 14 12.0909V1.90909C14 0.854477 13.1455 0 12.0909 0Z" fill="#FF001E" />
                        </svg> */}



                        {/* outgoing
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.54545 6.36364H4.45455C4.1028 6.36364 3.81818 6.64825 3.81818 7C3.81818 7.35175 4.1028 7.63636 4.45455 7.63636H9.54545C9.8972 7.63636 10.1818 7.35175 10.1818 7C10.1818 6.64825 9.8972 6.36364 9.54545 6.36364ZM12.7273 12.0909C12.7273 12.4427 12.4427 12.7273 12.0909 12.7273H1.90909C1.55734 12.7273 1.27273 12.4427 1.27273 12.0909V1.90909C1.27273 1.55734 1.55734 1.27273 1.90909 1.27273H12.0909C12.4427 1.27273 12.7273 1.55734 12.7273 1.90909V12.0909ZM12.0909 0H1.90909C0.854477 0 0 0.854477 0 1.90909V12.0909C0 13.1455 0.854477 14 1.90909 14H12.0909C13.1455 14 14 13.1455 14 12.0909V1.90909C14 0.854477 13.1455 0 12.0909 0Z" fill="#167F71" />
                        </svg> */}


                      </div>

                    </IonCol>
                    <IonCol>
                      <p className='messageuser'>Icoming Call</p>
                    </IonCol>
                  </IonRow>
                </div>
                <div slot='end'>

                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2504 12.4984C21.2504 5.77821 15.782 0.309814 9.06057 0.309814V1.54925C15.0982 1.54925 20.011 6.46114 20.011 12.4984H21.2504ZM1.53688 7.41241L3.33438 5.61491C3.3477 5.60159 3.37187 5.59446 3.40317 5.59446C3.4735 5.59446 3.58009 5.62948 3.67429 5.72398L6.3239 8.37328C6.46055 8.51024 6.47263 8.67353 6.43297 8.7135L5.60719 9.53897C4.5797 10.5668 5.76336 12.8241 7.46294 14.5234C8.30886 15.3696 9.23843 16.0448 10.0822 16.4262C11.4707 17.0531 12.1592 16.6645 12.4461 16.3779L13.2728 15.5521C13.3115 15.5124 13.4748 15.5245 13.6118 15.6612L16.2611 18.312C16.398 18.4487 16.4101 18.611 16.3714 18.6507L14.5727 20.4482C14.0741 20.9483 12.865 20.8488 11.3387 20.182C9.57122 19.4111 7.60919 17.9984 5.81542 16.2059C4.13536 14.5258 2.68801 12.4876 1.84179 10.6151C1.15793 9.10207 1.04421 7.90508 1.53688 7.41241ZM0.712658 11.1245C1.61683 13.129 3.15745 15.3005 4.93914 17.0822C6.8395 18.9825 8.93725 20.4869 10.8435 21.3186C11.8809 21.7713 12.8105 21.9975 13.591 21.9975C14.3694 21.9975 15.0012 21.7738 15.4489 21.3245L17.2477 19.5273C17.7936 18.9801 17.745 18.0421 17.1377 17.4357L14.4881 14.7849C13.8804 14.1785 12.9425 14.1302 12.3965 14.6758L11.5711 15.5013C11.3421 15.672 9.92849 15.2364 8.33922 13.6471C6.74748 12.0566 6.31181 10.6418 6.48379 10.4153L7.31049 9.58979C7.85615 9.04288 7.80657 8.10339 7.20018 7.497L4.54933 4.8477C3.94294 4.24131 3.00376 4.19142 2.45779 4.73863L0.660602 6.53612C-0.23768 7.43286 -0.219398 9.06334 0.712658 11.1245Z" fill="#0961F5" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29004 3.69556V4.93499C13.5884 4.93499 17.0852 8.43175 17.0852 12.7286H18.3246C18.3246 7.74789 14.2723 3.69556 9.29004 3.69556Z" fill="#0961F5" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9296 12.7283H15.169C15.169 9.48811 12.5315 6.85059 9.29004 6.85059V8.09002C11.8489 8.09002 13.9296 10.1707 13.9296 12.7283Z" fill="#0961F5" />
                  </svg>

                </div>
              </IonItem>
            </>
          }
        </IonCard>




      </IonContent>
      <Tabs />
    </IonPage>
  )
}

export default Chats