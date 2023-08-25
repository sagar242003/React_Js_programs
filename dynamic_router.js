// import React, { useReducer } from 'react'; // Import React and useReducer
// import { Route, Routes, Link } from 'react-router-dom';
// import { Blog } from './components/blog';



// function App() {

//   return (
//     <>
//       <nav>
//         <ul>
//           <li><Link to={`/blog/${row.name}`}>{row.name}</Link></li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path='/blog/:name' element={<Blog></Blog>}></Route>
//       </Routes>

//     </>
//   );
// }

// export default App;




import React from 'react'; // Import React
import { Route, Routes, Link } from 'react-router-dom';
import { Blog } from './components/blog';

// Define an array of blog names (for example)
const blogs = [
  {
    id: 1,
    name: "Sagar"
  },
  {
    id: 2,
    name: "Rohit"
  }
];

function App() {
  return (
    <>
      <nav>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link to={`/blog/${blog.name}`}>{blog.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <Routes>
        <Route path='/blog/:name' element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
