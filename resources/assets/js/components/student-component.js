import React from 'react';
import autobind from 'react-autobind';

class StudentComponent extends React.Component {
    constructor(props){
        super(props);
        autobind(this);
    }

    handleClick() {
        this.props.onClick();
    }

    renderClickMe() {
        console.log('click me');
        return 'Click me';
    }

    render() {
        console.log('render student');
        return (
            <li>
                <span>{this.props.name}</span>&nbsp;
                <span onClick={this.handleClick}>{this.renderClickMe()}</span>
            </li>
        );
    }
}

StudentComponent.propTypes = {
    name: React.PropTypes.string,
};

StudentComponent.defaultProps = {
    name: 'Hoang Hoi'
}

export default StudentComponent;
