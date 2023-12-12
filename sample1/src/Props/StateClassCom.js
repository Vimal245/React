import React from 'react';
class StateClassCom extends React.Component
{
    state={
        color:"Yellow",
        price:121
    }

    handleChange = ()=>{
        this.setState({color:"Red"})
    }
    render()
    {
        return(
            <div>
                <h1>
                    The color i have selected is {this.state.color} The price is {this.state.price}
                    <button onClick={this.handleChange()}>Click me</button>
                </h1>
            </div>
        )
    }
}

export default StateClassCom;