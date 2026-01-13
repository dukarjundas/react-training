// function Hello ({name}:{name:string}){
//     return <h1>Hello {name}</h1>
// }

// export default Hello;

// function Hello({ name, greeting }: { name?: string; greeting?: string }) {
//   return (
//     <>
//       <h1>{greeting ?? "Hello"} {name}</h1>
//       <div>Welcome to project</div>
//     </>
//   )
// }

// export default Hello

import type { MouseEvent } from "react";

function Hello({ name, greeting }: { name?: string; greeting?: string }) {
    const show = true;
    function greet(e:MouseEvent<HTMLButtonElement>,name?:string) {
        console.log(e);
        alert(`${greeting??"Hello"},${name??"World"}`)
    }
    return (
        <>
            <h1>{greeting ?? "Hello"} {name}</h1>
            {show && <div>Welcome to project</div>}
            {
                (() => {
                    if (name === 'Arjun') {
                        return <p>This is Arjun</p>
                    } else if (name === 'geetha'){
                        return <p>This is /geetha</p>
                    }else{
                        return <p>No Specfic Person</p>
                    }

                })()}
                <button onClick={(event)=>greet(event,name)}>Greet</button>
        </>
    )
}

export default Hello
