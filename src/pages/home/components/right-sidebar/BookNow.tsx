export function BookNow() {
  return (
    <div className="bg-[#d9f0fe] flex flex-col items-start text-center p-6 mb-4">
      {/* <img src="" alt="" /> */}
      <h2 className="text-2xl font-medium tracking-tight font-oswald">
        GOOD TIMES NOW
      </h2>
      <p className="text-sm text-neutral-600 mb-3 mt-1">
        Every Thursday at 8:00pm
      </p>
      <button
        className="px-4 py-2 bg-transparent text-sm font-semibold uppercase
          tracking-wide hover:opacity-80 transition font-oswald border
          border-neutral-800"
      >
        Book Now
      </button>
    </div>
  );
}
