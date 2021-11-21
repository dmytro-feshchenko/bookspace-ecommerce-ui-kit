import React from 'react';
import { Button } from './button';

export const DefaultButton = () => (
  <Button>Default button</Button>
);

export const TextButton = () => (
  <Button variant="text">Text button</Button>
);

export const OutlinedButton = () => (
  <Button variant="outlined">Outlined button</Button>
);