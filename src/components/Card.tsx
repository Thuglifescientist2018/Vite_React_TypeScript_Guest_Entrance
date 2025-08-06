import type { Person } from "../interfaces"
interface CardProps {
  person: Person
}
const Card:React.FC<CardProps> = ({person}) => {
  return (
    <li>
          <img src={person.picture.large} alt="Person's profile picture" />
          <h4>

          {person.name.first}
          </h4>
        </li>
  )
}

export default Card