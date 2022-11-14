// export const getImages = (length = 3) => {
//   return fetch('') //need to add link
//     .then((response) => response.json())
//     .then((response) => {
//       const images = [];
//       response.forEach((item) => {
//         const url = item?.image?.url;

//         images.push({ url });
//       });
//       return images.slice(0, length);
//     });
// };

// import FileHound from 'filehound';
// const a = FileHound.create()
//   .paths('./banners/')
//   .ext('jpg')
//   .find();

// console.log(a);
// a.then(function (files) {
//   console.log(files.length);
// });

// import FileHound from 'filehound';
// const a = FileHound.create()
//   .paths('./banners/')
//   .ext('jpg')
//   .find();

// import * as fs from 'fs';
// const dir = './banners';

// export const imgCout = fs.readdir(dir, (err, files) => {
//   console.log(files.length);

//   return files.length;
// });
