import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_apiKey,
    // authDomain: process.env.REACT_APP_FIREBASE_authDomain,
    // projectId: process.env.REACT_APP_FIREBASE_projectId,
    // storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
    // appId: process.env.REACT_APP_FIREBASE_appId,
    apiKey: "AIzaSyDvlbZbxMidNDENXAHMG3yHmiTfk3mNNpQ",
    authDomain: "defect-tracker-development.firebaseapp.com",
    projectId: "defect-tracker-development",
    storageBucket: "defect-tracker-development.appspot.com",
    messagingSenderId: "929512915354",
    appId: "1:929512915354:web:342f38e940e5ee2f477a23"
})

export const auth = app.auth();
export default app;

