import { useHistory } from 'react-router-dom';
import { defaultMethod } from 'react-router-dom/dist/dom';

function redirect() {
  const history = useHistory();

  function handleClick() {
    history.push('/new-route');
  }

  return (
    <button onClick={handleClick}>Go to new route</button>
  );
}
export default redirect;