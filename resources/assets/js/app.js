import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="container">
                    <div className="pagegradient"></div>
                    <div className="header">
                        <h1 className="text-3d">Header</h1>
                    </div>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
