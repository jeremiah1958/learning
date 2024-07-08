import { useState } from 'react'

function Garage(){

    const carName = "BMW";

    return(
        <>
        <h2>Which care lives in my garage?</h2>
        <Car brand={carName} />
        </>
    )
}

function Car(props){
    return <h2>I am a {props.brand}</h2>
}

export default Garage