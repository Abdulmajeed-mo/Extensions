import { useState, useEffect } from "react"; // ✅ أضفنا useEffect
import axios from "axios"; // ✅ استدعينا ال axios
import Nav from "./Nav";
import Card from "./Card";
import Filter from "./Filter";
import data from "./data.json";
import { ssrModuleExportsKey } from "vite/module-runner";

// نجلب كل الصور من مجلد عشان تكون واضحه وجاهزه
const images = import.meta.glob("./assets/images/*.{png,svg}", { eager: true });

// نربط اسم الصورة مع المسار الصحيح و نحول الملفات إلى كائن
const logos = Object.fromEntries(
  Object.entries(images).map(([path, module]) => {
    const fileName = path.split("/").pop(); // نجيب اسم الملف فقط
    return [fileName, module.default];ssrModuleExportsKey
  })
);

function App() {
  // ✅ خزن الداتا في state عشان نقدر نعدل عليها
  const [extensions, setExtensions] = useState(data);
  const [filter, setFilter] = useState("All"); // All | Active | Inactive

  // ✅ هنا الحالات الخاصة بالـ API
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ إعداد axios
  const api = axios.create({
    baseURL: "https://base-tamimha.techwin.sa/api/",
  });

  // ✅ جلب البيانات من الـ API
  useEffect(() => {
    const fetchCards = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await api.get("cards");
        console.log(response);

        if (response.status === 200) {
          setCards(response.data.data);
        }
      } catch (error) {
        console.log("api request failed", error);
        setError("Failed to fetch cards");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCards();
  },[] );
  

  // ✅ عرض حالة التحميل
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // ✅ عرض الخطأ إن وجد
  if (error) {
    return <div style={{ color: "red" }}>Error: {error}</div>;
  }

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

        {/* ✅ عرض بيانات الـ API (تحت بطاقات الداتا.json) */}
        {cards.map((card) => (
          <Card
            key={card.id}
            logo={logos["default.png"]} // استبدلها باسم الصورة لو متوفرة
            name={card.name}
            description={card.description}
            isActive={card.isActive || false}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
