export default App;

function App() { 
  return( 
    <div> 
      <h1 style={{ color: 'red' }}>welcome to react js</h1> 
      <Name/>
      <Home/> 
      <About/> 
      <Home/> 
      <About/>
      <Contact/>
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