import PropTypes from 'prop-types';


function Sentence(props) {
    return <li>I am a { props.name }</li>;
}

Sentence.propTypes = {
    name: PropTypes.string.isRequired, // Define the type and make it required
  };

export default function List() {
    const listName = [
        {id: 1, name:'CSS'},
        {id: 2, name:'HTML'},
        {id: 3, name:'JS'},
        ];
    return (
    <div>
        <h1>
          <ul>
            {listName.map((listName) => <Sentence key={listName.id} name={listName.name} />)}
          </ul>
        </h1>
    </div>
  )
}
