import React from 'react';

const userContext = React.createContext('Hello from App');

const Provider = userContext.Provider,
   Comsumer = userContext.Consumer;

export { Provider, Comsumer };
export default userContext;