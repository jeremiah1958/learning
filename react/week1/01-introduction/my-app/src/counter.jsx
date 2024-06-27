const Counter = () => {

    const greeting = 'Hello react';

    return(
       <div>
        <Welcome text={greeting}/>
       </div>

    );

};

const Welcome = ({text}) => {
    return <h1>{text}</h1>
};

export default Counter