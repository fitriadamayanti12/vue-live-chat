import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAVlth6tLeSa2KGKwYROfQsPtehK4IUSZo",
    authDomain: "vue-http-demo-e839f.firebaseapp.com",
    databaseURL: "https://vue-http-demo-e839f-default-rtdb.firebaseio.com",
    projectId: "vue-http-demo-e839f",
    storageBucket: "vue-http-demo-e839f.appspot.com",
    messagingSenderId: "276393754864",
    appId: "1:276393754864:web:9673fee58857d311fe0235"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }