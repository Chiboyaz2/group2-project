import { useState } from "react";
import { Menu } from "lucide-react";

export default function CategorySelect() {
  const categories: string[] = ["All Categories","Category 1", "Category 2", "Category 3"];

  const [open, setOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
    setOpen(false); // close dropdown after selection
  };

  return (
    <div className="relative inline-block">
      {/* Trigger Box */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center w-[176px] h-[47px] border border-gray-400 rounded-md px-6 py-4 gap-4 bg-white text-[#272343] whitespace-nowrap"
      >
        {/* Menu Icon on the left */}
        <Menu className="min-w-[24px] max-w-[24px] h-[24px] text-[#272343]" />

        <span>{selectedCategory}</span>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute mt-2 w-[176px] border border-gray-300 bg-white rounded-md shadow-lg z-10">
          <ul className="py-2">
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={() => handleSelect(category)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
