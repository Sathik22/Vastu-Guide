export default function Stats() {
  return (
    <section className="py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h2 className="text-3xl font-bold">100+</h2>
          <p>Vastu Rules</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h2 className="text-3xl font-bold">8</h2>
          <p>Directions</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h2 className="text-3xl font-bold">20+</h2>
          <p>Categories</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h2 className="text-3xl font-bold">100%</h2>
          <p>Responsive</p>
        </div>

      </div>
    </section>
  );
}