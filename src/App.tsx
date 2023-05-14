import './App.css'
import { Button } from './components/Button'
import Container from './components/Container'
import Greet from './components/Greet'
import Heading from './components/Heading'
import Input from './components/Input'
import Oscar from './components/Oscar'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'
import { ThemeContextProvider } from './components/context/ThemeContext'
import Box from './components/context/Box'
import Counter from './components/state/Counter'
//import { User } from './components/state/User'
import { UserContextProvider } from './components/context/UserContext'
import { User } from './components/context/User'
import DomRef from './components/ref/DomRef'
import MutableRef from './components/ref/MutableRef'
import { Private } from './components/auth/Private'
import { Profile } from './components/auth/Profile'
import { RandomNumber } from './components/RandomNumber'
import { Toast } from './components/templateliterals/Toast'
import { CustomButton } from './components/html/Button'
import { Text } from './components/polymorphic/Text'
//import List from './components/generics/List'

const personName = {
    first: 'Remo',
    last: 'Schär'
}

const pList = [
  {first: "Urs", last: 'Hammer'},
  {first: "Fabia", last: 'Schär'},
  {first: "Marius", last: 'Gisler'},

]

function App() {

  return (
    <>
     <Greet name="Remo" isLoggedIn={true}/>
     <Person name={personName}/>
     <PersonList names={pList} />
     <Status status='loading'/>
     <Heading>Hello From Heading</Heading>
     <Oscar><Heading>Hello From Heading within Oscar</Heading></Oscar>
     <Button handleClick={(event, id) => console.log("Hello From btn", event, id)}/>
     <Input value='' handleChange={(event) => console.log(event)}/>
     <Container styles={{border: '1px solid black', padding: '1rem'}}/>
     {/* <User/> */}
     <Counter/>
     <ThemeContextProvider>
      <Box/>
     </ThemeContextProvider>
     <UserContextProvider>
      <User/>
     </UserContextProvider>
     <DomRef/>
     <MutableRef/>
     <Private isLoggedIn={true} component={Profile}/>
     {/* <List items={[{id: 0, name: 'Batman'}]} onClick={(item) => console.log(item)}/> */}

     <RandomNumber value={10} isPositive/>
     <Toast position='center'/>
     <CustomButton variant='primary' onClick={() => console.log('hello')}>Custom Btn</CustomButton>
     <Text as='h1' color='primary' size='sm'>Hello</Text>
    

  
     
    </>
  )
}

export default App
