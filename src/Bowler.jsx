import { useState } from "react"

export default function Bowler (){
const [ball, setBall] = useState(0);
const [over, setOver]=useState(0);

const handleBall =()=>{
    const updatedBall = ball + 1;
    const updatedOver = over + 1;
    setOver(updatedOver)
    setBall(updatedBall);
}
return(
    <div>
        <h3>Player: Bangla Bowler</h3>
        <h1>Ball: {ball} </h1>
        {
            ball == 6 && <h1>Over: {over} </h1>
        }
        <button onClick={handleBall}> Ball</button>
    </div>
)
}