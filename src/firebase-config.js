/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */

const config = {
    /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
    apiKey: "AIzaSyB7DelyrcWcb7O2uv2z_CIRttv4bUMZ1YM",
    authDomain: "friendlychat-web-cf448.firebaseapp.com",
    projectId: "friendlychat-web-cf448",
    storageBucket: "friendlychat-web-cf448.appspot.com",
    messagingSenderId: "1068015560643",
    appId: "1:1068015560643:web:5b59d0c0e054bff8bbbf76"
};

export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
        throw new Error(
            'No Firebase configuration object provided.' +
                '\n' +
                "Add your web app's configuration object to firebase-config.js"
        );
    } else {
        return config;
    }
}
