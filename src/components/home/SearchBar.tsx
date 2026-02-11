interface p{
    icon: string,
    placeholder: string
}
const SearchBar = ({icon,placeholder}:p) => {
  return (
    <div className="relative w-full max-w-[413px] h-[44px] mx-auto">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-full pl-4 pr-10 bg-white text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {/* Search icon */}
     <img  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" src={icon} alt="search icon" loading="lazy" />
    </div>
  );
};

export default SearchBar;
