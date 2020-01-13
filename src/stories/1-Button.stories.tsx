import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import '../testFails.css';

export const Text = () => <div className="testClass"/>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎
    </span>
  </Button>
);

export default {
    title: 'Button',
    component: Button,
};
