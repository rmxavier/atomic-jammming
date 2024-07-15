import './ActionButtonA.css';

function ActionButton({onClick, type, children }) {

  return (
    <button onClick={onClick} className={ `actionButton ${type}` }>{ children }</button>
  );
}

export default ActionButton;