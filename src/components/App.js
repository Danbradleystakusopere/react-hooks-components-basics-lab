import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

{/* write an <About> component here */}

function App() {
  return (
    <div className="App">
      <nav>
        <a id="home" href="#home">Home</a>
        <a id="about" href="#about">About</a>
      </nav>
    </div>
  );
}


export default App;
