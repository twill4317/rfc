// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// const firebaseConfig = {
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://rfc-website-c0be0-default-rtdb.firebaseio.com"
// }
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// var admin = require("firebase-admin");
// var serviceAccount = require("C:\Users\bandi\OneDrive\Desktop\code\site\rfc-website-c0be0-firebase-adminsdk-htrge-31ff8ab28b.json");

// createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
//     const user = userCredential.user;
// }).catch(error => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
// })

// signInWithEmailAndPassword(auth, email, password)
//     .then(userCredential => {
//         const user = userCredential.user
//     })
//      .catch(error => {
//          const errorCode = error.code
//          const errorMessage = error.message
//      });

// signOut(auth).then(()=>{

// }).catch(error =>{

// })

// const express = require('express')
'use strict';
import express from 'express';

const app = express ();

app.get('/', (req,res) => {
    res.send('Hello World!')

})


app.listen(5000, () => console.log('Server is up and running'))