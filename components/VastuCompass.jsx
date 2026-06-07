"use client";

import { useEffect, useState } from "react";

export default function VastuCompass() {
  const [heading, setHeading] = useState(null);
  const [direction, setDirection] =
    useState("Unknown");

  const getDirection = (deg) => {
    const dirs = [
      "North",
      "Northeast",
      "East",
      "Southeast",
      "South",
      "Southwest",
      "West",
      "Northwest",
    ];

    return dirs[
      Math.round(deg / 45) % 8
    ];
  };

  const vastuGuide = {
    North: {
      score: "Excellent",
      best: [
        "Main Entrance",
        "Living Room",
        "Office",
        "Locker",
      ],
      avoid: [
        "Kitchen",
        "Septic Tank",
      ],
    },

    Northeast: {
      score: "Excellent",
      best: [
        "Pooja Room",
        "Meditation Room",
        "Study Room",
        "Water Fountain",
      ],
      avoid: [
        "Toilet",
        "Heavy Storage",
      ],
    },

    East: {
      score: "Excellent",
      best: [
        "Entrance",
        "Living Room",
        "Balcony",
        "Windows",
      ],
      avoid: ["Toilet"],
    },

    Southeast: {
      score: "Good",
      best: [
        "Kitchen",
        "Electrical Equipment",
        "Generator",
        "Inverter",
      ],
      avoid: [
        "Bedroom",
        "Pooja Room",
      ],
    },

    South: {
      score: "Average",
      best: [
        "Storage",
        "Staircase",
        "Heavy Furniture",
      ],
      avoid: [
        "Water Source",
      ],
    },

    Southwest: {
      score: "Excellent",
      best: [
        "Master Bedroom",
        "Wardrobe",
        "Safe",
        "Heavy Storage",
      ],
      avoid: [
        "Water Tank",
        "Borewell",
      ],
    },

    West: {
      score: "Good",
      best: [
        "Dining Room",
        "Study Room",
        "Children Bedroom",
      ],
      avoid: [
        "Kitchen",
      ],
    },

    Northwest: {
      score: "Good",
      best: [
        "Guest Room",
        "Parking",
        "Toilet",
        "Air Flow Areas",
      ],
      avoid: [
        "Pooja Room",
      ],
    },
  };

  useEffect(() => {
    const handleOrientation = (
      event
    ) => {
      let headingValue = null;

      if (
        event.webkitCompassHeading !==
        undefined
      ) {
        headingValue =
          event.webkitCompassHeading;
      } else if (
        event.alpha !== null
      ) {
        headingValue =
          360 - event.alpha;
      }

      if (
        headingValue !== null &&
        !isNaN(headingValue)
      ) {
        const rounded =
          Math.round(headingValue);

        setHeading(rounded);

        setDirection(
          getDirection(rounded)
        );
      }
    };

    window.addEventListener(
      "deviceorientation",
      handleOrientation,
      true
    );

    return () =>
      window.removeEventListener(
        "deviceorientation",
        handleOrientation
      );
  }, []);

  return (
    <div
      className="
      max-w-2xl
      mx-auto
      bg-white
      border
      border-[#D4AF37]/20
      rounded-3xl
      shadow-xl
      p-6
      "
    >
      <h1
        className="
        text-3xl
        font-bold
        text-center
        text-[#B8860B]
        mb-8
        "
      >
        🧭 Vastu Compass
      </h1>

      {/* Compass */}

      <div
        className="
        relative
        w-72
        h-72
        mx-auto
        rounded-full
        border-8
        border-[#D4AF37]
        bg-[#FFFDF8]
        shadow-lg
        "
      >
        <div className="absolute top-3 left-1/2 -translate-x-1/2 font-bold text-lg">
          N
        </div>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-bold text-lg">
          S
        </div>

        <div className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-lg">
          W
        </div>

        <div className="absolute right-3 top-1/2 -translate-y-1/2 font-bold text-lg">
          E
        </div>

        {/* Needle */}

        <div
          className="
          absolute
          top-1/2
          left-1/2
          origin-bottom
          "
          style={{
            transform: `translate(-50%, -100%) rotate(${
              heading || 0
            }deg)`,
          }}
        >
          <div
            className="
            w-2
            h-28
            bg-red-500
            rounded-full
            "
          />
        </div>

        <div
          className="
          absolute
          w-5
          h-5
          bg-black
          rounded-full
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          "
        />
      </div>

      {/* Direction Info */}

      <div className="text-center mt-8">
        <p
          className="
          text-5xl
          font-bold
          text-[#B8860B]
          "
        >
          {heading !== null
            ? `${heading}°`
            : "--"}
        </p>

        <p
          className="
          text-2xl
          font-semibold
          mt-2
          "
        >
          {direction}
        </p>
      </div>

      {/* Recommendation */}

      {direction !== "Unknown" &&
        vastuGuide[direction] && (
          <div
            className="
            mt-8
            bg-[#F8F5F0]
            border
            border-[#D4AF37]/20
            rounded-2xl
            p-6
            "
          >
            <div className="mb-5">
              <h3
                className="
                text-xl
                font-bold
                text-[#B8860B]
                "
              >
                🟢 Vastu Quality:
                {" "}
                {
                  vastuGuide[
                    direction
                  ].score
                }
              </h3>
            </div>

            <div className="mb-5">
              <h3
                className="
                font-bold
                text-green-700
                mb-2
                "
              >
                ✅ Best For
              </h3>

              <ul className="space-y-1">
                {vastuGuide[
                  direction
                ].best.map((item) => (
                  <li key={item}>
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className="
                font-bold
                text-red-700
                mb-2
                "
              >
                ❌ Avoid
              </h3>

              <ul className="space-y-1">
                {vastuGuide[
                  direction
                ].avoid.map((item) => (
                  <li key={item}>
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

      {/* Instruction */}

      <p
        className="
        text-center
        text-gray-500
        text-sm
        mt-6
        "
      >
        Stand facing the area you want to
        check and point your phone
        straight ahead.
      </p>
    </div>
  );
}