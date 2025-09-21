function Card({ logo, name, description, isActive, onToggle, onRemove }) {
  return (
    <div className="p-4 flex justify-center ">
      <div className="w-80 bg-white p-6 rounded-2xl shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt={name} className="w-12 h-12 object-contain" />
          <h1 className="text-xl font-semibold text-gray-800">{name}</h1>
        </div>

        <p className="text-gray-600">{description}</p>

        <div className="justify-between flex m-5">
          {/* ✅ زر الحذف */}
          <button
            onClick={onRemove}
            className="px-4 py-1 border border-gray-300 text-gray-700 text-sm hover:bg-gray-100 transition rounded-2xl "
          >
            Remove
          </button>

          {/* ✅ التفعيل/إلغاء التفعيل */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isActive}
              onChange={onToggle}
              className="sr-only peer"
            />
            <div className="w-10 h-6 bg-gray-300 rounded-full peer peer-checked:bg-red-600 transition items-center"></div>
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-4"></div>
          </label>
        </div>
      </div>
    </div>
  );
}
export default Card