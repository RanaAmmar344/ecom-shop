
// import React, { useEffect, useState } from 'react'
// import MyContext from './Context'
// import { auth } from '../src/pages/FireBase-config';
// import {onAuthStateChanged} from "firebase/auth";

// const UserAuthContex = (props) => {
//     const  [userLogin,setUserLogin]=useState(false);
//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged((authUser) => {
//           if (authUser) {
//             // User is signed in.
           
//             setUserLogin(authUser);
//           } else {
//             // User is signed out.
//             setUserLogin(false);
//           }
//         });
      
//         return () => unsubscribe();
//       }, []);
       
//       const SignIn = async (email, password) => {
//         try {
//           await auth.signInWithEmailAndPassword(email, password);
      
       
//         } catch (error) {
//           console.error('Error signing in:', error);
//         }
//       };
      
//       const SignOut = async () => {
//         try {
//           await auth.signOut();
//         } catch (error) {
//           console.error('Error signing out:', error);
//         }
//       };

//   return (
//     <>
//     <MyContext.Provider value={{userLogin,SignIn,SignOut}}>
//         {props.Children}
//     </MyContext.Provider>
      
//     </>
//   )
// }

// export default UserAuthContex
