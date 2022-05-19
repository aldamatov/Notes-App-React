import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <MdSearch />

      <input
        type="text"
        placeholder="Type to search..."
        onChange={(e) => handleSearchNote(e.target.value)}
      />
    </div>
  );
};
export default Search;
