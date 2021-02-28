import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Congrats from './Congrats';
import { findByTestAttr } from '../test/testUtils';

Enzyme.configure({ adapter: new Adapter() });

const setup = (props={})=>{
    return shallow(<Congrats {...props}/>);
}

test('renders withou error', ()=>{
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
})
test('renders no text when "sucess" props is false', ()=>{
    const wrapper = setup({sucess: false});
    const component = findByTestAttr(wrapper, 'component-congrats');

    expect(component.text()).toBe('');
});
test('renders no-empty congrats when message "sucess"',()=>{
    const wrapper = setup({sucess: true});
    const message = findByTestAttr(wrapper, 'congrats-message');

    expect(message.text().length).not.toBe(0);
})

