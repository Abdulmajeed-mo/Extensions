function Filter({ setFilter }) {
  return (
    <div className="flex items-center justify-between px-15 p-5 ">
      <h1 className="text-3xl font-bold text-gray-800 ">Extensions List</h1>

      <div className="flex gap-2 ">
        <button
          onClick={() => setFilter("All")}
          className="px-4 py-2 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 transition"
        >
          All
        </button>
        <button
          onClick={() => setFilter("Active")}
          className="px-4 py-2 rounded-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          Active
        </button>
        <button
          onClick={() => setFilter("Inactive")}
          className="px-4 py-2 rounded-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          Inactive
        </button>
      </div>
    </div>
  );
}
export default Filter