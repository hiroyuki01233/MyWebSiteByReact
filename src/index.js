import React from 'react';
import { render } from 'react-dom';
import "./index.css"
import SweetScroll from "sweet-scroll"

const Main = props => {

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

    return (
        <div>
            <ul>
                <li><a class="active" href="#home">Home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#works">works</a></li>
            </ul>
            <div class="main">
                <h1 id="home">Chobi's Portfolio</h1>
                <p id="about">自己紹介</p>
                <p>勝田博之</p>
                <p>N高等学校 一年生</p>
                <p>Arduinoでいろいろ作っています。Pythonなんかも勉強中</p>
                <h1 id="result"></h1>

                <div>
                    <p id="works">作品一覧</p>
                    <div>
                    <iframe class="video1" width="560" height="315" src="https://www.youtube.com/embed/islf4aXFYSI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>キーを押すと首を振ってくれるロボットです。パトランプ付き</p>
                    </div>

                    <div>
                    <iframe class="video2" width="560" height="315" src="https://www.youtube.com/embed/fugWApoTRsM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>水平に保ってくれる機械です。作ってて楽しかった。</p>
                    </div>

                    <div>
                    <iframe class="video3" width="560" height="315" src="https://www.youtube.com/embed/aU30FTy9s3E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>お風呂に入った人をカウントして最後にお湯を抜いて掃除をする人をお知らせしてくれる機械です。</p>
                    </div>

                    <div>
                    <img src="./image/janken.jpg" alt="じゃんけんの写真" width="300"></img>
                    </div>
                </div>
            </div>
        </div>
    )

}


render(
    <Main />,
    document.getElementById("root")
)
