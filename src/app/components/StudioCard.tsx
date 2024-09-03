import Image from "next/image";
import { FaStar } from "react-icons/fa";

import { AspectRatio } from "~/components/ui/aspect-ratio";

interface StudioCardProps {
  image: string;
  title: string;
  rating: string;
  details: string;
  price: string;
}

export default function StudioCard({
  image,
  title,
  rating,
  details,
  price,
}: StudioCardProps) {
  return (
    <div className="flex flex-col m-2 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-[400px] w-60 bg-gradient-to-b from-[#ffd6ff] to-[#b8c0ff]">
      {/* Image Section */}
      <AspectRatio ratio={16 / 9}>
        <Image src={image} alt={title} className="object-cover" layout="fill" />
      </AspectRatio>

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            <div className="flex items-center">
              <FaStar className="text-yellow-500" />
              <span className="ml-1 text-sm text-gray-600">{rating}</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-2">{details}</p>
        </div>
        <p className="text-gray-800 font-semibold">{price} / hour</p>
      </div>
    </div>
  );
}
