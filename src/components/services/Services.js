
import { db } from "../../../config/firebase"
import { collection, getDocs } from 'firebase/firestore'

export default async function Services() {
    const response = await getDocs(collection(db, 'employees'));
    const employees = response.docs.map((doc) => ({id: doc.id, ...doc.data()}))      
  return employees
}
