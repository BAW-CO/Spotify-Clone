import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"



// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID
// }

const firebaseConfig = {
  apiKey: "AIzaSyCmttGCXQfH_AWvmkcuI8UcCGMuZn5jCXI",
  authDomain: "spotify-clone-w6.firebaseapp.com",
  projectId: "spotify-clone-w6",
  storageBucket: "spotify-clone-w6.firebasestorage.app",
  messagingSenderId: "301480047255",
  appId: "1:301480047255:web:f0c59bbef1ba9b32a7efd2"
}


// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const firebaseAuth = getAuth(app)
