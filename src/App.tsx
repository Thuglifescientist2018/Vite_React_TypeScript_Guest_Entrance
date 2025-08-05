



import { useEffect, useState } from 'react'
import './App.css'

function App() {
  interface Person {
    name: {
      first: string
    },
    picture: {
      large: string
    }
  }
  const [people, setPeople] = useState<Person[]>([]);
  const [searchField, setSearchField] = useState<string>('')
  const getPeople = async():Promise<Person[]> => {
    const response = await fetch("https://randomuser.me/api/?results=5");
    const data: {results: Person[] } = await response.json();
    const people:Person[]  = data.results;
    return people;
  }
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(event.target.value)
  }
  const filterPeople = (people: Person[], searchField:string): Person[] => {
    const filteredPeople:Person[] = people.filter((person: Person) => person.name.first.toLowerCase().includes(searchField.toLowerCase()));
    return filteredPeople
  }
  const filteredPeople = filterPeople(people, searchField)
  useEffect(() => {
    getPeople().then(people => setPeople(people))
  },[])
  return (
    <>
    <button onClick={() =>     getPeople().then(people => setPeople(people)) }>Refresh</button>
      <h1>Guest Entrance </h1>
      <input type="text" placeholder='search guests' onChange={onSearchChange} />
    
      {filteredPeople.length && filteredPeople.map((person:Person) => (
        <li>
          <img src={person.picture.large} alt="Person's profile picture" />
          <h4>

          {person.name.first}
          </h4>
        </li>
      ))}
    </>
  )
}

export default App
