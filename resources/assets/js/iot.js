import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRedirect, Router, hashHistory} from 'react-router';
import $ from 'jquery';
import injectTapEventPlugin from 'react-tap-event-plugin';
import IndexComponent from './components/indexComponent';
injectTapEventPlugin();

import App from './app';
import Home from './containers/home/index';
import Io from 'socket.io-client';
import Echo from 'laravel-echo';

window.io = Io;
window.echo = new Echo({
    namespace: 'App.Events.Broadcast',
    broadcaster: 'socket.io',
    host: 'http://iot-application.herokuapp.com:9090'
});

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $("meta[name='csrf-token']").attr('content')
    }
});

let routes = (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <Route path='' component={IndexComponent}>
                <IndexRedirect to='home'/>
                <Route path='home' component={Home}/>
            </Route>
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('app'));
