import firebase from "firebase";
import bcrypt from "bcryptjs";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "school-board-campaign.firebaseapp.com",
  projectId: "school-board-campaign",
  storageBucket: "school-board-campaign.appspot.com",
  messagingSenderId: "1033989656769",
  appId: "1:1033989656769:web:001c0209cb58e4b0410440",
  measurementId: "G-09VQD3DD1W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };

export const deleteSub = async (id) => {
  const sub = db.collection("subscribers").doc(id);
  try {
    return await sub.get().then(async (doc) => {
      if (!doc.exists) {
        return false;
      }
      await sub.delete();
      return true;
    });
  } catch (error) {
    console.warn(error);
  }
};

export const getSubscribers = () => {
  return db.collection("subscribers");
};

export const addSubscriber = (subscriber) => {
  try {
    db.collection("subscribers").add({ ...subscriber });
  } catch (err) {
    console.log("firebase error: ", err);
  }
};

export const addAdmin = async (admin) => {
  try {
    const ret = bcrypt.hash(admin.password, 12);
    ret.then((data) => {
      db.collection("admins").add({ ...admin, password: data });
    });
    return true;
  } catch (err) {
    console.log("firebase error: ", err);
  }
};

export const updatePassword = async (cred) => {
  return await db
    .collection("admins")
    .where("username", "==", cred.username)
    .get()
    .then((data) => {
      const info = data.docs[0].data();
      return bcrypt.compare(cred.oldPassword, info.password).then((res) => {
        if (!res) {
          return null;
        }
        return db
          .runTransaction((transaction) => {
            return bcrypt.hash(cred.newPassword, 12).then((password) => {
              return transaction.update(data.docs[0].ref, { password });
            });
          })
          .then(() => {
            return db
              .collection("admins")
              .where("username", "==", cred.username)
              .get()
              .then((data) => data.docs[0].data());
          });
      });
    });
};

export const signin = async (cred) => {
  return await db
    .collection("admins")
    .where("username", "==", cred.username)
    .get()
    .then((data) => {
      const info = data.docs[0].data();
      return bcrypt.compare(cred.password, info.password).then((res) => {
        if (!res) {
          return null;
        }
        return info;
      });
    });
};
