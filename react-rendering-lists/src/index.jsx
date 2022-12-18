import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function RenderUL(props) {
  const pokes = props.pokedex;
  const list = pokes.map(poke => {
    return (
      <li key={poke.number}>{poke.name}</li>
    );
  });
  return (
    <ul>
      {list}
    </ul>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RenderUL pokedex={pokedex}/>);
