"use client"
import img1 from "../../public/homeimg1.png"
import img2 from "../../public/homeimg2.jpg"
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-around items-center my-10 gap-10 mx-10">

        <div className="w-[50%]">
          <Image src={img1} alt="" className="rounded-lg object-contain" />
        </div>

        <div className="font-extrabold text-xl md:text-6xl w-[50%]">
          <div className="text-orange-500">SAVE Animals</div>
          <div>ADOPT Animals</div>
          <div className="text-green-500">DONATE For Animals</div>
        </div>

      </div>
      <div className="h-2 my-2 bg-purple-950"></div>
      <div>
        <div className="flex m-10 items-center gap-3 md:gap-10">
          <div className="w-[70%]">

            <div className="font-bold md:text-3xl text-pink-100 mb-7">
              Explore our website to learn more about our mission, browse adorable animals available for adoption, and find out how you can make a meaningful impact. Together, we can create a brighter future for animals in our community.
            </div>
            <div className="font-bold md:text-3xl text-rose-200">

              Join us in our journey to rescue, adopt, and donate — it's a paw-sitive step towards making the world a better place for all creatures, big and small. Thank you for your support!
            </div>
          </div>
          <div className="w-[30%] ">
            <Image src={img2} alt="" className="rounded-md object-contain" />
          </div>
        </div>
      </div>
    </>
  );
}
