import { collection, getDocs } from "firebase/firestore";
import { FireBaseDB } from "../Firebase/config";

export const loadUser = async (uid= 'id-user') => {
    if (!uid) throw new Error('El uid del usuario no esta establecido');
   
    const collectioRefUser = collection(FireBaseDB, `${uid}`);
    const dataUser = await getDocs(collectioRefUser);

    let user= dataUser.docs[1].data()

    const collectionDigitalPlataformsRef = collection(FireBaseDB, `${uid}/data/digitalPlataforms`);
    user.digitalPlataforms = await FindAndExtractCollection(user,collectionDigitalPlataformsRef,'digitalPlataforms');

    const collectionLocationRef = collection(FireBaseDB, `${uid}/data/location`);
    user.location= await FindAndExtractCollection(user,collectionLocationRef,'location')
    
    const collectionServicesRef = collection(FireBaseDB, `${uid}/data/services`);
    user.services= await FindAndExtractCollection(user,collectionServicesRef,'services')

    return user;
}

const FindAndExtractCollection= async (user,collectionRef, nombreObj) => {
    const dataInfo=[];
    const dataDigitalPlataforms= await getDocs(collectionRef);

    dataDigitalPlataforms.forEach(dp => {
        dataInfo.push({id:dp.id,...dp.data()})
    })

    return dataInfo;
}