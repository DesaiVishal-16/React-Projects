import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { app } from "./firebaseConfig";
import upload from "./upload";

// Initialize Firebase services
export const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

// Sign-up function
const signUp = async (userName, email, pass, avatar) => {
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
    const user = userCredential.user;

    // Upload avatar and get image URL
    const imgUrl = await upload(avatar.file);

    // Save user data in Firestore
    await setDoc(doc(db, "users", user.uid), {
      userName,
      email,
      id: user.uid,
      avatar: imgUrl,
      blocked: [],
    });

    // Initialize empty chat data for the user
    await setDoc(doc(db, "usersChats", user.uid), {
      chats: [],
    });

    return user;
  } catch (error) {
    // Log the error and throw a readable message
    console.error("Error during sign-up:", error);
    throw new Error(error.message);
  }
};

// Login function
const login = async (email, pass) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, pass);
    console.log("User logged in:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    // Log the error and throw a readable message
    console.error("Error during login:", error);
    throw new Error(error.message);
  }
};

// Sign-up with Google function
const signUpWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleAuthProvider);
    const user = result.user;
    console.log("User signed up with Google:", user);
    return user;
  } catch (error) {
    // Log the error and throw a readable message
    console.error("Error during Google sign-up:", error);
    throw new Error(error.message);
  }
};

export { signUp, login, signUpWithGoogle };

