import { useSelector } from 'react-redux';

const FactText = () => {
  const fact = useSelector((state) => state.fact);
  return <div className='joke'>{fact}</div>;
};

export default FactText;
