import Image from "next/image";
import Link from "next/link";
import { vastuData } from "@/data/vastuData";

function Section({ title, content }) {
  if (!content) return null;

  return (
    <div className="bg-white border border-[#D4AF37]/20 rounded-2xl p-5 shadow-sm">
      <h3 className="text-xl font-bold mb-2 text-[#B8860B]">
        {title}
      </h3>

      <p className="text-gray-700">
        {Array.isArray(content)
          ? content.join(", ")
          : content}
      </p>
    </div>
  );
}

export default async function Page({ params }) {
  const { slug } = await params;

  const item = vastuData.find(
    (i) => i.slug === slug
  );

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Item Not Found
        </h1>
      </div>
    );
  }

return (
  <div
    className="
    min-h-screen
    bg-gradient-to-br
    from-[#F8F5F0]
    via-[#FFFDF8]
    to-[#F3E9D2]
    px-4
    sm:px-6
    py-6
    "
  >
    <div className="max-w-6xl mx-auto">

    

      {/* Main Card */}

      <div
        className="
        bg-white
        border
        border-[#D4AF37]/20
        rounded-3xl
        shadow-xl
        overflow-hidden
        "
      >

        {/* Image */}

        <div
          className="
          relative
          w-full
          aspect-[16/9]
          bg-[#FAF8F3]
          "
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority
            className="
            object-contain
            p-4
            "
          />
        </div>

        {/* Content */}

        <div className="p-6 md:p-10">

          {/* Room Badge */}

          <span
            className="
            inline-flex
            px-4
            py-2
            rounded-full
            text-sm
            font-medium
            bg-[#D4AF37]/10
            text-[#B8860B]
            border
            border-[#D4AF37]/30
            "
          >
            {item.room}
          </span>

          {/* Title */}

          <h1
            className="
            text-3xl
            md:text-5xl
            font-bold
            text-gray-900
            mt-6
            mb-8
            "
          >
            {item.title}
          </h1>

          {/* Direction Cards */}

          <div
            className="
            grid
            md:grid-cols-2
            gap-5
            mb-8
            "
          >

            <div className="bg-white border border-green-200 p-5 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-green-700">
                ⭐ Ideal Directions
              </h3>

              <p className="text-gray-700">
                {item.idealDirections?.join(", ") ||
                  "Not Available"}
              </p>
            </div>

            <div className="bg-white border border-yellow-200 p-5 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-yellow-700">
                ✅ Good Alternatives
              </h3>

              <p className="text-gray-700">
                {item.goodDirections?.join(", ") ||
                  "None"}
              </p>
            </div>

            <div className="bg-white border border-blue-200 p-5 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-blue-700">
                ℹ️ Acceptable Directions
              </h3>

              <p className="text-gray-700">
                {item.acceptableDirections?.join(", ") ||
                  "None"}
              </p>
            </div>

            <div className="bg-white border border-red-200 p-5 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-red-700">
                ❌ Avoid Directions
              </h3>

              <p className="text-gray-700">
                {item.avoidDirections?.join(", ") ||
                  "None"}
              </p>
            </div>

          </div>

          {/* Facing */}

          <div
            className="
            bg-white
            border
            border-[#D4AF37]/20
            rounded-2xl
            p-5
            mb-8
            shadow-sm
            "
          >
            <h3
              className="
              text-xl
              font-bold
              mb-2
              text-[#B8860B]
              "
            >
              🧭 Recommended Facing
            </h3>

            <p className="text-gray-700">
              {Array.isArray(item.facing)
                ? item.facing.join(", ")
                : item.facing}
            </p>
          </div>

          {/* Sections */}

          <div className="grid gap-6">

            <Section
              title="📍 Placement"
              content={item.placement}
            />

            <Section
              title="💡 Reason"
              content={item.reason}
            />

            <Section
              title="⚠️ Avoid"
              content={item.avoid}
            />

            <Section
              title="✅ Tips"
              content={item.tips}
            />

            {item.practicalNote && (
              <Section
                title="🏡 Real World Tip"
                content={item.practicalNote}
              />
            )}

          </div>

        </div>
      </div>
    </div>
    {/* Back Button */}

<div className="flex justify-center mt-8">
  <Link
    href="/"
    className="
    inline-flex
    items-center
    gap-2
    px-6
    py-3
    bg-white
    border
    border-[#D4AF37]/30
    rounded-xl
    text-gray-800
    shadow-sm
    hover:shadow-md
    hover:border-[#D4AF37]
    transition
    "
  >
    ← Back to Home
  </Link>
</div>
  </div>
);
}