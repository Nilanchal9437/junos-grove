'use client';

import React from 'react';
import NavigationButtons from '@/feature/home/NavigationButtons';
import MainContent from '@/feature/home/MainContent';
import Container from '@/components/Container';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[url('/Juno-home.jpg')] bg-[80%_100%] bg-center no-repeat object-cover">
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      <Container>
        <NavigationButtons />
        <MainContent />
      </Container>
    </main>
  );
}
