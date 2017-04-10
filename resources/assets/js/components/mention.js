import React from 'react';
import autobind from 'react-autobind';
import { Mention, MentionsInput } from 'react-mentions'
import defaultStyle from './defaultStyle'

const emailRegex = /(([^\s@]+@[^\s@]+\.[^\s@]+))$/;
const users = [
    {
        id: 'walter',
        display: 'Walter White',
    },
    {
        id: 'jesse',
        display: 'Jesse Pinkman',
    },
    {
        id: 'gus',
        display: 'Gustavo "Gus" Fring',
    },
    {
        id: 'saul',
        display: 'Saul Goodman',
    },
    {
        id: 'hank',
        display: 'Hank Schrader',
    },
    {
        id: 'skyler',
        display: 'Skyler White',
    },
    {
        id: 'mike',
        display: 'Mike Ehrmantraut',
    },
];


class MultipleTriggers extends React.Component {
    constructor(props){
        super(props);
        autobind(this);
        this.state = {
            value: ''
        };
    }

    onChange(ev, value) {
        this.setState({value});
    }

    onAdd(...args) {
        console.log('added a new mention', ...args);
    }

    handleRenderSuggestion(suggestion, search, highlightedDisplay) {
        return (
            <div className="user">
                { highlightedDisplay }
            </div>
        );
    }

    render() {
        let {value} = this.state;
        console.log('render student');
        return (
            <div className="multiple-triggers">
                <h3>Multiple trigger patterns</h3>
                <p>Mention people using '@' + username or type an email address</p>

                <MentionsInput
                    value={ value }
                    onChange={ this.onChange }
                    style={ defaultStyle }
                    markup="@[__display__](__type__:__id__)"
                    placeholder={"Mention people using '@'"}
                >
                    <Mention
                        type="user"
                        trigger="@"
                        data={ users }
                        renderSuggestion={this.handleRenderSuggestion}
                        onAdd={ this.onAdd }
                        style={{backgroundColor: '#cee4e5'}}
                    />

                    <Mention
                        type="email"
                        trigger="#"
                        data={ (search) => [
                        { id: search, display: search },
                        ]}
                        onAdd={ this.onAdd }
                        style={{ backgroundColor: '#d1c4e9' }}
                    />
                </MentionsInput>
            </div>
        );
    }
}

export default MultipleTriggers;
