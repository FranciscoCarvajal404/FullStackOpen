const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}  

const App = () => {
  const course = 'Half Stack application development'


  return (
    <>
      <Header course={course}/>
    </>
  )
}

export default App