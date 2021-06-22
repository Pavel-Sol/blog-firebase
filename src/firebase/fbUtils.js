import { storage } from './fbConfig';

// ф-ия для загрузки фото в fb storage. Принимает файл и название папки, в
// в которой будет сохранение в storage.
export const uploadImgInFBStorage = (file, collectionName) => {
  let storageRef = storage.ref(`${collectionName}/${file.name}`);
  let uploadTask = storageRef.put(file);

  return new Promise((res, rej) => {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        if (error) {
          console.log(error.message);
          rej(error);
        }
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          res(downloadURL);
        });
      },
    );
  });
};
