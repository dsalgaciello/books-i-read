import firebase from "firebase/compat/app";

const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};
let app = null;
let analytics = null;
let performance = null;

export default function initFirebase() {

    if (!firebase.app.length) {
      firebase.app.initializeApp(clientCredentials);

        if (typeof window !== 'undefined') {
            if ('measurementId' in clientCredentials) {
                firebase.analytics();
                firebase.performance();
            }
        }
        console.log('firebase was set up successfully');
    }
}