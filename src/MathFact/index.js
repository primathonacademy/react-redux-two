import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Action from '../store/action';
import FactText from '../FactText';
import './style.css';

const MathFact = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: Action.FETCH_FACT });
  }, []);

  const onGetAnotherFact = () => {
    dispatch({ type: Action.FETCH_FACT });
  };

  return (
    <div className='container'>
      <h3>Number Fact Challenge</h3>
      <FactText />
      <button className='btn' onClick={onGetAnotherFact}>
        Get Another Fact
      </button>
    </div>
  );
};

export default MathFact;
