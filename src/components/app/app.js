
import { Component } from 'react';


import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Vlad', salary: 1800, increase: false, rise: true, id: 1},
                {name: 'Danik', salary: 1300, increase: true, rise: false, id: 2},
                {name: 'Dima', salary: 1500, increase: false, rise: false, id: 3},
        
            ],
            term: '', 
            filter: 'all'
        }
        this.maxId = 4;

    }
 
    deleteItem = (id) => {
        this.setState(({data}) => {

            //001 - sposob 1 (dolgii)

            /* 
            const index = data.findIndex(elem => elem.id === id);            

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];
            */

            return {
                // 001 - sposob 1 (dolgii)
                /*
                data: newArr
                */

                // 002 - sposob 2 (bistrii)
                data: data.filter(item => item.id !== id)

            }
        })    
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    //no optimization

    /*

    onToggleIncrease = (id) => {

        //001 - dolgii

        
        // this.setState(({data}) => {
           



        //     const index = data.findIndex(elem => elem.id === id);

        //     const old = data(index);
        //     const newItem = {...old, increase: !old.increase};
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

        //     return {
        //         data:newArr
        //     }

           
        // })

        
        //002 - bistrii

        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, rise: !item.rise}
                }
                return item;
            })
        }))    
    }
    */


    //optimization

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))    
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items 
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo employees={employees} 
                         increased={increased}/>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter}
                               onFilterSelect={this.onFilterSelect}/>
                </div>
                    
                <EmployeesList 
                data={visibleData}
                onDelete={this.deleteItem}

                //no optimization

                /*
                onToggleIncrease={this.onToggleIncrease}
                onToggleRise={this.onToggleRise}
                */

                onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm  onAdd={this.addItem}/>
            </div>
        );
    }
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
