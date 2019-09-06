import React from 'react';
import { render } from 'react-dom';
import "./index.css"

let i = 0



const Main = props =>　{

    function random(){
        var color = ["blue","red","aqua","chartreuse","deeppink"]
        var hello = document.getElementById("hello")
        hello.style.backgroundColor = color[Math.floor( Math.random() * color.length )]
    }

    function setcolor(){
        var whatcolor = ["blue","red","aqua","chartreuse","deeppink"]
        var change = document.getElementById("result")
        change.style.backgroundColor = whatcolor[Math.floor( Math.random() * whatcolor.length )]
    }

    function changeColor(){
        setInterval(setcolor, 100);
    }


    let or = 1
    
    const Btn = () => {
        i = i + 1
        console.log(i + "本")
        document.getElementById("result").innerHTML = i + "本だよ！"
        random()
        or = or + 1
        if (or == 2){
            changeColor()
        }
         
    }



    return(
        <div>
        <h1 id="hello">Hello World</h1>
        <button onClick={Btn}>何本？</button>
        <h1 id="result"></h1>
        </div>
    )

}


render(
    <Main/>,
    document.getElementById("root")
)
