import React from 'react';
import { render } from 'react-dom';
import "./index.css"


const Main = props =>　{

    // function random(){
    //     var color = ["blue","red","aqua","chartreuse","deeppink"]
    //     var hello = document.getElementById("hello")
    //     hello.style.backgroundColor = color[Math.floor( Math.random() * color.length )]
    // }

    // function setcolor(){
    //     var whatcolor = ["blue","red","aqua","chartreuse","deeppink"]
    //     var change = document.getElementById("result")
    //     change.style.backgroundColor = whatcolor[Math.floor( Math.random() * whatcolor.length )]
    // }

    // function changeColor(){
    //     setInterval(setcolor, 100);
    // }
    
    const homebtn = () => {
        var greet = document.getElementById("hello")
        greet.innerHTML = 'こんにちは～～'        
    }
    const aboutbtn = () => {
        var greet = document.getElementById("hello")
        greet.innerHTML = 'about'        
    }
    const workbtn = () => {
        var greet = document.getElementById("hello")
        greet.innerHTML = 'works'         
    }

    return(
        <div>
        <h1 id="hello">Hello World</h1>
        <button onClick={homebtn}>Home</button>
        <button onClick={aboutbtn}>About</button>
        <button onClick={workbtn}>Works</button>
        <h1 id="result"></h1>
        </div>
    )

}


render(
    <Main/>,
    document.getElementById("root")
)
