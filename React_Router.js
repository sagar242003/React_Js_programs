import React, { useReducer } from 'react'; // Import React and useReducer
import { Route, Routes,Link } from 'react-router-dom';

const Home = () => {
  return (
    <h1>Home page</h1>
  )
}
const Blogs = () => {
  return (
    <h1>Blogs page</h1>
  )
}
const Contacts = () => {
  return (
    <h1>Contacts page</h1>
  )
}
function App() {

  return (
    <>
      <nav>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/contacts'>Contacts</Link></li>
          <li><Link to='/blogs'>Blogs</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/contacts' element={<Contacts></Contacts>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>

    </>
  );
}

export default App;
