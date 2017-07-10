import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import SparkleApp from './components/SparkleApp';
import { initWithSequentialAudio } from './components/SparkleApp/initialize';

export default function() {
  return (
    <Slide>
      <Title>remove sequential blocking code</Title>
      <SparkleApp initResources={ initWithSequentialAudio } />
    </Slide>);
}
