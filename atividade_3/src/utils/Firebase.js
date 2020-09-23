import firebase from "firebase/app";
import firebase from "firebase/firestore";
import { useEffect } from "react";

import firebase_key from "../keys/firebase";

export default class Firebase {
    constructor() {
        firebase.initializeApp(firebase_key);
    }

    getFirestore() {
        return firebase.firestore();
    }
}