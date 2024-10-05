import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Css.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Service from './components/Service/Service Nav/Service';
import ServiceLayout from './components/Service/Service Nav/ServiceLayout';
import CardNailArt from './components/Service/Service Card/CardNailArt';
import CardFacial from './components/Service/Service Card/CardFacial';
import CardHairCare from './components/Service/Service Card/CardHairCare';
import CardManiPedi from './components/Service/Service Card/CardManiPedi';
import CardWaxing from './components/Service/Service Card/CardWaxing';
import CardBleach from './components/Service/Service Card/CardBleach';
import CardWedding from './components/Service/Service Card/CardWedding';
import ContactLayout from './components/Contact/ContactLayout';
import SignUp from './components/Contact/SignUp';
import Login from './components/Contact/LogIn';
import ChatBotLayout from './components/FAQ/ChatBotLayout';
import CardThreading from './components/Service/Service Card/CardThreading';
import CardBodyPolishing from './components/Service/Service Card/CardBodyPolishing';
import Profile from './components/Profile/Profile';
import { AuthProvider } from './Store/auth';
import LogOut from './components/Contact/LogOut';
import HomeService from './components/Home/HomeService';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='profile' element={<Profile />} />


      {/* ......CONTACT..... */}
      <Route path='contact' element={<ContactLayout />}>
        <Route path='' element={<Contact />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<Login />} />
        <Route path='logout' element={<LogOut />} />
      </Route>

      {/* .....SERVICE....  */}
      <Route path='service' element={<ServiceLayout />}>
        <Route path='' element={<Service />} />
        <Route path='nailart' element={<CardNailArt />} />
        <Route path='haircare' element={<CardHairCare />} />
        <Route path='mani-pedi' element={<CardManiPedi />} />
        <Route path='waxing' element={<CardWaxing />} />
        <Route path='bleach-dtan' element={<CardBleach />} />
        <Route path='weddingpakage' element={<CardWedding />} />
        <Route path='body-polishing' element={<CardBodyPolishing />} />
        <Route path='threading' element={<CardThreading />} />
        <Route path='facial-cleanup' element={<CardFacial />} />
      </Route>


      {/* <Route path='user/:userid' element={<User />} /> */}
      <Route path='faq' element={<ChatBotLayout />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider >
      <RouterProvider router={router} />
    </AuthProvider>
  </>
);
