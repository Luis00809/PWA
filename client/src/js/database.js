import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  console.error('putDb not implemented');

  console.log("post to database");
  
  const jateDb = await openDB('jate', 1);

  const tx = jateDb.transaction('contact', 'readwrite');

  const store = tx.objectStore('jate');

  const request = store.add({ content: content });

  const result = await request;
  
  console.log('Data saved to the database', result);
};

export const getDb = async () => {

  console.error('getDb not implemented');

  console.log('GET Content form database');

  const jateDb = await openDB('jate', 1);

  const tx = jateDb.transaction('jate', 'readonly');

  const store = tx.objectStore('jate');

  const request = store.getAll();

  const result = await request;
  
  console.log('result', result);
  
  return result;

} 

initdb();
