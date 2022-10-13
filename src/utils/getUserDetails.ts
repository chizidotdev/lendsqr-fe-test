import { userType } from '../types';
type IProps = (id: string, setValue: React.Dispatch<React.SetStateAction<userType | null>>) => void;

const getUserDetails: IProps = (id, setValue) => {
  const indexedDb =
    // @ts-ignore
    window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

  const request = indexedDb.open('usersDB', 1);

  request.onerror = function (event) {
    console.error('Error connecting to indexed database');
    console.error(event);
  };

  request.onsuccess = function () {
    const db = request.result;
    const transaction = db.transaction('usersDB', 'readwrite');
    const store = transaction.objectStore('usersDB');
    const idIndex = store.index('user_by_id');

    const idQuery = idIndex.get([id]);

    idQuery.onsuccess = function () {
      console.log('indexedDB idQuery =====', idQuery.result);
      setValue(idQuery.result);
    };

    transaction.oncomplete = function () {
      db.close();
    };
  };
};

export default getUserDetails;
