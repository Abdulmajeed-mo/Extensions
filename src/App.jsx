import { useState } from "react"; // ✅ لازم state
import Nav from "./Nav";
import Card from "./Card";
import Filter from "./Filter";
import data from "./data.json";
// import "./index.css";

// نجلب كل الصور من مجلد عشان تكون واضحه وجاهزه
const images = import.meta.glob("./assets/images/*.{png,svg}", { eager: true });

// نربط اسم الصورة مع المسار الصحيح و نحول الملفات إلى كائن
const logos = Object.fromEntries(
  Object.entries(images).map(([path, module]) => {
    const fileName = path.split("/").pop(); // نجيب اسم الملف فقط
    return [fileName, module.default];
  })
);

function App() {
  // ✅ خزن الداتا في state عشان نقدر نعدل عليها
  const [extensions, setExtensions] = useState(data);
  const [filter, setFilter] = useState("All"); // All | Active | Inactive

  // ✅ الحذف
  const handleRemove = (id) => {
    setExtensions((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ التفعيل/إلغاء التفعيل
  const handleToggle = (id) => {
    setExtensions((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  // ✅ فلترة البيانات حسب الفلتر المختار
  const filteredData = extensions.filter((item) => {
    if (filter === "Active") return item.isActive;
    if (filter === "Inactive") return !item.isActive;
    return true; // All
  });

  console.log(filteredData);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 px-50 p-15">
      <Nav />

      {/* ✅ مررنا setFilter للفلتر */}
      <Filter setFilter={setFilter} filter={filter} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
  {filteredData.map((item) => (
    <Card
      key={item.id}
      logo={logos[item.logo]}
      name={item.name}
      description={item.description}
      isActive={item.isActive}
      onToggle={() => handleToggle(item.id)}
      onRemove={() => handleRemove(item.id)}
    />
  ))}
</div>

      </div>
   
  );
}

export default App; 