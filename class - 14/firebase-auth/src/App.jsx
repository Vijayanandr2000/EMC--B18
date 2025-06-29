import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import "./App.css";
import { auth, provider } from "./config/firebase";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const handleClick = async () => {
    const { user = null } = await signInWithPopup(auth, provider);
    setUser(user);
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      <h4>Sign In with Google provider using FIREBASE</h4>
      {user ? (
        <>
          <div>
            <h3>Welcome, {user.displayName}</h3>
            <img src={user.photoURL} alt="" />
          </div>
          <button onClick={handleSignOut}>Signout</button>
        </>
      ) : (
        <button onClick={handleClick}>Signin With Google</button>
      )}
    </>
  );
}

export default App;
