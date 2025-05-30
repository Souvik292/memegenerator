import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './signup';
import Signin from './signin';
import App from './App';
import Makememe from "./makememe"
import Memes from "./meme2"


function Reactroute() {
  return(
       <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/memegenerator" element={<Makememe />} />
        <Route path="/main" element={<Memes />} />

      </Routes>
    </Router>
   
  );
};
export default Reactroute;