Sec4-Lec57 ==>  Lists & Keys and Sec4-Lec- 58 ==> Flexible Lists
=================================================================


Sec4-Lec57 ==>  Lists & Keys
----------------------------
To resolve the warning - "Warning: Each child in a list should have a unique "key" prop."
we should add the property key , as it is very important while rendering lists of 
data.
We have not specified key property to "PersonProp". This key property is 
actually a default property which React expects on an element(whether default HTML element or custom component)
This key property helps React update the list efficiently. So we should assign a key property to keep track of individual elements.

We get get data from some Database it generally have some id which is unique identifier.
Here we can think of using the index but if list changes the element will receive a new index.So index won't be helpful. Therefore , we will add id 
to persons ==> this need not be number but must be unique 

    persons:[
      {id:'P1',name:'Maxqqq' , age:28},
      {id:'P002',name:'Manu' , age:29},
      {id:'Steph',name:'Stephanie' , age:26}
    ],

Also, we will add in render this id of person

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
                                  click={ () => this.deletePersonHandler(index) } />
          })
      }

Sec4-Lec58 ==>  Flexible Lists
------------------------------
we have an input textbox with onChange event . The goal is whatever we type in the textbox , the same should appear in Person Component name.

In Person_Prop.js ,we have
<input type="text" onChange={props.changed} value={props.name} />

In App.js , we will add this property "changed"
----------------------------------------------

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


In App.js, we will write function nameCHangedHandler as below:
--------------------------------------------------------------

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

This will work 



