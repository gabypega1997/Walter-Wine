import { NextApiRequest, NextApiResponse } from 'next';
import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '<path/to/firebaseConfig.ts>';

// Initialize Firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Create Google auth provider
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ user?: firebase.User } | { message: string }>
  ) {
    if (req.method === 'POST') {
      // Handle Google sign-in request
      const idToken = req.body.idToken;
  
      try {
        // Authenticate the user with Firebase Authentication
        const credential = firebase.auth.GoogleAuthProvider.credential(idToken);
        const userCredential = await firebase.auth().signInWithCredential(credential);
  
        // Respond with the authenticated user
        res.status(200).json({ user: userCredential.user });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    } else if (req.method === 'DELETE') {
      // Handle sign-out request
      const idToken = req.headers.authorization?.split('Bearer ')[1];
  
      try {
        // Sign out the user from Firebase Authentication
        await firebase.auth().signOut();
  
        // Respond with a success message
        res.status(200).json({ message: 'Sign-out successful' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }