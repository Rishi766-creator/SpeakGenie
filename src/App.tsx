import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AudioController from './pages/AudioController';
import Home from './pages/Home';
import Quiz from './pages/Quiz';

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path="/story" element={<AudioController />}></Route>
      <Route path="/quiz" element={<Quiz />}></Route>
    </Routes>
    
    </BrowserRouter>
  )

}
export default App;