// import { useParams } from "react-router-dom";
// import { users } from "./mydata";
// import { Blogs } from "./blogs";

// export const Blog=()=>{

//     const {name}=useParams()
//     const user=users.find((n)=>n.Name===name)

//     return(
//         <table border={1}>
//             <tr>
//                 <th>Name</th>
//                 <th>Gender</th>
//                 <th>Age</th>
//             </tr>
//             <tr>
//                 <td>{users.Name}</td>
//                 <td>{users.Gender}</td>
//                 <td>{users.Age}</td>
//             </tr>
//         </table>
//     )
// }


import React from "react"; // Make sure to import React
import { useParams } from "react-router-dom";
import { users } from "./mydata"; // Importing 'users' array from mydata

export const Blog = () => {
    const { name } = useParams();
    const user = users.find((n) => n.Name === name);

    if (!user) {
        return <div>User not found</div>; // Add a check for user not found
    }

    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.Name}</td> {/* Use 'user.Name' instead of 'users.Name' */}
                        <td>{user.Gender}</td> {/* Use 'user.Gender' instead of 'users.Gender' */}
                        <td>{user.Age}</td> {/* Use 'user.Age' instead of 'users.Age' */}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};



{/*
Certainly! This code is a React component that displays user information based on the URL 
parameter using the React Router library. Let's break down the code step by step:

1. Import Statements:
   - The code starts by importing necessary modules from external sources.
   - `React` is imported from the "react" package. It's required because the code is written 
   using React components.
   - `useParams` is imported from the "react-router-dom" package. It's a hook that allows 
   components to access URL parameters.
   - The `users` array is imported from a file named "mydata". This array likely contains 
   information about users.

2. `Blog` Component:
   - The component is defined using an arrow function syntax (`() => { ... }`).
   - The name of the component is "Blog".

3. `useParams` Hook:
   - Inside the component, the `useParams` hook is used to extract URL parameters.
   - The `name` parameter is extracted from the URL. It's assumed that this parameter is part 
   of the route path.

4. Finding the User:
   - The `users.find()` method is used to search for a user in the `users` array whose `Name` 
   property matches the extracted `name` parameter.
   - If a matching user is found, the user object is stored in the `user` variable. If not, 
   the component returns a message saying "User not found".

5. Rendering User Information:
   - If a user is found (i.e., `user` is truthy), the component proceeds to render a table with 
   the user's information.
   - The table structure includes a header row with column headings "Name", "Gender", and "Age".
   - Inside the table body, a row is created to display the user's name, gender, and age.
   - The user information is accessed from the `user` object. For example, `user.Name` is used 
   to display the user's name.

6. User Not Found:
   - If no matching user is found in the `users` array, the component returns a `<div>` element
    with the text "User not found".

In summary, this React component is meant to be used as part of a larger application that 
utilizes React Router for routing. It takes a URL parameter (user's name), searches for a user 
with a matching name in the `users` array, and displays the user's information in a table if 
found. If no user is found, it displays a "User not found" message.
*/}