import React from 'react';
import Women from './components/Women';
import Men from './components/Men';

function App() {
  return (
    <div className="container" >
<h1  className="d-flex flex-row justify-content-center align-items-center text-success">Higher component eg </h1>
<div className="row">
  <div className="col-sm-6"> <Women team="Cuities-14"/> </div>
  <div className="col-sm-6"><Men team="Fierce-Battalian-17"/> </div>
   </div>
    </div>
  );
}

export default App;
