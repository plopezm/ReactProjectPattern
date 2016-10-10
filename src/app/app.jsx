import React from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component{

    render(){
        return  (
            <div>
                <div>
                    Hello World
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));