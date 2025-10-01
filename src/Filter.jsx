function Filter({ setFilter ,filter }) {
 console.log (filter)
  return (
   <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-5">

      <h1 className="text-3xl font-bold text-gray-800 ">Extensions List</h1>

      <div className="flex gap-2 ">
        <button
          onClick={() => setFilter("All")}
          className={`px-4 py-2 rounded-full ${filter === "All" ? "bg-red-600 hover:bg-red-700 text-white" : "bg-white text-gray-700 hover:bg-gray-100"} font-medium  transition`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Active")}
          className={`px-4 py-2 rounded-full ${filter ==="Active" ? "bg-red-600 hover:bg-red-600 text-white" : "  bg-white text-gray-700 hover:bg-gray-100"} transition`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("Inactive")}
          className={`px-4 py-2 rounded-full ${filter ==="Inactive" ? "bg-red-600 hover:bg-red-700 text-white":"bg-white text-gray-700 hover:bg-gray-100"} transition`}
  >
          Inactive
        </button>
      </div>
    </div>
  );
}
export default Filter