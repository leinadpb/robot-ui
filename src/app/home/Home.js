import React from 'react';

const Home = ({ user }) => {
  return <div style={{ color: 'white' }}>{!!user ? `Hey ${user.username}! This page is not ready yet.` : ' This page is not ready yet.'}</div>;
};

export default Home;
