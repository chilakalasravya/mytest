import { useState } from "react";
function App(){
    const {name, setName}=useState("Suresh")

    return(
        <div>
<h3>Before Click name of the employee is: {name}</h3>
<button onClick={()=>setName("Dr. Suresh Reddy")}>
    Click me
</button>
        </div>
    )
}
export default App;