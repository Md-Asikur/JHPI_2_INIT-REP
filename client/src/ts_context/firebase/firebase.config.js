import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2M1lSmGMvDIZrTojT16slGJvUtCQ_WMQ",
  authDomain: "projectt-a4f8e.firebaseapp.com",
  projectId: "projectt-a4f8e",
  storageBucket: "projectt-a4f8e.appspot.com",
  messagingSenderId: "310677222600",
  appId: "1:310677222600:web:a61582d850e887773161fd",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
