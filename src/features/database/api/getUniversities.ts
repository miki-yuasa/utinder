import { Firestore, collection, getDocs } from "firebase/firestore/lite";

export const getUniversities = async (db: Firestore) => {
    const universitiesCol = collection(db, 'Universities')
    const universitiesSnapshot = await getDocs(universitiesCol)
    const universities = universitiesSnapshot.docs.map(doc => doc.data())
    return universities;
}