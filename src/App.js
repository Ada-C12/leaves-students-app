import React from 'react';
import './App.css';
import StudentCollection from './components/StudentCollection'
//import NameDisplay from './components/NameDisplay'
//import NewStudentForm from './components/NewStudentForm'

//function App() {
class App extends React.Component {
  //class App extends Component{
  constructor() {
    super()
    this.students = [{ name: 'Devin', email: 'dmoney@gmail', class: 'Leaves', present: true },
    { name: 'Becca', email: 'bmoney@gmail', class: 'Leaves', present: true },
    { name: 'Dee', email: 'dee@dee.dee', class: 'Branches', present: false },
    { name: 'Jared', email: 'jared@not-jarred.biz', class: 'Branches', present: true },
    { name: 'Tonks', email: 'tonks@bogus.bogus', present: false }]
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <StudentCollection people={this.students} />
        </header>
      </div>
    );
  }
}

export default App;
