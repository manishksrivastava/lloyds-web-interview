import React from "react";
import ReactDOM from 'react-dom'
import {cleanup} from '@testing-library/react'
import Autocomplete from "./Autocomplete";
import renderer from "react-test-renderer"



//jest.mock("./utils/api");
afterEach(cleanup)
it('renders Autocomplete without crashing', () => {   
  const div = document.createElement('div');
  ReactDOM.render(<Autocomplete />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Matches snapshot",()=>{
   

    const tree = renderer
    .create(<Autocomplete/>)
    .toJSON();
  expect(tree).toMatchSnapshot();

})
