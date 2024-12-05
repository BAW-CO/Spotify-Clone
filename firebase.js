import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmttGCXQfH_AWvmkcuI8UcCGMuZn5jCXI",
  authDomain: "spotify-clone-w6.firebaseapp.com",
  projectId: "spotify-clone-w6",
  storageBucket: "spotify-clone-w6.firebasestorage.app",
  messagingSenderId: "301480047255",
  appId: "1:301480047255:web:f0c59bbef1ba9b32a7efd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;