import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.VITE_API_KEY,
  authDomain: import.meta.VITE_AUTH_DOMAIN,
  projectId: import.meta.VITE_PROJECTID,
  storageBucket: import.meta.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.VITE_MESSAGEING_SENDERID,
  appId: import.meta.VITE_APPID,
};

//본인 계정의 키 등 설정값을 가지고 초기화
//firebase init
firebase.initializeApp(firebaseConfig);

//파이어 스토어 DB서비스
//init service
const firedb = firebase.firestore();
const fireauth = firebase.auth(); //인증서비스

export { firedb, fireauth };
