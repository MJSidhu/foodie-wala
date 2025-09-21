// src/components/SaveUser.js
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";

function SaveUser() {
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    if (isSignedIn && user) {
      // send user details to backend
      axios.post("http://localhost:5000/api/user/create", {
        clerkId: user.id,
        email: user.primaryEmailAddress?.emailAddress,
        username: user.username || user.fullName || "",
        profileImage: user.imageUrl,
      })
      .then(res => {
        console.log("User saved:", res.data);
      })
      .catch(err => {
        console.error("Error saving user:", err);
      });
    }
  }, [isSignedIn, user]);

  return null; // no UI needed
}

export default SaveUser;
