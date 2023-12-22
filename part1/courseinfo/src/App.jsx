const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}  

const Part = (props) =>{
  return(
    <p>{props.text} {props.number}</p>
  )
}

const Content = () =>{
  return(
    <>
      <Part text={'Fundamentals of React'} number={10}/>
      <Part text={'Using props to pass data'} number={7}/>
      <Part text={'State of a component'} number={14}/>
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
      <Total total={30} />
    </>
  )
}

export default App