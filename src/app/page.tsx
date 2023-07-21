import Featured from '@/components/Featured';
import Offer from '@/components/Offer';
import Slider from '@/components/Slider'
import Image from 'next/image'

const slideData = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Slider data={slideData} />
      <Featured />
      <Offer />
    </main>
  );
}
