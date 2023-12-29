import React, { useState } from 'react'
import Add from '../Img/addAvatar.png'
import { createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import {auth, storage, db} from '../Firebase'
import { ref, uploadBytesResumable, getDownloadURL, } from "firebase/storage";
import { doc, setDoc,} from "firebase/firestore";

const Register = () => {
const [err,setErr] = useState(false)

const handleClick = async (e) =>{
  e.preventDefault() 
   const displayName = e.target[0].value;
   const email = e.target[1].value;
   const password = e.target[2].value;
   const file = e.target[3].files[0];


  try{
 const res = await createUserWithEmailAndPassword(auth, email, password)
  
          
 
 const storageRef = ref(storage, displayName);
 
 const uploadTask = uploadBytesResumable(storageRef, file);
 
 // Register three observers:
 
 uploadTask.on(
   (error) => {
    setErr(true);
    
   }, 
   () => {
     // Handle successful uploads on complete
     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
     getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
      await updateProfile(res.user,{
        displayName,
        photoURL:downloadURL,

      });
       
      await setDoc(doc(db , "users", res.user.uid),{
        uid: res.user.uid,
        displayName,
        email,
        photoURL: downloadURL,
       });
       await setDoc(doc(db, "userChat", res.user.uid),{})
    
     });
   }
 );
 
}catch(err){
  console.log(err)
    setErr(true);
  }
}


  return (
    <div className='formContainer'>

      <div className='formWrapper'>
        <span className='logo'>Lama Chat</span>
        <span className='title'>Register</span>

        <form  onSubmit={handleClick}>
          <input type='text' placeholder="display name" />
          <input type='email' placeholder='email' />
          <input type='password' placeholder="password" />
          <input style={{ display: 'none' }} type='file' id="file" />
          <label htmlFor='file'>
            <img src={Add} alt='' />
            <span>Add an avatar</span></label>
          <button>Sign up</button>
          {err && <span>Something Went Wrong !</span>}
        </form>
        <p>do you have an account? Login</p>

      </div>

    </div>
  )
}

export default Register
