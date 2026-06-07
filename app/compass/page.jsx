import VastuCompass from "@/components/VastuCompass";
import Link from "next/link";

export default function CompassPage() {
  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-[#F8F5F0]
      via-[#FFFDF8]
      to-[#F3E9D2]
      p-6
      "
    >
      <VastuCompass />
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