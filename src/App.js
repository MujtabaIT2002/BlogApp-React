import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Contacts';
import Blog from './Blogs';
import BlogDetails from './BlogDetails';
import NotFound from './Notfound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Content">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Blogs" element={<Blog/>}></Route>
            <Route path="/Contacts" element={<Contact/>}></Route>
            <Route path='/BlogDetails/:id' element={<BlogDetails/>}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
