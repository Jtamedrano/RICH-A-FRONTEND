import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAvrOnO9YNXA_ogvG-xTUkDisXY3eKmVPk',
  authDomain: 'school-board-campaign.firebaseapp.com',
  projectId: 'school-board-campaign',
  storageBucket: 'school-board-campaign.appspot.com',
  messagingSenderId: '1033989656769',
  appId: '1:1033989656769:web:001c0209cb58e4b0410440',
  measurementId: 'G-09VQD3DD1W',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };

export const addSubscriber = (subscriber) => {
  console.log(subscriber);
  try {
    db.collection('subscribers').add({ ...subscriber });
  } catch (err) {
    console.log('firebase error: ', err);
  }
};
