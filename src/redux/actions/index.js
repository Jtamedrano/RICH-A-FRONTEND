import { db } from '../../firebase';

const dispatchNewSub = (sub) => {
  window.localStorage.setItem('sub', JSON.stringify(sub));
  return {
    type: 'ADD_SUBSCRIBER',
    payload: sub,
  };
};

let exist = false;

const setExist = async (res) => {
  console.log('set', res);
  exist = res;
};

export const addSubscriber = (subscriber) => (dispatch) => {
  console.log('add');
  db.collection('subscribers')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach(async (doc) => {
        const sub = doc.data();
        if (!exist) {
          console.log(
            sub.email.toLowerCase() === subscriber.email.toLowerCase()
          );
          if (sub.email.toLowerCase() === subscriber.email.toLowerCase()) {
            dispatch(dispatchNewSub(sub));
            await setExist(true);
          } else {
            await setExist(true);
          }
        }
      });
      if (exist) {
        db.collection('subscribers')
          .add({ ...subscriber })
          .then((doc) => {
            dispatch(dispatchNewSub(subscriber));
          });
      }
    });
};
