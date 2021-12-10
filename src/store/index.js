import {configureStore} from '@reduxjs/toolkit';
import counter from 'components/Counter/counterSlice';

export default configureStore({
  reducer: {
    counter
  }
});
