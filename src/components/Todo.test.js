import React, { useState } from "react";
import renderer from 'react-test-renderer';
import Todo from './Todo';

test('Todo snapshot test', () => {
    const component = renderer.create(<Todo />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});