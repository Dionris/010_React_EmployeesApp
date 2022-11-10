
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    const data = [
        {name: 'Vlad', salary: 1800, increase: false, id: 1},
        {name: 'Danik', salary: 13000, increase: true, id: 2},
        {name: 'Dima', salary: 15000, increase: false, id: 3},

    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
                
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

/* 
CATALOG CARDS MARKETPLACE

1---

function WhoAmI (props) {
    return (
        <div>
            <h1>My name is {props.name}, surname - {props.surname}</h1>
            <a href={props.link}>My profile</a>
        </div>
    )
}

function App() {
    return (
        <div className='App'>
            <WhoAmI name="vlad" surname="Morunov" link="instagram.com"/> 
            <WhoAmI name="vova" surname="goga" link="facebook.com"/> 

        </div>
    )
}


2--- object

function WhoAmI ({name, surname, link}) {
    return (
        <div>
            <h1>My name is {name}, surname - {surname}</h1>
            <a href={link}>My profile</a>
        </div>
    )
}

function App() {
    return (
        <div className='App'>
            <WhoAmI name="vlad" surname="Morunov" link="instagram.com"/> 
            <WhoAmI name="vova" surname="goga" link="facebook.com"/> 

        </div>
    )
} 

3--- oject in object

function WhoAmI ({name, surname, link}) {
    return (
        <div>
            <h1>My name is {name.firstName}, surname - {surname}</h1>
            <a href={link}>My profile</a>
        </div>
    )
}

function App() {
    return (
        <div className='App'>
            <WhoAmI name={{firstName: 'Vlad'}} surname="Morunov" link="instagram.com"/> 
            <WhoAmI name={{firstName: 'Vova'}} surname="goga" link="facebook.com"/> 

        </div>
    )
}

4--- function

function WhoAmI ({name, surname, link}) {
    return (
        <div>
            <h1>My name is {name()}, surname - {surname}</h1>
            <a href={link}>My profile</a>
        </div>
    )
}

function App() {
    return (
        <div className='App'>
            <WhoAmI name={() => {return 'Vlad'}} surname="Morunov" link="instagram.com"/> 
            <WhoAmI name={() => {return 'Vova'}} surname="goga" link="facebook.com"/> 

        </div>
    )
}

*/

/*

import { Component } from 'react';

import './app.css';


 1--- Component

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27
        }
    }
    render() {
        const {name, surname, link} = this.props;
        return (
            <div>
                <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
                <a href={link}>My profile</a>
            </div>
        )
    }
}

function App() {
    return (
        <div className='App'>
            <WhoAmI name='Vlad' surname="Morunov" link="instagram.com"/> 
            <WhoAmI name='Vova' surname="goga" link="facebook.com"/> 
        </div>
    )
}

2--- Component setState

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27
        }
    }

    nextYear = () => {
        this.setState({
            years: this.state.years + 1
        })
    }

    render() {
        const {name, surname, link} = this.props;
        return (
            <div>
                <button onClick={this.nextYear}>+++</button>
                <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
                <a href={link}>My profile</a>
            </div>
        )
    }
}

function App() {
    return (
        <div className='App'>
            <WhoAmI name='Vlad' surname="Morunov" link="instagram.com"/> 
            <WhoAmI name='Vova' surname="goga" link="facebook.com"/> 
        </div>
    )
}

3--- Component setState ++ callback function

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: '+++'
        }
    }

    nextYear = () => {
        this.setState(state => ({
            years: state.years + 1
        }))
    }

    render() {
        const {name, surname, link} = this.props;
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.text}</button>
                <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
                <a href={link}>My profile</a>
            </div>
        )
    }
}

function App() {
    return (
        <div className='App'>
            <WhoAmI name='Vlad' surname="Morunov" link="instagram.com"/> 
            <WhoAmI name='Vova' surname="goga" link="facebook.com"/> 
        </div>
    )
}

*/

/*
import { Component } from 'react';

import './app.css';

1-- This.commitInputChanges - 1 argument


class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: '+++',
            position: ''
        }
    }

    nextYear = () => {
        this.setState(state => ({
            years: state.years + 1
        }))
    }

    commitInputChanges = (e) => {
        this.setState({
            position: e.target.value
        })    
    }

    render() {
        const {name, surname, link} = this.props;
        const {position, years} = this.state;
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.text}</button>
                <h1>My name is {name}, surname - {surname},
                 age - {years}, 
                 position - {position}</h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={this.commitInputChanges} />
                </form>
            </div>
        )
    }
}

function App() {
    return (
        <div className='App'>
            <WhoAmI name='Vlad' surname="Morunov" link="instagram.com"/> 
            <WhoAmI name='Vova' surname="goga" link="facebook.com"/> 
        </div>
    )
}

2-- This.commitInputChanges - 2 argument

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: '+++',
            position: ''
        }
    }

    nextYear = () => {
        this.setState(state => ({
            years: state.years + 1
        }))
    }

    commitInputChanges = (e, color) => {
        console.log(color);
        this.setState({
            position: e.target.value
        })    
    }

    render() {
        const {name, surname, link} = this.props;
        const {position, years} = this.state;
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.text}</button>
                <h1>My name is {name}, surname - {surname},
                 age - {years}, 
                 position - {position}</h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
                </form>
            </div>
        )
    }
}

function App() {
    return (
        <div className='App'>
            <WhoAmI name='Vlad' surname="Morunov" link="instagram.com"/> 
            <WhoAmI name='Vova' surname="goga" link="facebook.com"/> 
        </div>
    )
}
*/

export default App;
