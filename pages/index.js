import React from 'react';
import SectionNewsList from '../components/Home/SectionNewsList';
import { NewsStoreProvider } from '../stores/newsStore';
import Box from '../components/Atoms/Box';

function Home() {
  return (
    <SectionNewsList />
  );
}

export default Home;
