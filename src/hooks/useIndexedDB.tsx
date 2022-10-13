import { useMemo } from 'react';
import { userType } from '../types';

const useIndexedDB = (data: userType[]) => {
  const indexedDb =
    // @ts-ignore
    window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

  useMemo(() => {
    const request = indexedDb.open('usersDB', 1);

    request.onerror = function (event) {
      console.error('Error connecting to indexed database');
      console.error(event);
    };

    request.onupgradeneeded = function () {
      const db = request.result;
      const store = db.createObjectStore('usersDB', { keyPath: 'id' });
      store.createIndex('user_by_id', ['id'], { unique: true });
    };

    request.onsuccess = function () {
      const db = request.result;
      const transaction = db.transaction('usersDB', 'readwrite');
      const store = transaction.objectStore('usersDB');
      //   const idIndex = store.index('user_by_id');

      data.forEach((user) => {
        const saveInStore = store.put(user);
        saveInStore.onerror = function () {
          console.log('Error inserting user to database');
        };
      });

      //   const idQuery = idIndex.get(['1']);

      //   idQuery.onsuccess = function () {
      //     console.log('indexedDB idQuery =====', idQuery.result);
      //   };

      transaction.oncomplete = function () {
        db.close();
      };
    };
  }, [data, indexedDb]);
};

export default useIndexedDB;
