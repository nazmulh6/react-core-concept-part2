import { useState } from "react"

export default function Comment (){

    const [coment, setComent]= useState(0);
    const handleComent = ()=>{
        const newComent = coment + 1;
        setComent(newComent);
    }


    const styleCommentBox ={
        border: '2px solid green',
        borderRadius: '10px',
        margin: '5px'
    }
    return (

<div style={styleCommentBox}>
    <h3>Comment Box</h3>
    <h3>comment: {coment} </h3>
    <button onClick={handleComent}>submit</button>
</div>

    )
}