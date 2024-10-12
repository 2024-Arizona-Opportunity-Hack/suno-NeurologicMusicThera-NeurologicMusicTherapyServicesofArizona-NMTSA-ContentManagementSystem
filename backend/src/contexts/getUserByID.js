
import {
  collection,
  doc,
  getDoc,

} from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/firebase";



export async function getUserByID(
  email
){
  if (!email) {
    console.error("No email provided");
    return null;
  }
  const userRef = doc(collection(FIRESTORE_DB, "users"), email);
  const userDocs = await getDoc(userRef);
  if (!userDocs.exists()) {
    return null;
  }
  return userDocs.data();
}
