import React from 'react';
import CostumNav from '../Component/CostumNav';
import DefinitionSearch from './DefinitionSearch';

const Home = () => {
  return (
    <div style={styles.container}>
      <CostumNav style={styles.nav} />
      <div style={styles.box}>
        <h1 style={styles.title}>Welcome to CHA Dictionary</h1>
        <DefinitionSearch style={styles.search} />
      </div>
    </div>
  );
};

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
    },
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#333',
    },
    box: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      backgroundColor: '#fff',
      borderRadius: '1rem',
      boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
      marginTop: '5rem',
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '1rem',
    },
    subtitle: {
      fontSize: '1.5rem',
      color: '#666',
      marginBottom: '2rem',
    },
    search: {
      marginTop: '2rem',
      width: '100%',
      maxWidth: '600px',
      borderRadius: '1rem',
      boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
    },
  };
  
  export default Home;