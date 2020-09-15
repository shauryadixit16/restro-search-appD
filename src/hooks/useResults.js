import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, Setresults] = useState([]);
  const [error, Seterror] = useState('');
  const search = async (serachterm) => {
    try {
      const res = await yelp.get('/search', {
        params: {
          limit: 50,
          term: serachterm,
          location: 'san jose',
        },
      });
      Setresults(res.data.businesses);
    } catch (err) {
      console.log(err);
      Seterror('Something went wrong');
    }
  };
  useEffect(() => {
    search('pasta');
  }, []);

  return [search, results, error];
};
