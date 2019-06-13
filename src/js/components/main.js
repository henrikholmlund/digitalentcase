import { app_firebase } from './firebase';
var firebase = app_firebase;
function messageHandler(err) {
  if (!!err) {
    console.log(err);
  } else {
    console.log('success 🤩');
  }
}
function fnCreate() {
  var path = 'candidates/';
  var data = {
    name: 'my name yo',
    email: 'myemail',
    address: 'my address',
    image: 'some image',
    stage: 'kontakt'
  };
  app_firebase.databaseApi.create(path, data, messageHandler);
}
fnCreate();
function fnRead() {}
function fnUpdate() {}
function fnDelete() {}

// function writeUserData(userId, name, email, imageUrl, address) {
//   firebase
//     .database()
//     .ref('candidates/' + userId)
//     .set(
//       {
//         name: 'my name yo',
//         email: 'myemail',
//         address: 'my address',
//         image: 'some image',
//         stage: 'kontakt'
//       },
//       function(error) {
//         if (error) {
//           console.log('writing data failed 😕');
//         } else {
//           console.log('data was saved 😄');
//         }
//       }
//     );
// }
// writeUserData();
