import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAvJh7o3tuGqeRwHghDG4B65ss_vSdeaHI",
  authDomain: "webdevelop-5e83b.firebaseapp.com",
  projectId: "webdevelop-5e83b",
  storageBucket: "webdevelop-5e83b.firebasestorage.app",
  messagingSenderId: "540849661630",
  appId: "1:540849661630:web:e8e92c2720cfb7818ba0ef",
  measurementId: "G-7E3H8Y1RCY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);