import React from "react";
import CustomNav from "../CostumNav";
import { userData } from "../../helpers";

const Home = () => {
  const { username } = userData();

  return (
    <div style={styles.container}>
      <CustomNav style={styles.nav} />
      <div style={styles.content}>
        <h2 style={styles.title}>Welcome {username} to CHA Dictionary</h2>
        <p style={styles.description}>
          The CHA Dictionary is an online platform that provides a comprehensive collection of definitions for various words and phrases. It is designed to help you easily find the meanings and explanations of terms you encounter in your reading or everyday life.
        </p>
        <p style={styles.description}>
          Use the search functionality or browse through different categories to explore the extensive database of definitions. Whether you're a student, professional, or simply curious about language and words, the CHA Dictionary is here to assist you in expanding your knowledge and understanding.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
  },
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "800px",
    padding: "2rem",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    marginTop: "5rem",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "1rem",
    textAlign: "center",
  },
  description: {
    fontSize: "1.5rem",
    color: "#666",
    marginBottom: "2rem",
    textAlign: "center",
  },
};

export default Home;