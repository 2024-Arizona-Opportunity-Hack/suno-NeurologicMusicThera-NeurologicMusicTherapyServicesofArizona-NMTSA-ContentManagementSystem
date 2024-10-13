import { auth, FIRESTORE_DB } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
export const doCreateUserWithEmailAndPassword = async (email, password, role) => {
  const users = await getDocs(collection(FIRESTORE_DB, "users"));
  //if its a first user, set it as admin
  let isAdmin = false;
  if (users.empty) {
    isAdmin = true;
  }
//   if(!isAdmin  && inviteCode ===""){
//  alert("Please enter a valid invite code");
//  return false;
//   }

  //check if the invite code is valid
//   if(!isAdmin){
//   const inviteCodeDoc = await getDoc(doc(FIRESTORE_DB, "codes", inviteCode));
//   if (!inviteCodeDoc.exists()) {
//     alert("Invalid invite code");
//     return false;
//   }
// }
  await createUserWithEmailAndPassword(auth, email, password);

  // await deleteDoc(doc(FIRESTORE_DB, "codes", inviteCode));
  await setDoc(doc(FIRESTORE_DB, "users", email), {
    email: email,
    password: password,
    roles: [isAdmin ? "admin" : role],
  });
  return true;
};

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  // add user to firestore
};

export const doSignOut = () => {
  return auth.signOut();
};

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};
