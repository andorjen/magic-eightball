import {useState} from "react";

import {defaultAnswers, _choice, extractColors} from "./helpers";

/** Display a magic EightBall with random color and msg combination 
 * 
 * Props:
 * -answers (an array of objects, each object contains msg & color properties)
 * 
 * State:
 * -msg: Think of a question/ <random msg>
 * -color: black/ <random color>
 * 
 * App -> EightBall
*/

function EightBall({answers=defaultAnswers}){
    const colors = extractColors(answers)

    const [msg, setMsg]= useState("Think of a Question");
    const [color, setColor]= useState("black");
    const [colorCounter, setColorCounter] = useState(colors);
    
    function handleClick(){
        const randAnswer = _choice(answers);
        setMsg(randAnswer.msg);
        setColor(randAnswer.color);

        colorCounter[randAnswer.color]+=1;
        setColorCounter(colorCounter)
      
        console.log(colorCounter)
        console.log(typeof colorCounter)
    }
    function reset() {
        setMsg("Think of a Question");
        setColor("black");
    }

    const styles = {
        backgroundColor: color,
        color: "white",
        width: "200px",
        height: "200px",
        borderRadius:"50%",
        justifyContent:"center",
        display: "flex",
        alignItems:"center",
        textAlign:"center"
    }

    return(
        <div>
            <div style={styles} onClick={handleClick}>
            <h3> {msg}</h3>
            </div>
            <button onClick={reset}>Reset</button>
        </div>

    );
}

export default EightBall;