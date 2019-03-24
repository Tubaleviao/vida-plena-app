import * as firebase from 'firebase'
import config from '../config.key'

const firebaseImpl = firebase.initializeApp(config);

async function signOut(){
  firebase.auth().signOut();
}

const authenticated = firebase.auth().onAuthStateChanged((user) => {
  console.log("user: "+JSON.stringify(user));
  if (user != null) {
    console.log("We are authenticated now! ");
    return true;
  }else{
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
    firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => { //  <<< signInWithCredential
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
      firebase.auth().signInAndRetrieveDataWithCredential(result).catch((error) => { //  <<< signInWithCredential
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

export {loginWithFacebook, signInWithGoogleAsync, signInWithEmailAndPassword, authenticated, signOut}