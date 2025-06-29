"use client";

import React, { ReactNode, useState } from "react";
import { SearchContext } from "./SearchContext";
import { ISearchType } from "@/interfaces/search-types";

const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchResult, setSearchResult] = useState<ISearchType | null>(null);
  return (
    <SearchContext.Provider value={{ searchResult, setSearchResult }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
