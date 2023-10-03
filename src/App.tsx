import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Welcom from './pages/welcom/welcom';
import Login from './pages/Login/Login';
import Signup from './pages/signup/signup';
import Profile from './pages/profile/Profile';
import Chats from './pages/chats/chats';
import Tools from './pages/tools/Tools';
import Transaction from './pages/transaction/transaction';
import Inbox from './pages/inbox/inbox';
import Call from './pages/call/call';
import Editprofile from './pages/editprofile/editprofile';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/welcome">
          <Welcom />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/chats">
          <Chats />
        </Route>
        <Route exact path="/tools">
          <Tools />
        </Route>
        <Route exact path="/transaction">
          <Transaction />
        </Route>
        <Route exact path="/inbox">
          <Inbox />
        </Route>
        <Route exact path="/call">
          <Call />
        </Route>
        <Route exact path="/editprofile">
          <Editprofile />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
