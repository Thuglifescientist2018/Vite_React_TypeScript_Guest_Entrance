

const Card = ({person}: {person:any}) => {
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