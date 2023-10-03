import { IonBackButton, IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { arrowRedoOutline, bookmark, bookmarkOutline, chevronForwardOutline, searchOutline, shareOutline, star } from 'ionicons/icons';
import { useState } from 'react';
import Tabs from '../components/tabs';

const Home: React.FC = () => {
  const [bookmarke, setBookmark] = useState(true);
  const [search,setSearch] = useState(false)
  const [segButton, setSegButton] = useState("All")
  const Savedocument = () => {
    setBookmark(!bookmarke);
  };
  return (
    <IonPage>
      <IonHeader className='header' mode='md'>
        <IonToolbar className='silver'>
          <IonButtons slot="start">
            <IonBackButton defaultHref="#"></IonBackButton>
          </IonButtons>
          <IonTitle>All Students Data</IonTitle>
          <IonIcon onClick={()=>{setSearch(!search)}} className='searchIcon1' slot='end'  icon={searchOutline}></IonIcon>
        </IonToolbar>
      </IonHeader>
      <IonContent className='silver ion-padding'>
        <IonRow>
          {
            search&&<>
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
            <IonCard className='mapCard'>
              <IonThumbnail className='IonThumbnail'>
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
              </IonThumbnail>
              <IonList className='listcarddetail'>
                  <IonRow>
                    <IonCol size='10'>
                      <p className='namemap top'>User</p>
                    </IonCol>
                    <IonCol size='2'>
                      <IonRow>
                        <IonIcon className='colorbookmar' onClick={Savedocument} size='small' icon={bookmarke ? bookmarkOutline : bookmark}></IonIcon>
                      </IonRow>
                    </IonCol>
                    <IonCol size='12'>
                      <p className='dumyData'>it is the dumy data it can</p>
                      <p className='dolortext top'><span className='colordolor'>$46</span> $61</p>
                    </IonCol>
                    <IonCol size='10'>
                      <IonRow>
                        <p className='textlike'><IonIcon className='iconcolrstar' icon={star}></IonIcon> <span className='text1'>4.0</span> <span className='bar'>|</span> <span className='stdtext'>12680 Std</span></p>
                      </IonRow>
                    </IonCol>
                    <IonCol size='2'>
                      <IonRow>
                        <p className='textlike'><IonIcon className='iconshare' icon={arrowRedoOutline}></IonIcon></p>
                      </IonRow>
                    </IonCol>


                  </IonRow>
                {/* <IonItem className='topitem' lines='none'>
                  <h5 slot='start' className='namemap'>User</h5>
                  <IonIcon className='colorbookmar' onClick={Savedocument} size='small' slot='end' icon={bookmarke ? bookmarkOutline : bookmark}></IonIcon>
                </IonItem>
                <p className='dumyData'>it is the dumy data it can use</p>
                <IonItem lines='none' className='botomText'>
                  <IonLabel>
                    <IonIcon slot='start' className='iconcolrstar' icon={star}></IonIcon> 0
                  </IonLabel>
                  <IonIcon slot='end' icon={arrowRedoOutline}></IonIcon>
                </IonItem> */}
              </IonList>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonContent>
      <Tabs />

    </IonPage>
  );
};

export default Home;
