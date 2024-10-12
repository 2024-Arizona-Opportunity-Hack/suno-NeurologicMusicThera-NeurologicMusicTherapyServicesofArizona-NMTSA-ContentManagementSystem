import { collection, getDocs } from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/firebase";

export async function getUsers(){
 const users = await getDocs(collection(FIRESTORE_DB, "users"))
 const usersList = []
 users.forEach((user) => {
  usersList.push({
    ...user.data(),
  })
 })
 return usersList
}