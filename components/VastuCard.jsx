import Link from "next/link";
import Image from "next/image";

export default function VastuCard({ item }) {
  return (
    <Link href={`/vastu/${item.slug}`}>
      <div
        className="
        h-full
        bg-white
        rounded-2xl
        shadow-md
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
        p-5
        border
        border-gray-100
        cursor-pointer
        "
      >
        <Image
  src={item.image}
  alt={item.title}
  width={400}
  height={250}
  className="
  w-full
  h-52
  object-cover
  rounded-xl
  "
/>

        <div className="mb-3">
          <h2
            className="
            text-lg
            sm:text-xl
            font-bold
            text-gray-800
            line-clamp-2
            "
          >
            {item.title}
          </h2>
        </div>
<div className="space-y-3">

  <div className="flex flex-wrap gap-2">
    <span className="font-medium text-gray-600">
      Room:
    </span>

    <span
      className="
      bg-blue-100
      text-blue-700
      px-3
      py-1
      rounded-full
      text-xs
      "
    >
      {item.room}
    </span>
  </div>

  <div className="flex flex-wrap gap-2">
    <span className="font-medium text-gray-600">
      Ideal:
    </span>

    {item.idealDirections?.map((dir) => (
      <span
        key={dir}
        className="
        bg-green-100
        text-green-700
        px-3
        py-1
        rounded-full
        text-xs
        "
      >
        {dir}
      </span>
    ))}
  </div>

  {item.goodDirections?.length > 0 && (
    <div className="flex flex-wrap gap-2">
      <span className="font-medium text-gray-600">
        Good:
      </span>

      {item.goodDirections.map((dir) => (
        <span
          key={dir}
          className="
          bg-yellow-100
          text-yellow-700
          px-3
          py-1
          rounded-full
          text-xs
          "
        >
          {dir}
        </span>
      ))}
    </div>
  )}

</div>

        <div className="mt-4 pt-4 border-t">
          <span
            className="
            text-sm
            font-medium
            text-blue-600
            "
          >
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}