import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Page/Home"
import Dashboard from './Page/Dashboard';
import { Helmet } from "react-helmet";

import './App.css';
import { AuthProvider } from './component/auth';
import Login from './component/Login';
import { RequireAuth } from './component/RequireAuth';

function App() {
  return (
    <AuthProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Distin-Gui</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="testing icons and titles" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
