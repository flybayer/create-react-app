import React from 'react';
import ReactDOM from 'react-dom';
import PopupApp from './PopupApp';

it('PopupApp renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PopupApp />, div);
});

