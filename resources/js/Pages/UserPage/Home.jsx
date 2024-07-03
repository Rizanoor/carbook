import BecomeDriver from '@/Components/molecules/BecomeDriver'
import Hero from '@/Components/molecules/Hero'
import MakeYourTrip from '@/Components/molecules/MakeYourTrip'
import Service from '@/Components/molecules/Service'
import Welcome from '@/Components/molecules/Welcome'
import Blog from '@/Components/organisems/Blog'
import FeatureVehicle from '@/Components/organisems/FeatureVehicle'
import HomeLayout from '@/Layouts/HomeLayout'

export default function Home() {
  return (
    <>
        <HomeLayout>
            <Hero />
            <MakeYourTrip />
            <FeatureVehicle />
            <Welcome />
            <Service />
            <BecomeDriver />
            <Blog />

        </HomeLayout>
    </>
  )
}
