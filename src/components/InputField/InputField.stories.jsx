import { storiesOf } from '@storybook/react';
import React from 'react';
import InputField from './InputField';

storiesOf('InputField', module).add('Input Field', () => (
  <InputField label={'Name'} />
));
