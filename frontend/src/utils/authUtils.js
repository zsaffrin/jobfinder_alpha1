import { firebase } from '../firebase';

export function loginWithGoogle() {
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(googleAuthProvider);
}
