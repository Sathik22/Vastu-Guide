export default function SearchBar({
  search,
  setSearch
}) {
  return (
    <div
  className="
  sticky
  top-0
  z-50
  bg-white
  border-b
  shadow-sm
  "
>
  <div className="max-w-7xl mx-auto p-4">
      <input
      type="text"
      placeholder="Search vastu item..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="
      w-full
      border
border-[#D4AF37]
      rounded-lg
      focus:outline-none
focus:ring-2
focus:ring-[#D4AF37]
      p-3
      "
    />

  </div>
  </div>
  
  );
}