import Image from "next/image";
import { FaStar } from "react-icons/fa";

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
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <div className="flex items-center">
            <FaStar className="text-yellow-500" />
            <span className="ml-1 text-sm text-gray-600">{rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-2">{details}</p>
        <p className="text-gray-800 font-semibold">{price} / hour</p>
      </div>
    </div>
  );
}
