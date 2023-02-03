import React, { useContext } from "react";
import "./App.css";
import GoogleButton from "react-google-button";
import { AuthContext } from "./context/auth";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./config/firebase";

const App = () => {
  const { user } = useContext(AuthContext);

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const handleLogOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <nav>
        {user ? (
          <button onClick={handleLogOut}>Log out</button>
        ) : (
          <GoogleButton onClick={handleSignIn} />
        )}
      </nav>
    </div>
  );
};

export default App;
