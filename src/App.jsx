
import Bowler from './Bowler';
import Batsman from './Batsman';
import Coment from './coment';
import Counter from './Counter';
import Friends from './Friends';
import Users from './Users';
import Posts from './Posts';
import './App.css'
import { Suspense } from 'react';



// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json());

// const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

const fetchFriends = async()=>{
          const res = await fetch('https://jsonplaceholder.typicode.com/users');
          return res.json()
}

function App() {
const friendsPromise = fetchFriends();
  return (
    <>

      <h1>Vite + React</h1>

 <Suspense fallback={<h3>friends are coming forward... </h3>}>
<Friends friendsPromise={friendsPromise}></Friends>
 </Suspense>
      {/* <Suspense fallback={<h2>Loading....</h2>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <Suspense fallback={<h3>Loading...2</h3>}>
        <Posts fetchPosts={fetchPosts}></Posts>
      </Suspense> */}
      <Bowler></Bowler>
      <Batsman></Batsman>
      <Counter></Counter>
      <Coment></Coment>

      
    </>
  )
}

export default App
