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
    </div> 
  ) 
} 

function Home() { 
  return( 
    <h2>my homepage</h2> 
  ) 
} 

function About() { 
  return( 
    <h2>my about page</h2> 
  ) 
} 

function Contact() { 
  return( 
    <h2>my contact page</h2> 
  ) 
}

function Name() {
  return(
    <h2>2500030060 RSK</h2>
  )
}

function Student(props) {
  return(
    <>
    <h1>PROPS DEMO</h1>
    <h2 style={{ color: 'turquoise' }}>student profile</h2>
    <p>Name: {props.name}</p>
    <p>Age: {props.age}</p>
    <p>Marks: {props.marks}</p>
    </>
  )
}