// virtual dom
// component (Functional components, class based component)
// hook -> useState -> [state,updateFn] ,
// props -> () =>
// nested components
// [1,3,3] => push,pop, [].concat, [].filter, [].map
// only return one element, string, null, []
// jsx {exp}
// Fragments -> import {Fragment} 'react', <></>
import "./Card.css"; // webpack, bundler, -> cra(react-scripts)

export function Card({ children, title }) {
  return (
    <div className="card">
      <h1>{title}</h1>
      {children}
    </div>
  );
}
