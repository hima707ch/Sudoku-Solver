import React from "react";
//import ReactDOM from "react-dom";

function Inp(props){
    return <input id = {props.id}  ></input>
}

function Box(props){

    var arr = [];

    var id = props.id-100;
    var fir = Math.floor((id)/3)*27  + (id%3) * 3 ;

    fir-=7 ;

    for(var i=0;i<9;i++)
    {
        if(i%3 === 0) fir += 7;
        else fir += 1;
        arr.push(fir);
    }

    function inpt(i)
    {    
        return <Inp key = {i} id = {i} />
    }    

    return <div className="box" id = {props.id}>
        {arr.map(inpt)}
    </div>
}
export default Box;