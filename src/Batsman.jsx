import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0);


    const handleSingle =()=>{
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }
    const handleFour = ()=>{
        const updatedRuns = runs + 4;
        setRuns(updatedRuns);
    }
    const handleSix = ()=>{
        const updatedRuns = runs + 6;
        setRuns(updatedRuns);
    }

    return (
        <div>
            <h3>Player: Batsman Bangla</h3>
            {
             runs > 50 &&  <p>Congratulations! You scored 50</p>
            }
            <h2>Score: {runs}</h2>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}