import React from "react";

// export default function Question1() {

//     // const handleChange = (e) => {
//     //     console.log(e);
//     // }

//     return (
//         <div>
//             <input onChange={(e)=>console.log(e)} />
//         </div>
//     )
// }


// Class component form

class Question1 extends React.Component {
  render() {
    return (
      <div>
        <input onChange={(e) => console.log(e)} />
      </div>
    );
  }
}

export default Question1;
