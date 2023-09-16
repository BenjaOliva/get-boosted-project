import React from 'react';
import { HomeProps } from './interfaces';
import { useHomeController } from './home.controller';
import Hero from './Sections/hero';
import Features from './Sections/features';
import Spotlight from './Sections/spotlight';
import Integrations from './Sections/integrations';
import CallToAction from './Sections/call-to-action';
import AboutUs from './Sections/aboutus';

export const Home: React.FC<HomeProps> = ({
  useController = useHomeController,
}) => {
  const controller = useController();

  return (
    <>
      <Hero />
      <Features />
      <Spotlight />
      <Integrations />
      <AboutUs />
      <CallToAction />
    </>
  );
};
