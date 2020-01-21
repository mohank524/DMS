import React from 'react';
import ReactDOM from 'react-dom';
 
function Hello(props){
    return <h1>hello mohan {props.name}</h1>
}

const element = <Hello name="kumar"/>;

ReactDOM.render(
        element,
        document.getElementById('react')
    )