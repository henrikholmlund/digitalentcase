export let app_fireBase = {};
(function() {
  var firebaseConfig = {
    apiKey: 'AIzaSyAHiau3-esNVpOIzFuFAVKgWszFLGFVO_s',
    authDomain: 'digitalentcase.firebaseapp.com',
    databaseURL: 'https://digitalentcase.firebaseio.com',
    projectId: 'digitalentcase',
    storageBucket: 'digitalentcase.appspot.com',
    messagingSenderId: '493304436652',
    appId: '1:493304436652:web:446c34f3eac9f790'
  };

  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  app_fireBase = firebase;
  function writeUserData(userId, name, email, imageUrl) {
    firebase
      .database()
      .ref('users/' + userId)
      .set({
        username: name,
        email: email,
        profile_picture: imageUrl
      });
  }

  function writeNewPost(uid, username, picture, title, body) {
    // A post entry.
    var postData = {
      author: username,
      body: body,
      title: title,
      starCount: 0,
      authorPic: picture
    };

    // Get a key for a new Post.
    var newPostKey = firebase
      .database()
      .ref()
      .child('posts')
      .push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    return firebase
      .database()
      .ref()
      .update(updates);
  }

  writeNewPost('test', 'test', 'test', 'test', 'test');

  function fnCreate(path, body, callBack) {
    if (!path || !body) return;
    app_fireBase
      .database()
      .ref(path)
      .set(body, callBack);
  }

  app_fireBase.databaseApi = {
    create: fnCreate
    // read: fnRead,
    // update: fnUpdate,
    // delete: fnDelete
  };
})();
