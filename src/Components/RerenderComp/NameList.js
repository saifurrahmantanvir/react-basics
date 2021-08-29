import React from 'react';
import Person from './Person';

function NameList() {
    /* -----
    const names = ['Jonas', 'Tanvir', 'Abir'];

    const nameList = names.map((nam, i) => <h3 key={i}>{nam}</h3>);

    return <div>{nameList}</div>
    ----- */

    const persons = [
        {
            id: 1,
            name: 'Jonas',
            skill: 'Javascript'
        },
        {
            id: 2,
            name: 'Tanvir',
            skill: 'React'
        },
        {
            id: 3,
            name: 'Abir',
            skill: 'Go'
        }
    ];

    const personList = persons.map(person => <Person key={person.id} person={person} />)

    return <div>{personList}</div>

}

export default NameList;
