'use client';

import React from 'react';
import NavigationButtons from '@/components/NavigationButtons';
import MainContent from '@/components/MainContent';
import Container from '@/components/Container';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[url('/Juno-home.jpg')] bg-[80%_100%] bg-center no-repeat">
      <Container>
        <NavigationButtons />
        <MainContent />
      </Container>
    </main>
  );
}
