// import { Link } from "react-router-dom";
// import users from './mydata';

// export const Blogs=()=>{
//     return(
//         <div>
//             <table border={1}>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         users.map((row)=>{
//                             return(
//                                 <tr key={row.name}>
//                                     <td><Link to={`/blog/${row.name}`}></Link>{row.name}</td>
//                                 </tr>
//                             )
//                         })
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }


import React from "react";
import { Link } from "react-router-dom"; // Make sure to import React
import users from './mydata';

export const Blogs = () => {
    return (
        <div>
            {/* <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>       //Not needed this table formatting 
                    </tr>
                </thead> */}
                {/* <tbody> */}
                    {
                        users.map((row) => (
                            <tr key={row.name}>
                                <td><Link to={`/blog/${row.name}`}>{row.name}</Link></td>
                            </tr>
                        ))
                    }
                {/* </tbody>
            </table> */}
        </div>
    )
}
