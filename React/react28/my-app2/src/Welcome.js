import React from 'react';


export class Welcome extends React.Component{
    render(){
                return <div>
                    <h2>Welcome{this.props.name}!</h2>
                    <p>Your age is{this.props.age}</p>
                </div>
    }
}

