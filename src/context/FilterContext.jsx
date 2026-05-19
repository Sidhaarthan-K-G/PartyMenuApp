import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [category, setCategory] = useState("Starter");
  const [type, setType] = useState("veg");
  const [search, setSearch] = useState("");
    const [selected, setSelected] = useState([])
  return (
    <FilterContext.Provider value = {{ category, setCategory, type, setType, search, setSearch, selected, setSelected }}>
      {children}
    </FilterContext.Provider>
  );
};
export const useFilter = () => useContext(FilterContext)