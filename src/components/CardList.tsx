
import Card from "./Card"
import type { Person } from "../interfaces"
interface CardListProps {
  filteredPeople: Person[]
}
const CardList: React.FC<CardListProps> = ({filteredPeople}) => {
  return (
    <div>
        {filteredPeople.length && filteredPeople.map((person:any) => (
            <Card person={person} />
      ))}
    </div>
  )
}

export default CardList