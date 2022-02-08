import React from 'react';
import Inventory from '../Inventory';

import renderer from "react-test-renderer";

it("matches snapshot", () => {
    const tree = renderer.create(<Inventory></Inventory>).toJSON();
    expect(tree).toMatchSnapshot();
})