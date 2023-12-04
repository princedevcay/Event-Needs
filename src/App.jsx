import './App.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VendorPage from './pages/VendorPage';
import About from './pages/About';
import Login from './components/Login';
import Vendors from './components/Vendors';
import VendorProfile from './components/user/VendorProfile';
import UserList from './components/user/UserList'; // Adjust the path as necessary
import ListYourBusiness from './pages/ListYourBusiness';


const customTheme = extendTheme({
  styles: {
    global: {
      'html, body': {
      },
    },
  },
  colors: {
    brown: {
      50: '#f7f2ee', // very light brown
      100: '#e6d5cb',
      200: '#d5b9a9',
      300: '#c49d87',
      400: '#b48065',
      500: '#a36443', // base brown color
      600: '#824f34',
      700: '#613a25',
      800: '#412515',
      900: '#211108', // very dark brown
    },
    black: {
      50: '#e8e8e8', // light black, more like grey
      100: '#d1d1d1',
      200: '#bababa',
      300: '#a3a3a3',
      400: '#8c8c8c',
      500: '#757575', // medium black, solid grey
      600: '#5e5e5e',
      700: '#474747',
      800: '#303030',
      900: '#191919', // very dark black
    },
  },
  fonts: {
    heading: `'Cormorant', sans-serif`,
    body: `'Lato', sans-serif`,
  },
  // ... other theme overrides if you have
});

function App() {
  return (
    <Provider store={store}> {/* Wrap the entire application with Redux Provider */}
     <PersistGate loading={null} persistor={persistor}>
      <ChakraProvider theme={customTheme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/users" element={<UserList/>} />
            <Route path="/vendors/vendor" element={<VendorPage />} />
            <Route path="/vendor/:vendorId" element={<VendorProfile/>} />
            <Route path="/list-your-business" element={<ListYourBusiness/>} />
            {/* Other routes as needed */}
          </Routes>
        </Router>
      </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
