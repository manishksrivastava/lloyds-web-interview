import React from "react";
import ReactDOM from 'react-dom'
import {render, cleanup} from '@testing-library/react'
import App from "./App";
//jest.mock("./utils/api");
afterEach(cleanup)
it('renders App comopnent without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

