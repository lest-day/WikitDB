import React from 'react';
import Head from 'next/head';
const config = require('../wikitdb.config.js');

const Home = () => {
  return (
    <>
      <Head>
          <title>{`主页 - ${config.SITE_NAME}`}</title>
      </Head>
    </>
  );
};

export default Home;