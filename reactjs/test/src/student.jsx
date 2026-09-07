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

export default Student;