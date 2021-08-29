import React from 'react';
import './App.css';
/* -----
import './appStyles.css';
import styles from './appStyles.module.css';
import FunctionClick from './Components/EventHandle/FunctionClick';
import ClassClick from './Components/EventHandle/ClassClick';
import Counter from './Components/Counter';
import EventBind from './Components/EventBind';
import UserGreetings from './Components/UserGreetings';
import NameList from './Components/RerenderComp/NameList';
import StyleSheets from './Components/BasicCSS/StyleSheets';
import ParentComponent from './Components/ArgumentPass/ParentComponent';
import Form from './Components/Form';
import LifecycleA from './Components/CompLifecycle/LifecycleA';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/ReactFragment/Table';
import ParentComp from './Components/PureComponent/ParentComp';
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/CompRef/FocusInput';
import FRParentInput from './Components/ForwardRef/FRParentInput';
import PortalDemo from './Components/Portal/PortalDemo';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import Hero from './Components/ErrorBoundary/Hero';
import ClickCounter from './Components/HigherOrderComp/ClickCounter';
import HoverCounter from './Components/HigherOrderComp/HoverCounter';
import User from './Components/RenderProps/User';
import ClickCounterTwo from './Components/RenderProps/ClickCounterTwo';
import HoverCounterTwo from './Components/RenderProps/HoverCounterTwo';
import CounterTwo from './Components/RenderProps/CounterTwo';
----- */
import ComponentA from './Components/ContextAPI/ComponentA';
import { Provider } from './Components/ContextAPI/userContext';

const App = () => {
   return (
      <div className="App">
         {/* <FunctionClick /> */}
         {/* <ClassClick /> */}
         {/* <Counter /> */}
         {/* <EventBind /> */}
         {/* <UserGreetings /> */}
         {/* <NameList /> */}
         {/* <StyleSheets aStyle={true} /> */}
         {/* <ParentComponent /> */}
         {/* <h2 className="error">Error</h2> */}
         {/* <h2 className={styles.success}>Success</h2> */}
         {/* <Form /> */}
         {/* <LifecycleA /> */}
         {/* <FragmentDemo /> */}
         {/* <Table /> */}
         {/* <ParentComp /> */}
         {/* <RefsDemo /> */}
         {/* <FocusInput /> */}
         {/* <FRParentInput /> */}
         {/* <PortalDemo /> */}
         {/* <ErrorBoundary><Hero heroName='Superman' /></ErrorBoundary> */}
         {/* <ErrorBoundary><Hero heroName='Batman' /></ErrorBoundary> */}
         {/* <ErrorBoundary><Hero heroName='Jokar' /></ErrorBoundary> */}
         {/* <ClickCounter name='Tanvir' /> */}
         {/* <HoverCounter /> */}
         {/* <User render={(isLoggedIn) => isLoggedIn ? 'Tanvir Rahman' : 'Guest'} /> */}
         {/* <CounterTwo>
            {(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount} />}
         </CounterTwo> */}
         {/* <CounterTwo>
            {(count, incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount} />}
         </CounterTwo> */}
         <Provider value="Hello from ComponentA">
            <ComponentA />
         </Provider>
      </div>
   );
}

export default App;