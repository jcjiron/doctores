// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDxRgp5_6cRZuC4gXhJMXO9KI0XBEiuOzQ",
   authDomain: "doctors-a3aaa.firebaseapp.com",
   databaseURL: "https://doctors-a3aaa.firebaseio.com",
   projectId: "doctors-a3aaa",
   storageBucket: "doctors-a3aaa.appspot.com",
   messagingSenderId: "649191926913"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
