// ************************************ [ usestate ] [counter ]**********************************************************
// import React, {useState} from 'react'

// function App() {
//   const [num, setnum] = useState(0)

//   const incrementNum =()=>{
//       setnum(num + 1 )

//   }
//   return (
//     <div>
//       <button onClick={incrementNum}>{num}</button>
//     </div>
//   )
// }

// export default App

// ************************************ [ useeffect ] [counter ]**********************************************************
// import React, { useState, useEffect } from "react";
// import "./AppPractice.css";

// function AppPractice() {
//   const [number, setnumber] = useState(0);

//    useEffect(() => {

//     document.title= `you clicked for  ${number}  times`
//    }, [number])

//   const increment = () => {
//     setnumber(number + 1);
//   };

//   return (
//     <>
//       <button onClick={increment}> {number} </button>

//     </>
//   );
// }

// export default AppPractice;

//************************[add 1 after every one second ]*********************************
// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setCount((oldcount) => oldcount + 1);
//     }, 1000);

//     return () => {
//       clearInterval(id);
//     };
//   }, []);
//   return (
//     <>
//       <h1>{count}</h1>
//     </>
//   );
// };

// export default App;

//***************************************[Counter - class based components]*************************************************/
// import React, { Component } from 'react';
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
//   addCounter = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   substractCounter = () => {
//     this.setState({ count: this.state.count - 1 });
//   };
//   resetCounter = () => {
//     this.setState({ count: 0 });
//   };
//   render() {
//     return (
//       <>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.addCounter}>Plus</button>
//         <button onClick={this.substractCounter}>minus</button>
//         <button onClick={this.resetCounter}>Reset</button>
//       </>
//     );
//   }
// }
// export default App;

//**********************************[unmounting with useeffect] [small program]************************************

// import React, { useState, useEffect } from 'react';

// function App() {
//   const [name, setName] = useState(true);

//   useEffect(() => {
//     setName('shubham');
//     //component unmounting using return cleanup function in useEffect
//     return () => {
//       removeName(name);
//     };
//   }, []);
//   return (
//     <div>
//       <h2>{name ? 'shubham' : null}</h2>
//       <button onClick={() => setName(!name)}>{name ? 'hide name' : 'show name'}</button>
//     </div>
//   );
// }
// export default App;

//**********************************[unmounting with useeffect] [big program]************************************
// // //---------[componentwillunmount using useEffect]----------------
// //-----------[App.js]----------
// import React from "react";
// import Clock from "./Clock";

// function App() {
//   return (
//     <div>
//       <Clock />
//     </div>
//   );
// }
// export default App;

// //------------[Timer.js]-------------
// import React, { useState, useEffect } from "react";

// function Timer() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     //component unmounting using return cleanup function in useEffect
//     return () => {
//       clearInterval(interval);
//       console.log("interval is cleared");
//     };
//   }, []);
//   return (
//     <div>
//       <h2>{time.toLocaleTimeString()}</h2>
//     </div>
//   );
// }
// export default Timer;

// //-------------[clock.js]----------------
// import React, { useState } from "react";
// import Timer from "./Timer";

// function Clock() {
//   const [showtimer, setShowtimer] = useState(true);
//   return (
//     <div>
//       {showtimer ? <Timer /> : null}
//       <button onClick={() => setShowtimer(!showtimer)}>
//         {showtimer ? "Hide" : "show"}
//       </button>
//     </div>
//   );
// }
// export default Clock;

// *********************************[ usestate array ]***********************************************************

// import React, { useState } from "react";
// import "./AppPractice.css";
// const AppUseStateArray = () => {
//   const biodata = [
//     {
//       id: 0,
//       myName: "ajinkya",
//       age: 28,
//     },
//     {
//       id: 1,
//       myName: "monika",
//       age: 25,
//     },
//     {
//       id: 2,
//       myName: "pratik",
//       age: 29,
//     },
//   ];

//   const [myArray, setmyArray] = useState(biodata);

//   const clearArray = () => {
//     setmyArray([]);
//   };
//   return (
//     <>
//       {myArray.map((abc) => (
//         <h1 className="myStyle" key={abc.id}>
//           name:{abc.myName} & age: {abc.age}
//         </h1>
//       ))}
//       <button onClick={clearArray}>clear</button>
//     </>
//   );
// };

// export default AppUseStateArray;

// ************************************* [usestate object ]********************************************************

// import React, { useState } from "react";
// import "./AppPractice.css";
// function AppUsestateObject() {
//   const [myObject, setmyObject] = useState({
//     // first set data
//     myName: "ajinkya",
//     myAge: 28,
//     degree: "BE",
//   });

//   const changeObject = () => {
//     setmyObject({ ...myObject, myName: "shubham" }); // used spread opear to take prev. data as it is n thn chnge which data we want to chng
//   };

//   return (
//     <div>
//       <h1 className="myStyle">

//         Name: {myObject.myName} & age: {myObject.myAge} & degree:{myObject.degree}
//       </h1>
//       <button onClick={changeObject}>update</button>
//     </div>
//   );
// }

// export default AppUsestateObject;

//**************************** [ useeffect cleanup function] ***************************************************** */
// import React, { useState, useEffect } from "react";

// function AppUseEffectCleanUp() {
//   const [widthcount, setwidthcount] = useState(window.screen.width);
//   const actualwidth = () => {
//     console.log(window.innerWidth);
//     setwidthcount(window.innerWidth);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", actualwidth);
//     return () => {
//       window.removeEventListener("resize", actualwidth);
//     };
//   });

//   return (
//     <div>
//       <p>the size of ur window is :</p>
//       <h1>{widthcount} px</h1>
//     </div>
//   );
// }

// export default AppUseEffectCleanUp;

// *************************************** [useReducer ]*********************************************************
// import React, { useReducer } from "react";

// const initialState = 0;
// const reducer = (state, action) => {
//   // console.log(state, action);
//   if (action.type === "INCREMENT") {
//     return state + 1;
//   }

//   if (action.type === "DECREMENT") {
//     return state - 1;
//   }
// };

// function AppReducer() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       <p>{state}</p>
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>Inc</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>Dec</button>
//     </>
//   );
// }

// export default AppReducer;

// **************************************[ useref 2]*[shubham ]******************************************************

// // Useref hook is used in uncontrolled forms
// import React, { useRef, useState } from "react";
// import { FcApproval } from "react-icons/fc";

// const Uncontrolled = () => {
//   //it is like a usestate only and its peserve (kisi chij ko hold karke rakhana) the value.
//   //useref component ko wapis se rerender nahi karta
//   const luckyName = useRef(null); //input field ko ref karne ke liye luckyname se ref kiya
//   const [show, setShow] = useState(false);

//   const submitForm = (e) => {
//     e.preventDefault(); //form automatic submit na ho isliye
//     console.log(luckyName.current.value);
//     const name = luckyName.current.value;
//     name === "" ? alert("please fill the data") : setShow(true);
//   };

//   return (
//     <>
//       <form action="" onSubmit={submitForm}>
//         <div>
//           <label htmlFor="luckyname">Enter your luckyname here</label>
//           <br />
//           <input type="text" id="luckyname" ref={luckyName} />
//         </div>
//         <br />
//         <button>Submit</button> <FcApproval />
//       </form>
//       <p>{show ? `your lucky name is ${luckyName.current.value}` : ""}</p>
//     </>
//   );
// };

// export default Uncontrolled;

// *************************************[useforward ref]* [parent]********************************************
// Forwardref hook
// import React, { useRef } from "react";
// import ChildApp from "./child";

// function ForwardrefApp() {
//   let inputRef = useRef(null);

//   function updateInput() {
//     inputRef.current.value = "1000";
//     inputRef.current.style.color = "red";
//     inputRef.current.focus();
//   }

//   return (
//     <div>
//       <h1>ForwardRef in react</h1>
//         <ChildApp ref={inputRef} />
//         <button onClick={updateInput}>Update inputBOx</button>
//     </div>
//   );
// }
// export default ForwardrefApp;

//---------------------------------[useforward ref]* [child]-----------------------------------------

// import React, { forwardRef } from "react";

// function ChildApp(props, ref) {
//   return (
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   );
// }
// export default forwardRef(ChildApp);

// *************************************[useforward ref]*[profiler]* [parent]********************************************

// Forwardref hook with Profiler
// import React, { useRef, Profiler } from "react";
// import ChildApp from "./child";

// function ForwardrefApp() {
//   let inputRef = useRef(null);

//   function updateInput() {
//     inputRef.current.value = "1000";
//     inputRef.current.style.color = "red";
//     inputRef.current.focus();
//   }
//   // callback funtion for profiler
//   function callbackfn(
//     id, // the "id" prop of the Profiler tree that has just committed
//     phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
//     actualDuration, // time spent rendering the committed update
//     baseDuration, // estimated time to render the entire subtree without memoization
//     startTime, // when React began rendering this update
//     commitTime, // when React committed this update
//     interactions
//   ) {
//     console.log(
//       id,
//       phase,
//       actualDuration,
//       baseDuration,
//       startTime,
//       commitTime,
//       interactions
//     );
//   }
//   return (
//     <div>
//       <h1>ForwardRef in react</h1>
//       <Profiler id="forwardrefhook" onRender={callbackfn}>
//         <ChildApp ref={inputRef} />
//       </Profiler>
//       <Profiler id="btn" onRender={callbackfn}>
//         <button onClick={updateInput}>Update inputBOx</button>
//       </Profiler>
//     </div>
//   );
// }
// export default ForwardrefApp;

// note :it is imported in index.js directly

// --------------------------------------------[useforward ref]*[profiler]* [child]--------------------------------------

// import React, { forwardRef } from "react";

// function ChildApp(props, ref) {
//   return (
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   );
// }
// export default forwardRef(ChildApp);

/*********************************[usememo]**[shubham]****************************************************** */
// import React, { useState, useMemo } from "react";
// import "./styles.css";

// function App() {
//   const [conterplus, setconterplus] = useState(0);
//   const [counterminus, setcounterminus] = useState(0);

//   function plusHandler() {
//     setconterplus(conterplus + 1);
//   }

//   function minusHandler() {
//     setcounterminus(counterminus - 1);
//   }

//   const countMemo = useMemo(
//     function mepnchng() {
//       return counterminus * 5;
//     },
//     [counterminus]
//   );
//   return (
//     <>
//       <div>{conterplus}</div>
//       <button onClick={plusHandler}> plus </button>
//       <div style={{ background: "yellow" }}>{countMemo}</div>
//       <div>{counterminus}</div>
//       <button onClick={minusHandler}> minus</button>
//     </>
//   );
// }
// export default App;

/////////////////////////////////////////[ usecallback ]//////////////////////////////////////////////////////////
// import React, { useState, useCallback } from 'react' // here we import callback
// import Count from './Count'
// import Button from './Button'
// import Title from './Title'

// function ParentComponent() {
// 	const [age, setAge] = useState(25)
// 	const [salary, setSalary] = useState(50000)

// 	const incrementAge = useCallback(() => {  // here we used callback
// 		setAge(age + 1)
// 	}, [age]) // here we add dependency on wich we want to re-render ths perticular component

// 	const incrementSalary = useCallback(() => {  // here we used callback
// 		setSalary(salary + 1000)
// 	}, [salary]) // here we add dependency on wich we want to re-render ths perticular component

// 	return (
// 		<div>
// 			<Title />
// 			<Count text="Age" count={age} />
// 			<Button handleClick={incrementAge}>Increment Age</Button>
// 			<Count text="Salary" count={salary} />
// 			<Button handleClick={incrementSalary}>Increment Salary</Button>
// 		</div>
// 	)
// }

// export default ParentComponent

//***********************[pure component][anil sindhu]**************************
// //-----App.js------
// import React from "react";
// import Counter from "./Counter";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 1,
//     };
//   }
//   render() {
//     return (
//       <div>
//         <Counter count={this.state.count} />
//         <button
//           onClick={() => {
//             this.setState({ count: this.state.count + 1 });
//           }}
//         >
//           Update count
//         </button>
//       </div>
//     );
//   }
// }
// export default App;

// //--------childcounter.js--------
// import React from "react";
// class Counter extends React.PureComponent{
// render(){
//   console.warn('counter re-render')
//   return(
//     <div>
//       <h1>Counter Component{this.props.count}</h1>
//     </div>
//   )
// }
// }
// export default Counter;

//******************************[lifting stateup ][anil sindhu]****************************************
// //--------App.js--------
// import React from "react";
// import User from "./User";
// function App() {
//   function getName(name) {
//     document.write(name);
//   }
//   return (
//     <div className="App">
//       <h1>Lifting State Up</h1>
//       <User getData={getName} />
//     </div>
//   );
// }
// export default App;

// //----------child comp = User.js--------
// function User(props)
// {
//     const name="Anil Sidhu"
//     return(
//         <div>
//             <h1>User Name is : </h1>
//             <button onClick={()=>props.getData(name)} >Click Me</button>
//         </div>
//     )
// }
// export default User;

//******************************[react basic form] [printing input data]*******************************
// import React, { useState } from 'react';

// function App() {
//   const [name, setName] = useState('');
//   const [passward, setPassward] = useState('');
//   const [allstate, setAllState] = useState('');
//   const handler = () => {
//     setAllState(() => {
//       return (
//         <>
//           <p>
//             {name} {passward}
//           </p>
//         </>
//       );
//     });
//   };

//   return (
//     <>
//       <form>
//         <input
//           type="text"
//           placeHolder="name"
//           onChange={(x) => setName(x.target.value)}
//         ></input>
//         <input
//           type="text"
//           placeHolder="passsward"
//           onChange={(x) => setPassward(x.target.value)}
//         ></input>
//         <h1>{allstate}</h1>
//         <button onClick={handler}>Submit</button>
//       </form>
//     </>
//   );
// }
// export default App;

//****************[react form ] [useref with focus and print values in console]**********************
// import React from "react";
// import ReactDOM from "react-dom";

// const Field = React.forwardRef(({ label, type }, ref) => {
//   return (
//     <div>
//       <label>{label}</label>
//       <input ref={ref} type={type} />
//     </div>
//   );
// });

// const Form = ({ onSubmit }) => {
//   const usernameRef = React.useRef();
//   const passwordRef = React.useRef();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       username: usernameRef.current.value,
//       password: passwordRef.current.value,
//     };
//     onSubmit(data);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <Field ref={usernameRef} label="Username:" type="text" /> <br />
//       <Field ref={passwordRef} label="Password:" type="password" /> <br />
//       <div>
//         <button type="submit">Submit</button>
//       </div>
//     </form>
//   );
// };

// // Usage example:

// const App = () => {
//   const handleSubmit = (data) => {
//     const json = JSON.stringify(data, null, 4);
//     console.clear();
//     console.log(json);
//   };
//   return (
//     <div>
//       <Form onSubmit={handleSubmit} />
//     </div>
//   );
// };

// export default App;

// *************************************[ basic form ][by thapa]****************************************************************

// import React, { useState } from "react";
// import "./AppPractice.css";

// function BasicForm() {
//   const [email, setemail] = useState(" ");
//   const [password, setpassword] = useState(" ");
//   const [allentry, setallentry] = useState([]);

//   const submitForm = (e) => {
//     e.preventDefault();

//     const newentryyy = {
//       // id: new Date().getTime().toString(),
//       email: email,
//       password: password,
//     };

//     setallentry([...allentry, newentryyy]);
//     setemail(" ");
//     setpassword(" ");
//   };

//   return (
//     <>
//       <form action="" onSubmit={submitForm}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="text"
//             name="email"
//             id="email"
//             autoComplete="off"
//             value={email}
//             placeholder="enter email id"
//             onChange={(e) => setemail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             autoComplete="off"
//             value={password}
//             placeholder="enter password"
//             onChange={(e) => setpassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>

//       <div>
//         {allentry.map((currElem) => {
//           return (
//             <div className="showDetails" key={currElem.id}>
//               <p>
//                 your email is <strong>{currElem.email}</strong> & password is
//                 <strong>{currElem.password}</strong>
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default BasicForm;

// **************************************[router ] [index.js ]************************************************************
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,

//   document.getElementById("root")
// );

//* ********************[ plain Router ]*****************************  */
//  <Switch>
//     <Route exact path="/" component={About} />
//     <Route exact path="/contact" component={Contact} />
//     <Route path="/contact/name" component={Name} />
//     <Route component={Error} />
//   </Switch>
//* **************************[ UseParamsHook ]***********************************************
//   <UseParamsHook />
//   <Switch>
//     <Route exact path="/" component={() => <About name="About" />} />
//     <Route
//       exact
//       path="/service"
//       render={() => <Service name="Service" />} //render method
//     />
//     <Route exact path="/contact" component={Contact} />
//     <Route path="/contact/Name" component={Name} />
//     <Route path="/User/:fname/:lname/:city" component={User} />
//     <Route component={Error} />
//   </Switch>
//* **************************[ useLocationHook ]*****************************************
/* #60. useLocationHook in React Router * */
//* <UseLocationHook />
//   <Switch>
//     <Route exact path="/" component={() => <About name="About" />} />
//     <Route
//       exact
//       path="/service"
//       render={() => <Service name="Service" />} //render method
//     />
//     <Route exact path="/contact" component={Contact} />
//     <Route path="/contact/Name" component={Name} />
//     <Route path="/locationuser/:fname/:lname" component={LocationUser} />
//     <Route component={Error} />
//   </Switch>
//* ***************************[ UseHistoryApp ]**************************************************************  */}
//   <UseHistoryApp />
//    <Switch>
//     <Route exact path="/" component={() => <About name="About" />} />
//     <Route
//       exact
//       path="/service"
//       render={() => <Service name="Service" />} //render method
//     />
//     <Route exact path="/contact" component={Contact} />
//     <Route path="/contact/Name" component={Name} />
//     <Route path="/historyuser/:fname/:lname" component={HistoryUser} />
//     <Route component={Error} />
//   </Switch>

//**********************************[ lazy loading ]**************************************************
// // *****************2. code splitting via import() method******************************************
// import Content from "./Content";
// class App extends React.Component {
//   render() {
//     import("./Math").then((Math) => {
//       console.log(
//         Math.add(20, 5) + " & " + Math.sub(10, 5) + " & " + Math.mult(20, 5)
//       );
//     });
//     return (
//       <>
//         <p>hi welcome to code splitting import method</p>;
//         <Content />
//       </>
//     );
//   }
// }
// export default App;

// // ----------------[ math.js] [child of above]-----------
// function add(a, b) {
//     return a + b;
//   }
//   function sub(a, b) {
//     return a - b;
//   }
//   function mult(a, b) {
//     return a - b;
//   }
//   export { add, sub, mult };

// //***************************** [ 3. code spilliting via React.lazy() loading method] ***************************

// import React, { Suspense } from "react";
// const Content = React.lazy(() => import("./Content"));
// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <p>hi welcome to code splitting import method</p>
//         <Suspense
//           fallback={<h1 style={{ color: "red" }}>Content is comming soon</h1>}
//         >
//           <Content />
//         </Suspense>
//       </>
//     );
//   }
// }
// export default App;

// // --------------------[ content component ] --------------------------------

// function Content() {
//     return (
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, placeat.
//         Qui maiores quaerat facere cumque beatae vel sint porro et nemo, id autem
//         il

//       </p>
//     );
//   }
//   export default Content;

//-************************************[ HOC ]*[higher order component]*************************************************************
import "./App.css";
import React, { useRef, useState } from "react";
function App() {
  return (
    <div className="App">
      <h1>HOC </h1>
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
      <HOCBlue cmp={Counter} />
    </div>
  );
}
function HOCRed(props) {
  return (
    <h2 style={{ backgroundColor: "red", width: 100 }}>
      Red
      <props.cmp />
    </h2>
  );
}
function HOCGreen(props) {
  return (
    <h2 style={{ backgroundColor: "green", width: 100 }}>
      Grren
      <props.cmp />
    </h2>
  );
}
function HOCBlue(props) {
  return (
    <h2 style={{ backgroundColor: "blue", width: 100 }}>
      blue <props.cmp />
    </h2>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}

export default App;

// ***********************************[ error boundries]********************************************************************

// Error Boundaries: Error Boundaries basically provide some sort of boundaries or checks on errors,
//  They are React components that are used to handle JavaScript errors in their child component tree.

// React components that catch JavaScript errors anywhere in their child component tree, log those errors,
//  and display a fallback UI. It catches errors during rendering, in lifecycle methods, etc.

// Reason to Use: Suppose there is an error in JavaScript inside component then it used to corrupt
// React’s internal state and cause it to emit cryptic errors. Error boundaries help in removing these errors and
// display a Fallback UI instead(Which means a display of an error that something broke in the code).

// Working Principle: Error Boundary works almost similar to catch in JavaScript. Suppose an error
//  is encountered then what happens is as soon as there is a broken JavaScript part in Rendering or
//  Lifecycle Methods, It tries to find the nearest Error Boundaries Tag.

// ---------------------------------------------------------------------------

// import {ErrorBoundary} from 'react-error-boundary'

// function ErrorFallback({error, resetErrorBoundary}) {
//   return (
//     <div role="alert">
//       <p>Something went wrong:</p>
//       <pre>{error.message}</pre>
//       <button onClick={resetErrorBoundary}>Try again</button>
//     </div>
//   )
// }

// const ui = (
//   <ErrorBoundary
//     FallbackComponent={ErrorFallback}
//     onReset={() => {
//       // reset the state of your app so the error doesn't happen again
//     }}
//   >
//     <ComponentThatMayError />
//   </ErrorBoundary>
// )

//***********************************[toggle]***************************/
// import React ,{useState}from 'react'

// function Toggle(){
//     const [abc, setabc] = useState(true)
//     return(
//      <div >

//          <h1>u are :{abc ? ' pass ' : ' fail '}</h1>
//          <button onClick={()=>setabc(!abc)}>click me to toggle</button>
//      </div>
//     )
// }
// export default Toggle;

//******************************** [change width of div ] [toggle]****************************/
// import "./styles.css";
// import React, { useState } from "react";
// export default function App() {
//   const [size, setSize] = useState(true);
//   const design = {
//     backgroundColor: "red",
//     height: "100px",
//     // width: size && "300px"
//     width: size ? "100px" : "300px"
//   };
//   return (
//     <>
//       <div className="App">
//         <h1>Hello CodeSandbox</h1>
//         <h2>Start editing to see some magic happen!</h2>
//         <div onClick={() => setSize(!size)} style={design}></div>
//       </div>
//     </>
//   );
// }

//*******************[fetch api get method]*************************
import React, { useEffect, useState } from "react";

const PersonList = () => {
  const [items, setitem] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setitem(json));
  }, []);

  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.id}
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default App;

//***********************[fetch api with set loading] [ajinkya]*************************/
// import React, { useState, useEffect } from "react";

// function App() {
//   const [state, setState] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchApii = () => {
//     setLoading(true);
//     return fetch("https://jsonplaceholder.typicode.com/users/")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setState(data);
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     fetchApii();
//   }, []);

//   if (loading) {
//     return <h1>bhau jara thamb</h1>;
//   }

//   return (
//     <ol>
//       {state.map((ele) => (
//         <li>{ele.email}</li>
//       ))}
//     </ol>
//   );
// }
// export default App;

//***************************[fetch api with lazy loading][mahesh]******************************
// //-------------[parent]---------------------
// // import Fetch from "./Fetch";
// import React, { Suspense } from "react";
// import "./styles.css";

// const Content = React.lazy(() => import("./Fetch"));

// export default function App() {
//   return (
//     <div className="App">
//       <Suspense fallback={<h1 style={{ color: "red" }}> C......cdcdc</h1>}>
//         <Content />
//       </Suspense>
//     </div>
//   );
// }

// //--------------[child]-----------------

// import React, { useState, useEffect } from "react";

// function Fetch() {
//   const [data, setData] = useState([]);

//   // const [load, setLoad] = useState(true);

//   useEffect(() => {
//     // setLoad(true);
//     fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
//       res.json().then((resp) => {
//         console.log(resp, "res");
//         setData(resp);
//         // setLoad(false);
//       });
//     });
//   }, []);
//   // if (load) {
//   //   return <h1 style = {{color:"red"}}>Loading.... </h1>;
//   // }
//   return (
//     <div>
//       <table border="1">
//         <tr>
//           <th>User Id</th>
//           <th>Name</th>
//           <th>Email</th>
//         </tr>
//         {data.map((item) => (
//           <tr>
//             <td>{item.id}</td>
//             <td>{item.name}</td>
//             <td>{item.email}</td>
//           </tr>
//         ))}
//       </table>
//     </div>
//   );
// }
// export default Fetch;

//***********************[fetch api axios call in react using async await and fetch] ********************
// import React, { useState, useEffect } from "react";
// // import axios from "axios";

// export default function App() {
//   const [posts, setPosts] = useState([]);
//   const fetchPost = async () => {
//     const response = await fetch("https://api.chucknorris.io/jokes/random");
//     const data = await response.json();
//     setPosts(data);
//   };

//   useEffect(() => {
//     fetchPost();
//   }, []);
//   return (
//     <div className="App">
//       <p> {posts.value} </p>
//       <button onClick={fetchPost}> get new joke </button>
//     </div>
//   );
// }

//************************ Fetch api get method call in react with axios ************************
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function App() {
//   const [posts, setPosts] = useState([]);
//   const fetchPost = async () => {
//     const response = await axios("https://api.chucknorris.io/jokes/random");

//     setPosts(response.data);
//   };

//   useEffect(() => {
//     fetchPost();
//   }, []);
//   return (
//     <div className="App">
//       <p> {posts.value} </p>
//       <button onClick={fetchPost}> get new joke </button>
//     </div>
//   );
// }

//*************************[ axios post method]**********************
// import axios from "axios";
// import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts";

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(${baseURL}/1).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function updatePost() {
//     axios
//       .put(${baseURL}/1, {
//         title: "Hello World!",
//         body: "This is an updated post."
//       })
//       .then((response) => {
//         setPost(response.data);
//       });
//   }

//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button onClick={updatePost}>Update Post</button>
//     </div>
//   );
// }
// export default App;

//****************************[passing props - shubham] ***********************************************
// //--------- parent comp ---------
// import "./App.css";
// import React from "react";
// import ChildApp from "./Child";

// function App() {
//   return (
//     <div className="App">
//       <ChildApp name={"Shubham"} surname={"Pandkar"} />
//     </div>
//   );
// }

// export default App;

// //--------child comp----------
// import React from "react";

// function ChildApp({ name, surname }) {
//   return (
//     <h1>
//       Hello My name is {name} surname is {surname}
//     </h1>
//   );
// }
// export default ChildApp;

//****************************[counter in react] [usestate] ***************************
// import React, { useState } from "react";

// function App() {
//   const [count, setcount] = useState(0);

//   function plushandler() {
//     setcount(count + 1);
//   }
//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={plushandler}>click here to plus</button>
//       <button onClick={() => setcount(count - 1)}>click here to minus</button>
//     </>
//   );
// }
// export default App;

//********************************[timer]*************************************

// import React, { useState, useEffect } from 'react';

// function App() {
//   const [sec, setSec] = useState(0);
//   const [minute, setMinute] = useState(0);

//   useEffect(() => {
//     var time = setInterval(() => {
//       setSec(sec + 1);
//       if (sec === 59) {
//         setMinute(minute + 1);
//         setSec(0);
//       }
//     }, 1000);
//     return () => {
//       clearInterval(time);
//     };
//   });
//   const Reset = () => {
//     setMinute(0);
//     setSec(0);
//   };

//   // const stop = () => {
//   // setSec()
//   // };
//   return (
//     <>
//       <h1>Timer</h1>
//       <h1>
//         {minute < 10 ? '0' + minute : minute}: {sec < 10 ? '0' + sec : sec}
//       </h1>
//       <button onClick={Reset}>Reset</button>
//       {/* <button onClick={stop}>Stop</button> */}
//     </>
//   );
// }
// export default App;

//************************[create ref]**************************
// import React, { Component } from 'react'

// export default class RefClass extends Component {
//     constructor(){
//         super()
//         this.inputRef=React.createRef()
//     }
//     componentDidMount(){
//         this.inputRef.current.focus()
//         console.log(this.inputRef)
//     }
//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.inputRef}></input>
//             </div>
//         )
//     }
// }

//*****************************[carousel]*******************************
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// const App = () => {
//   return (
//     <Carousel>
//       <div>
//         <img src="https://images.pexels.com/photos/5673835/pexels-photo-5673835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
//         <p className="legend">Legend 1</p>
//       </div>
//       <div>
//         <img src="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
//         <p className="legend">Legend 2</p>
//       </div>
//       <div>
//         <img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
//         <p className="legend">Legend 3</p>
//       </div>
//     </Carousel>
//   );
// };
// export default App;

//*********************************************************************************************

//*****************[to do list app]*************************

// //-------------App.js ---------------
// import React, { useState } from "react";
// import ToDoList from "./ToDoList";

// const App = () => {
//   const [inputList, setInputList] = useState(" ");
//   const [Items, setItems] = useState([]);

//   const itemEvent = (event) => {
//     setInputList(event.target.value);
//   };
//   // Items = [Project1, Project2]
//   //
//   const listOfItems = () => {
//     setItems((oldItems) => {
//       return [...oldItems, inputList]; //...oldItems is accessing all previous items
//     });
//     setInputList(" "); //after clicking + button the input box will be empty
//   };

//   const deleteItems = (identifier) => {
//     console.log("deleted");
//     // identifier = 0
//     // oldItems = [Project1, Project2, Project3]
//     setItems((oldItems) => {
//       return oldItems.filter((arrElem, index) => {
//         return index !== identifier;
//         //Project2 and Project3
//       });
//       //[Project2, Project3]
//     });
//   };
//   return (
//     <>
//       <div className="main_div">
//         <div className="center_div">
//           <br />
//           <h1>ToDo List</h1>
//           <br />
//           <input
//             type="text"
//             placeholder="Add an item"
//             onChange={itemEvent}
//             value={inputList}
//           />
//           <button onClick={listOfItems}> + </button>
//           <br />
//           <ol>
//             <br />
//             {/* <li>{inputList}</li> */}
//             {Items.map((itemval, index) => {
//               //itemval: Project1
//               //index: 0
//               return (
//                 <ToDoList
//                   key={index}
//                   id={index}
//                   text={itemval}
//                   onSelect={deleteItems}
//                 />
//               );
//             })}
//           </ol>
//           <br />
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

// //---------- ToDoList ------------
// import React from 'react';

// const ToDoList = (props) => {

//   return (
//     <div className="todo_style">
//       <i
//         class="fa fa-times cancel"
//         aria-hidden="true"
//         onClick={() => {
//           props.onSelect(props.id);
//         }}
//       />
//       <li>{props.text}</li>
//     </div>
//   );
// };
// export default ToDoList;
