import React from 'react';
class Counter extends React.Component
{
        state={
                count:0
        }
        increment=()=>{
                var count = this.state.count+1;
                this.setState({count:count});
        }
        decrement=()=>{
                var count = this.state.count-1;
                this.setState({count:count});
        }
        render()
        {
                return(
                        <div>
                                <h1>Count : {this.state.count}</h1>
                                <button onClick={this.increment}>Increment</button>
                                <button onClick={this.decrement}>Decrement</button>
                        </div>
                )
        }
}
export default Counter;