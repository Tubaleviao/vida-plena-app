import Firebase from 'firebase'
import 'firebase/auth'
import config from '../config.key'

const firebaseImpl = Firebase.initializeApp(config);
const firebaseDatabase = Firebase.database();

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }
  // *** Auth API ***

  createUser = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

  signInManual = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();

  resetPassword = email => this.auth.sendPasswordResetEmail(email);

  updatePassword = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;

/*
export default class FirebaseService {
    static getDataList = (nodePath, callback, size = 10) => {

        let query = firebaseDatabase.ref(nodePath)
                                   .limitToLast(size);
        query.on('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        });

        return query;
    };

} */