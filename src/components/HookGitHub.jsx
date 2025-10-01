import {useState, useEffect } from "react";

export default function HookGitHub() {

  const [user,setUser] = useState([]);

  const getUser = async () => {
    const res = await fetch ("https://api.github.com/users/github-john-doe");
    const json = await res.json();
    setUser (json);
  }
  
  useEffect (() => {
    getUser();
  },[])

  return (user);
}


