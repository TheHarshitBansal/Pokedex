import { Link } from 'react-router-dom';
import './Pokemon.css'

function Pokemon({name, image, id}) {
  return (
    <Link className="pokemon Link" to={`/${id}`}>
      <div>
        <img className='pokemonImage' src={image} alt={name} />
      </div>
      <h4 className='pokemonName'>{name}</h4>
    </Link>
  );
}

export default Pokemon;
