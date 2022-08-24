export const fetchMathApi = () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  // Please read about fetch ..........
  return fetch('http://numbersapi.com/random/math', config).then((res) =>
    res.text()
  );
};
