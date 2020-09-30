import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBrU__eGySzU0WXtZmpceKiobbN4R6kd8o",
    authDomain: "e-commerce-project-1.firebaseapp.com",
    databaseURL: "https://e-commerce-project-1.firebaseio.com",
    projectId: "e-commerce-project-1",
    storageBucket: "e-commerce-project-1.appspot.com",
    messagingSenderId: "92628190567",
    appId: "1:92628190567:web:d8e7b0e89440e35a141bc2",
    measurementId: "G-58WZCGES53"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('ERROR! (user creating in DB process ...)', error.message)
        }
    }

    return userRef
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    const batch = firestore.batch()

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        console.log('newDocRef: ', newDocRef)
        batch.set(newDocRef, obj)
    })

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
            const {title, items} = doc.data()
            return ({
                routeName: encodeURI(title.toLowerCase()),
                id: doc.id,
                title,
                items
            })
        }
    )
    return transformedCollection.reduce(
        (accumulator, collection) => {
            accumulator[collection.title.toLowerCase()] = collection;
            return accumulator
        }, {}
    )
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;