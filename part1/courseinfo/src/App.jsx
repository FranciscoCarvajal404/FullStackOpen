const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}  

const Content = () =>{
  return(
    <>
      <p>Fundamentals of React 10</p>
    </>
  )
}

const Props = () =>{
  return(
    <>
      <p>Using props to pass data 7</p>
    </>
  )
}

const State = () =>{
  return(
    <>
      <p>State of a component 14</p>
    </>
  )
}

const Total = ({total}) =>{
  return(
    <>
      <p>Number of excersices: {total}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'


  return (
    <>
      <Header course={course}/>
      <Content/>
      <Props/>
      <State/>
      <Total total={30} />
    </>
  )
}

export default App