import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Loader } from "./components/Loader"
import { Home } from "./pages/Home"
import { MenuPage } from "./pages/MenuPage"
import { GalleryPage } from "./pages/GalleryPage"
import { AboutPage } from "./pages/AboutPage"
import { ContactPage } from "./pages/ContactPage"
import { ReservationsPage } from "./pages/ReservationsPage"
import { NotFound } from "./pages/NotFound"

export default function App() {
  return (
    <>
      <Loader />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/reservas" element={<ReservationsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
