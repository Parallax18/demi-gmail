import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { getFirestore, collection, query, where, getDocs, addDoc, setDoc, doc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBqds-fdSb92stJ4h2L8zvGz1MK9SMP7Y0",
    authDomain: "demi-mail.firebaseapp.com",
    projectId: "demi-mail",
    storageBucket: "demi-mail.appspot.com",
    messagingSenderId: "1046647457111",
    appId: "1:1046647457111:web:d641268306930e71fbea12"
  };


const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const googleProvider = new GoogleAuthProvider();

 
const sendMail = async ({to, subject, message, timeStamp, isStarred, isImportant, uid}) => {
  try {
    console.log("sending..")
   const email =  await setDoc(doc(db, "emails", uid), {
      to,
      subject,
      message,
      timeStamp,
      isStarred,
      isImportant,
      uid
    });
  }catch(err) {
    console.log("Error!!", err.code)
  }finally {
    console.log("done")
  }
}

   
export { sendMail, db, auth, googleProvider}



  
// const firebaseApp = firebase.initializeApp(firebaseConfig)
// const db = firebase.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { db, auth, provider };