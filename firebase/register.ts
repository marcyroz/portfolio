import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAoNpIHv_mShqtC6cw_yHPnqqs2Lod2yPY",
  authDomain: "portfolio-45e4d.firebaseapp.com",
  databaseURL: "https://portfolio-45e4d-default-rtdb.firebaseio.com/",
  projectId: "portfolio-45e4d",
  storageBucket: "portfolio-45e4d.firebasestorage.app",
  messagingSenderId: "575711164900",
  appId: "1:575711164900:web:d7c10bb1405e9989f22ff1",
  measurementId: "G-YXC7MQNGN5",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { analytics, app, database };
