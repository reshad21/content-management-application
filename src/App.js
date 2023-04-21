import { Toaster } from 'react-hot-toast';
import { Provider } from "react-redux";
import { RouterProvider } from 'react-router-dom';
import './App.css';
import store from './redux/store';
import router from './routes/router';
function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster></Toaster>
      </Provider>
    </div>
  );
}

export default App;
