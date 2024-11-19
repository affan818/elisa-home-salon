import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Services from "./components/Services/Services.jsx";
import ChocolatePage from "./components/ChocolateWax/ChocolatePage.jsx";
import RicaPage from "./components/RicaWax/RicaPage.jsx";
import Facials from "./components/Facials/Facials.jsx";
import Dtan from "./components/D-Tan/Dtan.jsx";
import BleachPage from "./components/Bleach/BleachPage.jsx";
import Massage from "./components/Massage/Massage.jsx";
import Cleanup from "./components/CleanUp/Cleanup.jsx";
import Manicure from "./components/Manicure/Manicure.jsx";
import Padicure from "./components/Pedicure/Pedicure.jsx";
import HairCut from "./components/HairCut/HairCut.jsx";
import HairCare from "./components/HairCare/HairCare.jsx";
import HairSpa from "./components/HairSpa/HairSpa.jsx";
import HairColor from "./components/HairColor/HairColor.jsx";
import Makeup from "./components/MakeUp/Makeup.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
      <Route path="chocolate_wax" element={<ChocolatePage />} />
      <Route path="rica_Wax" element={<RicaPage />} />
      <Route path="facials" element={<Facials />} />
      <Route path="d-Tan" element={<Dtan />} />
      <Route path="bleach" element={<BleachPage />} />
      <Route path="massage" element={<Massage />} />
      <Route path="clean-up" element={<Cleanup />} />
      <Route path="manicure" element={<Manicure />} />
      <Route path="padicure" element={<Padicure />} />
      <Route path="hair_cut_trimming" element={<HairCut />} />
      <Route path="hair_care" element={<HairCare />} />
      <Route path="hair_spa" element={<HairSpa />} />
      <Route path="hair_color" element={<HairColor />} />
      <Route path="make_up" element={<Makeup />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
