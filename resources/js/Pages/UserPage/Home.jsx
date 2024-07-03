import Hero from '@/Components/molecules/Hero'
import MakeYourTrip from '@/Components/molecules/MakeYourTrip'
import FeatureVehicle from '@/Components/organisems/FeatureVehicle'
import HomeLayout from '@/Layouts/HomeLayout'

export default function Home() {
  return (
    <>
        <HomeLayout>
            <Hero />
            <MakeYourTrip />
            <FeatureVehicle />

        </HomeLayout>
    </>
  )
}
