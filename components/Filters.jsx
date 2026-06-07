export default function Filters({
  direction,
  setDirection,
  room,
  setRoom
}) {
  return (
    <div
      className="
  sticky
  top-16
 
  bg-white/90
backdrop-blur-md

p-2
 focus:outline-none
focus:ring-2
focus:ring-[#D4AF37]rounded-2xl
shadow-md
  "
    >
       <div className="flex md:justify-end   gap-2 mt-3 overflow-x-auto ">
      {/* Filter Buttons */}
   
      <select
        value={direction}
        onChange={(e) =>
          setDirection(e.target.value)
        }
        className="border p-3 rounded-lg border-[#D4AF37]

 focus:outline-none
focus:ring-2
focus:ring-[#D4AF37]"
      >
        <option value="">All Directions</option>

        <option>North</option>
        <option>South</option>
        <option>East</option>
        <option>West</option>
        <option>Northeast</option>
        <option>Northwest</option>
        <option>Southeast</option>
        <option>Southwest</option>
        <option>Center</option>
      </select>

      <select
        value={room}
        onChange={(e) =>
          setRoom(e.target.value)
        }
        className="border border-[#D4AF37]

 focus:outline-none
focus:ring-2
focus:ring-[#D4AF37] p-3 rounded-lg"
      >
        <option value="">All Rooms</option>

        <option>Bedroom</option>
        <option>Living Room</option>
        <option>Kitchen</option>
        <option>Bathroom</option>
        <option>Entrance</option>
        <option>Pooja Room</option>
        <option>Study Room</option>
        <option>Decor</option>
      </select>
       </div>


    </div>
  );
}
