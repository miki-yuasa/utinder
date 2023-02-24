import { Firestore, collection, getDocs, getDoc, doc } from "firebase/firestore/lite";

export const getColleges = async (db: Firestore) => {
    const collegesCol = collection(db, 'Universities', 'keio', 'colleges',)
    const collegeSnapshot = await getDocs(collegesCol)
    const colleges = collegeSnapshot.docs.map(doc => doc.data())
    // const colleges = collegeSnapshot.data()
    console.log(JSON.stringify(colleges))
    return colleges;
}