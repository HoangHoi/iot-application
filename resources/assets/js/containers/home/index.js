import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// const style = {
//   height: 100,
//   width: 100,
//   margin: 20,
//   textAlign: 'center',
//   display: 'inline-block',
// };

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="body">
                    <div className="menu">
                        <div className="button">
                            <a className="press">
                                <span>Đo nhiệt độ</span>
                            </a>
                        </div>
                        <div className="button">
                            <a className="press">
                                <span>Đo nhịp tim</span>
                            </a>
                        </div>
                        <div className="button">
                            <a className="press">
                                <span>Đo cái khác</span>
                            </a>
                        </div>
                    </div>
                    <div className="contents">
                        <Paper className="content-paper" zDepth={3} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
