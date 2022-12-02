import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Page/Home"
import { Helmet } from "react-helmet";

import './App.css';

function App() {

  
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Distin-Gui</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="testing icons and titles" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
