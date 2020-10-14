import firebase from "firebase/app";
import "firebase/auth";

import key from "../keys/firebase";

firebase.initializeApp(key);

export default firebase;