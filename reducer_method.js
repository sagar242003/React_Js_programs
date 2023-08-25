
export const reducerMethod = (prevcounter, action)=>{

    switch (action.type) {
        case 'inr':
            return (prevcounter + action.newcounter)
        case 'dcr':
            return (prevcounter - action.newcounter)
        case 'zero':
            return 0
    }
}

// export const reducerMethod = (prevcounter, action) => {
//     switch (action.type) {
//       case 'inr':
//         return prevcounter + action.newcounter;
//       case 'dcr':
//         return prevcounter - action.newcounter;
//       case 'zero':
//         return 0;
//       default:
//         return prevcounter; // Return previous state if action type is not recognized
//     }
//   };
  