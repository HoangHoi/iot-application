import React from 'react';
import autobind from 'react-autobind';
import Student from './student-component';

let name = 0;

class SchoolComponent extends React.Component {
    constructor(props){
        super(props);
        autobind(this);
        this.state = {
            students: [
                {id: 1, name: 'Hoang Hoi'},
                {id: 2, name: 'Nguyen Luong'},
                {id: 3, name: 'Nguyen Kim'},
                {id: 4, name: 'Le Duy'},
                {id: 5, name: 'Ngo Xuan'},
            ],
            numClick: 0
        };
        setInterval(() => { name++; console.log(name) }, 1000);
    }

    handleClick(){
        let numClick = this.state.numClick;
        console.log(name);
        // name++;
        this.setState({numClick});
    }

    render() {
        let students = [
                {id: 1, name: 'Hoang Hoi'},
                {id: 2, name: 'Nguyen Luong'},
                {id: 3, name: 'Nguyen Kim'},
                {id: 4, name: 'Le Duy'},
                {id: 5, name: 'Ngo Xuan'},
        ];
        console.log('render school');
        return (
            <ul>
                <li key="otherKey">
                    <span onClick={this.handleClick.bind(this)}>Click click</span>
                </li>
                {
                    students.map((student) => {
                        return <Student
                            name={name.toString()}
                            key={student.id}
                            onClick={this.handleClick}
                        />
                    })
                }
            </ul>
        );
    }
}

export default SchoolComponent;