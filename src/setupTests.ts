// src/setupTests.js
// eslint-disable-next-line import/no-extraneous-dependencies
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
