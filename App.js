import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

//React.createElement == this is not creating an element this is creating an object
const heading = React.createElement("h1",{id:"heading"},"Namaste React"); 
// create element using element
// this is not a good practice to create element 
//instead use create jsxheading

// jsx is not html in js it is like html...both are different..
const jsxHeading = (<h1 className="head" tabIndex="5">
  Namaste React using JSK
</h1> );
//this is not a proper js which js engine will not understand..parcel behind the scenes doing this job
//parcel will transpile the jsx code before it reaches the js engine
//tarnspile = converting the code which js can understand
//And parcel directly donot transpile...Parcel is just a manager..but Babel(js compiler) is doing this transpile which is a part or a property of parcel.
//Babel is not created by facebook
//Jsx==React.createElement
//if we are using jsx we have to give camel case

const title =  (<h1> Namaste react finctional Component</h1>);
  

const number = 100000;

const HeadingComponent = () => (
  <div id="container">
    {title}
  
  
    <h1> Namaste react finctional Component</h1>
  </div>
 
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//ReactDOM.createRoot will create an element in the dom 

root.render(<HeadingComponent/>);
//passing the object to the dom page ....that is web page

