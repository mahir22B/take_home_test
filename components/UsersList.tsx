import { useEffect, useState } from "react";
import Post from "./Post";
import User from "./User";
import styles from "./UsersList.module.css";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState<number>();
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("") 
  const [body, setBody] = useState("") 
  const [disabled, setDisabled] = useState<boolean>(false);


  // Getting All Users

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((finalData) => setUsers(finalData));
   }, []);


   
   const idSetter = (id:number) => {
     setIndex(id);
    }
    

  //Getting Posts for a User  
   
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${index}/posts`)
    .then((response) => response.json())
    .then((finalData) => setPosts(finalData));
   }, [index]);



  // Submit Form

  const formSubmit = async() => {
  
    setDisabled(true);
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
          return res.json();
        }
      )
      .then((data) => {
        setPosts((post) => [...post, data]);
        setDisabled(false)
        setTitle("")
        setBody("")
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <div className={styles.UsersList}>
      <h1>Users</h1>
      <div>
        {users.map((u) => (
          <div key={u.id} onClick={() => idSetter(u.id)}>
          <User {...u}/>
          </div>
        ))}

        {posts.map((p) => (
          <Post key={p.id} {...p}/>
        ))}

  {index &&    
  <form onSubmit={(e) => e.preventDefault()}>
      <p>Title</p>
      <input value={title} onChange={(e) => setTitle(e.target.value)}/>
      <p>Body</p>
      <input value={body} onChange={(e) => setBody(e.target.value)}/>
      <button disabled={disabled} onClick={formSubmit}>Submit</button>
    </form>  
}

      </div>
    </div>
  );
}
