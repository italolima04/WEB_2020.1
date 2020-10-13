import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import key from "../keys/firebase";

export default class Firebase {
    constructor() {
        firebase.initializeApp(key);
    }

    getFirestore() {
        return firebase.firestore();
    }
}