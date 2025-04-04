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

  return(
     <>
      <div id="modalContainer">
      <div className="modalDiv">
        <img src= {user.avatar_url} width="100%" alt="avatar John Doe" title="avatar"/>
      </div>
      <div className="modalDiv2">
        <i class="bi bi-person"><a href="https://github.com/github-john-doe">  {user.name}</a></i>
        <hr className="border border-light border-1 opacity-70 mb-2 mt-2"/>
        <i class="bi bi-geo-alt"></i>
        <hr className="border border-light border-1 opacity-70 mb-2 mt-2"/>
        <i class="bi bi-card-text">    {user.bio}</i>
        <hr className="border border-light border-1 opacity-70 mb-2 mt-2"/>
        <i class="bi bi-box"> Repositories: {user.public_repos}</i>
        <hr className="border border-light border-1 opacity-70 mb-2 mt-2"/>
        <i class="bi bi-suit-heart">  Followers: {user.followers}</i>
        <hr className="border border-light border-1 opacity-70 mb-2 mt-2"/>
        <i class="bi bi-suit-heart">  Following: {user.following}</i>
      </div>
      </div>
        
    </>
    );
}



