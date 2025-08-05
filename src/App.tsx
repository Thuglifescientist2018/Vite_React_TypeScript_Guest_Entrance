



import { useEffect, useState } from 'react'
import './App.css'

function App() {
  interface Person {
    name: {
      first: string
    }
  }
  const [people, setPeople] = useState<Person[]>([]);
  const getPeople = async():Promise<Person[]> => {
    const response = await fetch("https://randomuser.me/api/?results=5");
    const data: {results: Person[] } = await response.json();
    const people:Person[]  = data.results;
    return people;
  }
  useEffect(() => {
    getPeople().then(people => setPeople(people))
  },[])
  return (
    <>
    <button onClick={() =>     getPeople().then(people => setPeople(people)) }>Refresh</button>
      <h1>Guest Entrance </h1>
      {people.length && people.map(person => (
        <li>
          {person.name.first}
        </li>
      ))}
    </>
  )
}

export default App
