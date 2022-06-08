import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { getFirestore, collection, query, where, getDocs, addDoc, setDoc, doc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };


const firebaseApp = initializeApp(firebaseConfig)
console.log(process.env.REACT_APP_FIREBASE_API_KEY)
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
    console.log("Error here!!", err.code)
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