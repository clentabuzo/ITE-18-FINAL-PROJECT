import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import NotFound from './NotFound';
import DefinitionSearch from './DefinitionSearch';
import CostumNav from '../Component/CostumNav';

export default function Definition() {
  const [word, setWord] = useState([]); // State variable to store the word definition
  const [notFound, setNotFound] = useState(false); // State variable to track if word is not found
  const [error, setError] = useState(false); // State variable to track if there's an error
  let { search } = useParams(); // Accessing the search parameter from the URL
  const navigate = useNavigate(); // Hook for programmatic navigation

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`; // API URL to fetch word definition
        const response = await fetch(url); // Fetch the data from the API
        if (response.status === 404) {
          setNotFound(true); // Word not found, set notFound state to true
        } else if (response.status === 401) {
          navigate('/login'); // Unauthorized access, navigate to login page
        } else if (response.status === 500) {
          // setServerError(true);
        }
        if (!response.ok) {
          setError(true); // Error occurred, set error state to true
          throw new Error('Something went wrong');
        }
        const data = await response.json(); // Parse the response data
        setWord(data[0]?.meanings || []); // Store the word definition in the state variable
        console.log(data[0]?.meanings);
      } catch (error) {
        console.log(error.message); // Log any error that occurs during the API call
      }
    };
    fetchData();
  }, [search]);

  if (notFound === true) {
    return (
      <div style={styles}>
        <NotFound />
        <Link to="/dictionary" style={{ textDecoration: 'none', marginTop: '2rem' }}>
          <p style={{ color: '#333' }}>Search another</p>
        </Link>
      </div>
    );
  }

  if (error === true) {
    return (
      <div style={styles}>
        <p style={{ color: '#333', marginBottom: '2rem' }}>
          Something went wrong, please try again.
        </p>
        <Link to="/dictionary" style={{ textDecoration: 'none' }}>
          <p style={{ color: '#333' }}>Search another</p>
        </Link>
      </div>
    );
  }

  return (
    <div style={styles}>
      <CostumNav />
      <div style={{ maxWidth: '800px', width: '100%' }}>
        {word.length > 0 ? (
          <>
            <h1 style={{ fontSize: '3rem', color: '#333', marginBottom: '2rem' }}>
              Here is a definition
            </h1>
            {word.map((meaning) => (
              <p
                key={uuidv4()}
                style={{ fontSize: '1.5rem', color: '#666', marginBottom: '1rem' }}
              >
                {meaning.partOfSpeech + ': '}
                {meaning.definitions[0].definition}
              </p>
            ))}
            <p style={{ fontSize: '1.5rem', color: '#666', marginTop: '2rem' }}>
              Search again:
            </p>
            <DefinitionSearch />
          </>
        ) : null}
      </div>
    </div>
  );
}

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#f5f5f5',
  padding: '2rem',
  flexDirection: 'column',
};
