import React, { Component } from 'react';
/*
import logo from './logo.svg';  ==> deleting logo.svg file as not needed */
import './App.css';
import MyPerson from './Person/Person';
import PersonProp from './Person/Person_Props';


class App extends Component {

  state = {
    persons:[
      {id:'P1',name:'Maxqqq' , age:28},
      {id:'P002',name:'Manu' , age:29},
      {id:'Steph',name:'Stephanie' , age:26}
    ],
    otherState : 'some other value',
    showPersons:false
  }

switchNameHandler = (newName) => {
  console.log('Button Clicked !!! ');
  this.setState({
    persons:[
      {name: newName, age:28},
      {name:'Manu' , age:29},
      {name:'Stephanie' , age:27}
    ]
  })
} 

deletePersonHandler = (personIndex) =>{
// const persons = this.state.persons;
const persons = this.state.persons.slice();
persons.splice(personIndex,1);
this.setState({persons : persons});
}

nameChangedHandler = (event,id) => {

  const personIndex = this.state.persons.findIndex(p => {
    return p.id==id;
  });
//const person = Object.assign({} , this.state.persons[personIndex]);
/* the above commented code will work but we will follow below spread operator approcach */

  const person = {
    ...this.state.persons[personIndex]
  };

  person.name=event.target.value;
  const persons= [...this.state.persons];
  persons[personIndex] = person;



  this.setState({persons : persons  })
}


togglePersonsHandler = () => {
const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow});
}

  render() {
          const style = {
              backgroundColor : 'white',
              font:'inherit',
              border:'1px solid blue',
              padding:'8px',
              cursor:'pointer'
          };
let persons=null;
if(this.state.showPersons){
persons=(
    <div>
      {
          this.state.persons.map( (person,index) => {
                return <PersonProp 
                name={person.name} 
                age={person.age}
                key={person.id}
                click={ () => this.deletePersonHandler(index) } 
                changed= {(event) => this.nameChangedHandler(event,person.id)}
                />
          })
      }
            
    </div> 
      );
}

return (
  <div className="App"> 
  
<h2> Using State </h2>
<h1>Hi I am reactApp</h1>
<h1>This is really working !!!!</h1>



<button
style={style}
onClick={this.togglePersonsHandler}>Toogle Persons </button>
{persons}
      </div>
    );
  }
}

export default App;
