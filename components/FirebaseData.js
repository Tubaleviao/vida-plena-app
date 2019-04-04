import * as firebase from 'firebase'
import config from '../config.js'

class Firebase {
  constructor(change){
    const app = firebase.initializeApp(config);
    this.auth = app.auth()
    this.authenticated = false;
    this.user = null;

    this.auth.onAuthStateChanged((user) => {
      this.user = user;
      console.log("user: "+JSON.stringify(user));
      if (user != null) {
        console.log("We are authenticated now! ");
        //let adaRef = app.database().ref("coach_0/contents");
        change(true, user)
        //console.log('data2: '+adaRef)
      }else{
        change(false, user)
      }
    });
  }

  isAuthenticated = () => this.authenticated;

  loginWithFB = async () => {
    console.log('going')
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync( //
      '285859408819981',
      { permissions: ['public_profile'] }
    );
    console.log('wentttt '+type)

    if (type === 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token)
      //const credential = this.auth.FacebookAuthProvider.credential(token); // getCredential
      console.log('credential: '+JSON.stringify(credential))
      firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => { //  <<< signInWithCredential signInWithCredentialAsync signInAndRetrieveDataWithCredential
        console.log(error);
      });
      console.log('eita')
    }
  }

  loginWithGG = async () => {
    try {
      //const client_id = '645982420280-p00jnuljnbug9d7biials5pqtpd5gmpu.apps.googleusercontent.com'
      //const { type, accessToken } = await Google.logInAsync({ clientId });
      const result = await Expo.Google.logInAsync({
        androidClientId: '645982420280-dcig7hr9v4r61n6jnecq9fr0q2ge9nhf.apps.googleusercontent.com',
        iosClientId: '645982420280-6hfrivr3s5c78su3kv64prermo9g877t.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      console.log(JSON.stringify(result))

      if (result.type === 'success') { 
        console.log('?')
        const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken)
        console.log('??')
        firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => { //  <<< signInWithCredential signInWithCredentialAsync signInAndRetrieveDataWithCredential
          console.log(error);
        });
        console.log('???')
        return true;
      } else {
        return false;
      }
    } catch(e) {
      return {error: true};
    }
  }

  loginWithEP = async (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  signOut = async () => this.auth.signOut();
}

export default Firebase;

/*

async function signOut(){
  firebase.auth().signOut();
}

let authenticated = false;

async function isAuthenticated(){return authenticated;};

firebase.auth().onAuthStateChanged((user) => {
  console.log("user: "+JSON.stringify(user));
  if (user != null) {
    console.log("We are authenticated now! ");
    authenticated = true;
    return true;
  }else{
    authenticated = false;
    return false;
  }
});


async function loginWithFacebook() {
  console.log('going')
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync( //
    '285859408819981',
    { permissions: ['public_profile'] }
  );
  console.log('wentttt '+type)

  if (type === 'success') {
    const credential = firebase.auth.FacebookAuthProvider.credential(token); // getCredential
    console.log('credential: '+JSON.stringify(credential))
    firebase.auth().signInWithCredentialAsync(credential).catch((error) => { //  <<< signInWithCredential
      console.log(error);
    });
  }
}

async function signInWithGoogleAsync() {
  try {
    const result = await Expo.Google.logInAsync({
      androidClientId: '645982420280-dcig7hr9v4r61n6jnecq9fr0q2ge9nhf.apps.googleusercontent.com',
      iosClientId: '645982420280-6hfrivr3s5c78su3kv64prermo9g877t.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });

    console.log(JSON.stringify(result))

    if (result.type === 'success') { 
      firebase.auth().signInWithCredentialAsync(result).catch((error) => { //  <<< signInWithCredential signInWithCredentialAsync
        console.log(error);
      });
      return result.accessToken;
    } else {
      return {cancelled: true};
    }
  } catch(e) {
    return {error: true};
  }
}

async function signInWithEmailAndPassword(email, password){
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export {loginWithFacebook, signInWithGoogleAsync, signInWithEmailAndPassword, isAuthenticated, signOut}

*/
