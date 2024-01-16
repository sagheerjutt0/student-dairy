import { IonBackButton, IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { arrowRedoOutline, bookmark, bookmarkOutline, chevronForwardOutline, searchOutline, shareOutline, star } from 'ionicons/icons';
import { useState } from 'react';
import Tabs from '../components/tabs';

const Home: React.FC = () => {
  const [bookmarke, setBookmark] = useState(true);
  const [search, setSearch] = useState(false)
  const [segButton, setSegButton] = useState("All")
  const Savedocument = () => {
    setBookmark(!bookmarke);
  };
  return (
    <IonPage>
      <IonHeader className='header' mode='md'>
        <IonToolbar color="light">
          <IonButtons slot="start">
            <IonBackButton defaultHref="#"></IonBackButton>
          </IonButtons>
          <IonTitle><b style={{ color: 'black' }}>All Students Data</b></IonTitle>
          <div className='searchIcon1' slot='end' onClick={() => { setSearch(!search) }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7549 18.6058L16.3169 15.2468L16.239 15.1258C16.087 14.9728 15.884 14.8908 15.669 14.8908C15.4579 14.8908 15.2509 14.9728 15.103 15.1258C12.181 17.8048 7.68095 17.9498 4.58295 15.4648C1.48495 12.9768 0.75495 8.63277 2.87595 5.30977C4.99695 1.98777 9.30995 0.71977 12.9539 2.34477C16.5989 3.96977 18.446 7.98377 17.267 11.7268C17.1849 12.0008 17.2509 12.2938 17.4499 12.5008C17.6459 12.7078 17.9429 12.7938 18.2239 12.7308C18.5049 12.6688 18.7319 12.4608 18.8179 12.1918C20.2239 7.75077 18.0989 2.96977 13.818 0.940771C9.53595 -1.08523 4.37995 0.250771 1.68895 4.08577C-1.00305 7.92177 -0.42505 13.1018 3.05195 16.2818C6.52395 19.4578 11.853 19.6758 15.587 16.7938L18.6299 19.7698C18.9429 20.0788 19.45 20.0788 19.767 19.7698C20.079 19.4608 20.079 18.9608 19.767 18.6488L19.7549 18.6058Z" fill="#202244" />
            </svg>

          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent color='light' className='ion-padding'>
        <IonRow>
          {
            search && <>
              <IonCol size='12'>
                <IonInput mode='ios' clearInput={true} placeholder='Search Document' className='searchBar'>
                  <IonIcon className='searchIcon' icon={searchOutline}></IonIcon>
                </IonInput>
              </IonCol>
              <IonCol size='12'>
                <div className='overFlow'>

                  <IonList className='segmentList'>
                    <IonRow>
                      <IonCol>
                        <IonButton onClick={() => { setSegButton("All") }} className={segButton === "All" ? 'pdfbtn' : 'scanerbtn'} shape='round' size='small'>
                          All
                        </IonButton>
                      </IonCol>
                      <IonCol>
                        <IonButton onClick={() => { setSegButton("Scanner") }} className={segButton === "Scanner" ? 'pdfbtn' : 'scanerbtn'} shape='round' size='small'>
                          Scanner
                        </IonButton>
                      </IonCol>
                      <IonCol>
                        <IonButton onClick={() => { setSegButton("Camera") }} className={segButton === "Camera" ? 'pdfbtn' : 'scanerbtn'} shape='round' size='small'>
                          Camera
                        </IonButton>
                      </IonCol>
                      <IonCol>
                        <IonButton onClick={() => { setSegButton("Pdf") }} className={segButton === "Pdf" ? 'pdfbtn' : 'scanerbtn'} shape='round' size='small'>
                          Pdf
                        </IonButton>
                      </IonCol>
                      <IonCol>
                        <IonButton onClick={() => { setSegButton("Text") }} className={segButton === "Text" ? 'pdfbtn' : 'scanerbtn'} shape='round' size='small'>
                          Text
                        </IonButton>
                      </IonCol>
                    </IonRow>
                  </IonList>
                </div>
              </IonCol>
              <IonCol size='6'>
                <p className='top font23'>Result For " <span className='Primary'>data</span> "</p>
              </IonCol>
              <IonCol size='6'>
                <p className='top textalignright'>0 Founds <IonIcon className='chevornicon' icon={chevronForwardOutline}></IonIcon> </p>
              </IonCol>
            </>
          }
          <IonCol size='12' sizeSm='6' sizeMd='6'>
            <IonCard className='mapCard' mode='ios'>
              <IonThumbnail className='IonThumbnail'>
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
              </IonThumbnail>
              <IonItem className='listcarddetail' lines='none' mode='ios'>
                <p slot='start' className='namemap top'>User</p>
                <IonIcon slot='end' className='colorbookmar' onClick={Savedocument} size='small' icon={bookmarke ? bookmarkOutline : bookmark}></IonIcon>

              </IonItem>
              <IonItem className='listcarddetail topminus' lines='none' mode='ios'>
                <IonLabel>
                  <h3><b>it is the dumy data it can</b></h3>
                  <p className='dolortext top'><span className='colordolor'>$46</span> $61</p>
                </IonLabel>
              </IonItem>
              <IonItem className='listcarddetail' lines='none' mode='ios'>
                <p slot='start' className='textlike'><IonIcon className='iconcolrstar' icon={star}></IonIcon> <span className='text1'>4.0</span> <span className='bar'>|</span> <span className='stdtext'>12680 Std</span></p>
                <IonIcon slot='end' className='iconshare' icon={arrowRedoOutline}></IonIcon>
              </IonItem>

            </IonCard>
          </IonCol>
        </IonRow>
      </IonContent>
      <Tabs />

    </IonPage>
  );
};

export default Home;
