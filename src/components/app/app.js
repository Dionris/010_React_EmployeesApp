import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
                
            <EmployeesList/>
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

export default App;
