import '../styles/globals.css'
import {useEffect,useState} from 'react'
import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router'
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import { Provider } from 'react-redux';
import rootReducer from '../reducers';


import {firebaseApp} from '../firebase'
import { getAuth } from "firebase/auth";


const store = createStore(rootReducer,composeWithDevTools())

function MyApp({ Component, pageProps }) {

  const auth = getAuth(firebaseApp)
  const [user,setUser] = useState(null);

  useEffect(()=>{
    const removeOnStateChangeListener = auth.onAuthStateChanged(()=>{
      const currUser = auth.currentUser;
      
      setUser(currUser?{name:currUser?.displayName,email:currUser?.email}:null);
    })

    return ()=>{
      removeOnStateChangeListener();
    }

  },[]); 


  return( <Provider store={store}>
            <Component {...pageProps} user={user} />
          </Provider>)
}
  

const progress = new ProgressBar({
  size:2,
  color:'blue',
  className:'z-50',
  delay:100
})

Router.events.on('routeChangeStart',progress.start);
Router.events.on('routeChangeComplete',progress.finish);
Router.events.on('routeChangeError',progress.finish);

export default MyApp
