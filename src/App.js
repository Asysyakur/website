import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './Pages/form';
import User from './Pages/User';
import Update from './Pages/Update';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/add" element={<Form/>}/>
        <Route path="/" element={<User/>}/>
        <Route path="/add/:id" element={<Update/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
