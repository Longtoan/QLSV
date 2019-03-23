export const FIREBASE_CONFIG= {
    apiKey: "AIzaSyA0CDWne3fG_qxehC_J8JX6GEcCbhYK7S0",
    authDomain: "qlsv-9c70e.firebaseapp.com",
    databaseURL: "https://qlsv-9c70e.firebaseio.com",
    projectId: "qlsv-9c70e",
    storageBucket: "qlsv-9c70e.appspot.com",
    messagingSenderId: "636057893643"
  };
  export const snapShotToArray = snapshot => {
      let returnArray = [];
      snapshot.forEach(element => {
          let item = element.val();
        
          item.key = element.key;
          returnArray.push(item);
          
      }); 
      return returnArray;
  }