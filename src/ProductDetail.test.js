import React from "react";
import ReactDOM from 'react-dom'
import {cleanup} from '@testing-library/react'
import ProductDetail from "./ProductDetail";
import renderer from "react-test-renderer"



//jest.mock("./utils/api");
afterEach(cleanup)
it('renders ProductDetail without crashing', () => {   
  const div = document.createElement('div');
  ReactDOM.render(<ProductDetail/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Matches snapshot",()=>{
   

    const tree = renderer
    .create(<ProductDetail productId={1} />)
    .toJSON();
  expect(tree).toMatchSnapshot();

}) 

