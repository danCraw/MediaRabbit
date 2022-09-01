import './App.css';
import './css/Cards.css';
import './Media.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Other/routes/Layout/Layout';
import { Contacts, About, Post, Bot, Develop, Design } from './Pages/index';
import { Header} from './Components/index';


function App() {
  return (
    <div className="wrapper">
      <Header/>
      <main className='main'>
          <Routes>
              <Route path="/" element={ <Layout/>} />
              <Route path="/contacts" element={ <Contacts />} />
              <Route path="/about" element={ <About />} />
              <Route path="/post" element={ <Post />} />
              <Route path="/bot" element={ <Bot />} />
              <Route path="/develop" element={ <Develop />} />
              <Route path="/design" element={ <Design />} />
              <Route path="/layout" element={ <Layout/>} />
          </Routes>
      </main>
    </div>
  );
}

export default App;
