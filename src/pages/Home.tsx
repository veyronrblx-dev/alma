import { useScrollReveal } from "../hooks/useScrollReveal"
import { Hero } from "../components/home/Hero"
import { Intro } from "../components/home/Intro"
import { FeaturedDishes } from "../components/home/FeaturedDishes"
import { ChefSection } from "../components/home/ChefSection"
import { Reviews } from "../components/home/Reviews"
import { GalleryPreview } from "../components/home/GalleryPreview"
import { InfoStrip } from "../components/home/InfoStrip"

export function Home() {
  useScrollReveal()
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedDishes />
      <ChefSection />
      <Reviews />
      <GalleryPreview />
      <InfoStrip />
    </>
  )
}
