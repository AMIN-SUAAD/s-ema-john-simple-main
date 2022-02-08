import React from 'react';
import Info from '../Info';

import {render} from '@testing-library/react';

it("renders Info correctly", () => {
    const {getByTestId} = render(<Info></Info>)
    expect(getByTestId('info')).toHaveStyle('margin-left: 100px')
})