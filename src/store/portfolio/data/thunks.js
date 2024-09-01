import { loadUser } from "../../../helpers/loadUser";
import { setDatosPersonales } from "./dataSlice";

export const findUser = (id) => {

    return async (dispatch , getState, id) =>{
        
        const user =  await loadUser(id);    
        dispatch(setDatosPersonales(user));
        console.log(user)
    }
}

// export const startNewUser = () => {

//     return async (dispatch , getState) =>{
        
//         dispatch(savingNewNote());
//         const {uid} = getState().auth;
        
//         const newNote={
//             title:'',
//             body:'',
//             date: new Date().getTime(),
//             imageUrls:[]
//         }

//         const newDoc= doc( collection(FirebaseDB, `${uid}/journal/notes`) )
//         const setDocResp = await setDoc(newDoc,newNote);

//         newNote.id = newDoc.id
//         dispatch(addNewEmptyNote(newNote));
//         dispatch(SetActiveNote(newNote));        //dispatch
//         //dispatch(newNote)
//         //dispatch(ActivarNote)
//     }
// }

// export const startLoadingNote = () => {

//     return async (dispatch , getState) =>{
        
//         const {uid} = getState().auth;
//         if (!uid) throw new Error('El uid del usuario no esta establecido');
        
//         const notes = await loadNotes(uid);
//         dispatch(SetNotes(notes));
//     }
// }


// export const startSaveNote = () => {

//     return async (dispatch , getState) =>{
        
//         dispatch(SetSaving())

//         const {uid} = getState().auth;
//         if (!uid) throw new Error('El uid del usuario no esta establecido');

//         const {active:note} = getState().journal;
//         const noteToFireStore= {...note};
//         delete noteToFireStore.id

//         const docRef= doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
//         const resp = setDoc(docRef , noteToFireStore, { merge:true})

//         dispatch(UpdateNote(note))
//     }
// }

// export const startUploadingFiles = (files =[]) => {

//     return async (dispatch , getState) =>{
        
//         dispatch(SetSaving())
//         //await fileUpload(files[0]);
//         const fileUploadPromises= [];

//         for (const file of files) {
//             fileUploadPromises.push( fileUpload(file) )
//         }

//         const photosUrls = await Promise.all(fileUploadPromises);
        
//         dispatch(setPhotosToActiveNote(photosUrls));
//     }
// }

// export const startDeletingNote = () => {

//     return async (dispatch , getState) =>{
        
//         const {uid} = getState().auth;
//         if (!uid) throw new Error('El uid del usuario no esta establecido');

//         const {active:note} = getState().journal;

//         const docRef= doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
//         const resp = await deleteDoc(docRef);

//         dispatch(deleteNoteById(note.id));

//     }
// }


