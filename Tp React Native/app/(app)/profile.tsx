import React from 'react';
import { Text } from 'react-native';

export default function Profile() {
    return (
        <>
            <Text>Profile</Text>
            <Text>Nom de famille</Text>
            <Text>Prénom</Text>
        </>
    );
}

//  const uid = user?.uid as string;
// const docRef = doc(db, "Users", uid);
// const docSnap = await getDoc(docRef)
// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   console.log("No such document!");
// }