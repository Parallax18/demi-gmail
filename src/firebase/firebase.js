import { initializeApp } from "firebase/app"
import { getFirestore, collection, query, where, getDocs, addDoc } from "firebase/firestore";


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

const sendMail = async ({to, subject, message}) => {
  try {
    console.log("sending..")
    await addDoc(collection(db, "emails"), {
      to,
      subject,
      message,
    });
  }catch(err) {
    console.log("Error!!", err.code)
  }finally {
    console.log("done")
  }
}


export { sendMail, db }



  
// const firebaseApp = firebase.initializeApp(firebaseConfig)
// const db = firebase.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { db, auth, provider };