import React from 'react';
import { render } from 'react-dom';

import Todos from './todos';

render(
  <Todos />,
  console.log("rendered");
  document.getElementById('app');
);
