// import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers'
import React, { createContext, useContext} from 'react';
import { Provider } from 'react-redux';

// Import Redux store from the file we created in /utils
import store from './store';

const StoreContext = createContext();

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer();

  return <Provider store={store} value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
