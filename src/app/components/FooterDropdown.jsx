export default function Footerdropdown() {
  const items = ["Hindi", "Gujarati", "German", "Spanish"];

  return (
    <ul className="py-2 text-sm text-gray-200">
      {items.map((item) => (
        <li key={item}>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-700 hover:text-white">
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}
