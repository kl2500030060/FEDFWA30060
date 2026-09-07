import {Student} from './student.jsx';
import {Home} from './home.jsx';
import {About} from './about.jsx';
import {Contact} from './contact.jsx';
import {Name} from './name.jsx';
export default App;

function App() { 
  let sname = "KR";
  let sage = "20";
  let smarks = "90";
  return( 
    <div> 
      <h1 style={{ color: 'red' }}>welcome to react js</h1> 
      <Name/>
      <Home/> 
      <About/> 
      <Home/> 
      <About/>
      <Contact/>
      <Student name={sname} age={sage} marks={smarks}/>
      <h1 style={{ color: 'green' }}>state demo</h1>
    </div> 
  ) 
} 