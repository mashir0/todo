import Vue from "vue";

import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)

import * as firebase from "firebase/app"
// import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCihdu7G_bAmUjGq-VU_nuKbPKD_uaTUvg",
    authDomain: "school-todo-84c90.firebaseapp.com",
    databaseURL: "https://school-todo-84c90.firebaseio.com",
    projectId: "school-todo-84c90",
    storageBucket: "school-todo-84c90.appspot.com",
    messagingSenderId: "1049956812028",
    appId: "1:1049956812028:web:93679d282c4eec9a20c379",
    measurementId: "G-GBVQK1ZM1H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
export const firestore = firebase.firestore
export const db = firebaseApp.firestore()
// export const auth = firebaseApp.auth()
// export const storage = firebaseApp.storage()
