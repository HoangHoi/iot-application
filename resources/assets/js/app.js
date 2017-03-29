import React from 'react';
import ReactDOM from 'react-dom';
import School from './components/school-component';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <School />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
