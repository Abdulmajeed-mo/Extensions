import { useState } from "react"; // ✅ لازم state
import Nav from "./Nav";
import Card from "./Card";
import Filter from "./Filter";
import data from "./data.json";
import "./index.css";

// نجلب كل الصور من مجلد عشان تكون واضحه وجاهزه
const images = import.meta.glob("./assets/images/*.{png,jpg,jpeg,svg}", {
  eager: true,
});

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 px-50 p-15">
      <Nav />

      {/* ✅ مررنا setFilter للفلتر */}
      <Filter setFilter={setFilter} />

      <div className="flex flex-wrap justify-center gap-1 p-1 ">
        {filteredData.map((item) => (
          <Card
            key={item.id}
            logo={logos[item.logo]}
            name={item.name}
            description={item.description}
            isActive={item.isActive} // ✅ مررنا الحالة
            onToggle={() => handleToggle(item.id)} // ✅ مررنا التبديل
            onRemove={() => handleRemove(item.id)} // ✅ مررنا الحذف
          />
        ))}
      </div>
    </div>
  );
}

export default App;
