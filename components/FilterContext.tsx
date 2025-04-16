'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

type PriceRange = {
  min: number;
  value: number;
  max: number;
};

type FilterState = {
  selectedOptions: string[];
  selectedCategories: string[];
  expandedCategories: string[];
};

type FilterContextType = {
  filters: Record<string, { expanded: boolean; options: string[] }>;
  selectedFilters: Record<string, string[]>;
  priceRange: PriceRange;
  setPriceRange: React.Dispatch<React.SetStateAction<PriceRange>>;
  setSelectedFilters: React.Dispatch<React.SetStateAction<Record<string, string[]>>>;
  priceDrop: boolean;
  setPriceDrop: React.Dispatch<React.SetStateAction<boolean>>;
  locationDrop: boolean;
  setLocationDrop: React.Dispatch<React.SetStateAction<boolean>>;
  zipCode: string;
  setZipCode: React.Dispatch<React.SetStateAction<string>>;
  toggleFilter: (category: string, filter: string) => void;
  toggleCategory: (category: string) => void;
  resetFilters: () => void;
  setDefaultFilters: () => void;
  filterState: FilterState;
  setFilterState: React.Dispatch<React.SetStateAction<FilterState>>;
};

const defaultFilters: Record<string, { expanded: boolean; options: string[] }> = {
  sortBy: {
    expanded: false,
    options: ['Newest', 'Oldest', 'Lowest Price', 'Highest Price'],
  },
  dealType: {
    expanded: false,
    options: ['Excellent', 'Steal', 'Good', 'Ok', 'F'],
  },
  condition: {
    expanded: false,
    options: ['New', 'Like New', 'Good', 'Fair', 'Poor'],
  },
  
};

const defaultPriceRange: PriceRange = {
  min: 0,
  value: 0,
  max: 10000,
};

const defaultFilterState: FilterState = {
  selectedOptions: [],
  selectedCategories: [],
  expandedCategories: [],
};

// Create a default context value that matches the FilterContextType
const defaultContextValue: FilterContextType = {
  filters: defaultFilters,
  selectedFilters: {},
  priceRange: defaultPriceRange,
  setPriceRange: () => {},
  setSelectedFilters: () => {},
  priceDrop: false,
  setPriceDrop: () => {},
  locationDrop: false,
  setLocationDrop: () => {},
  zipCode: "",
  setZipCode: () => {},
  toggleFilter: () => {},
  toggleCategory: () => {},
  resetFilters: () => {},
  setDefaultFilters: () => {},
  filterState: defaultFilterState,
  setFilterState: () => {},
};

export const FilterContext = createContext<FilterContextType>(defaultContextValue);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();
  const query = searchParams.get("query") || "";
  const filterParams = searchParams.get("f") || "";

  const [filters, setFilters] = useState<Record<string, { expanded: boolean; options: string[] }>>({});
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [priceRange, setPriceRange] = useState<PriceRange>(defaultPriceRange);
  const [filterState, setFilterState] = useState<FilterState>(defaultFilterState);
  const [priceDrop, setPriceDrop] = useState<boolean>(false);
  const [locationDrop, setLocationDrop] = useState<boolean>(false);
  const [zipCode, setZipCode] = useState<string>("");

  const setDefaultFilters = () => {
    console.log("Setting default filters");
    setFilters(defaultFilters);
  };

  useEffect(() => {
    const savedToggledCategoryFilters = sessionStorage.getItem("filters");
    console.log("savedToggledCategoryFilters", savedToggledCategoryFilters);
    if (savedToggledCategoryFilters) return;
    setDefaultFilters();
  }, []);

  useEffect(() => {
    if (path.includes("/sign-in") || path.includes("/product")) {
      console.log("skipping filter update");
      return;
    }
    const clickedFilters = Object.values(selectedFilters).flat().filter(Boolean).join(",");
    console.log("clickedFilters", clickedFilters);


    let newQueryParams = path;
    const queryParams = new URLSearchParams();
    if (query) queryParams.set("query", query);
    if (clickedFilters) queryParams.set("f", clickedFilters);
    if (queryParams.size > 0) newQueryParams += `?${queryParams.toString()}`;

    console.log("newQueryParams", newQueryParams);

    
    router.push(newQueryParams.toLowerCase());
  },[selectedFilters])


  const toggleCategory = (category: string) => {
    setFilters((prev) => ({
        ...prev,
        [category]: {
            ...prev[category],
            expanded: !prev[category].expanded,
        }
    }))
  };

  const toggleFilter = (category: string, filter: string) => {
    setSelectedFilters(prev => {
      const currentFilters = prev[category] || [];
      const newFilters = currentFilters.includes(filter)
        ? currentFilters.filter(f => f !== filter)
        : [...currentFilters, filter];
      
      return {
        ...prev,
        [category]: newFilters,
      };
    });
  };

  // Watch for when all filters are cleared
  useEffect(() => {
    const hasAnyFilters = Object.values(selectedFilters).some(filters => filters.length > 0);
    if (!hasAnyFilters) {
      // Reset all expanded states to false
      setFilters(prev => {
        const newFilters = { ...prev };
        Object.keys(newFilters).forEach(category => {
          newFilters[category] = {
            ...newFilters[category],
            expanded: false
          };
        });
        return newFilters;
      });
    }
  }, [selectedFilters]);

  const resetFilters = () => {
    setSelectedFilters({});
    setFilters(defaultFilters);
    setPriceRange(defaultPriceRange);
    setFilterState(defaultFilterState);
  };

  const value: FilterContextType = {
    filters,
    selectedFilters,
    priceRange,
    setPriceRange,
    setSelectedFilters,
    priceDrop,
    setPriceDrop,
    locationDrop,
    setLocationDrop,
    zipCode,
    setZipCode,
    toggleFilter,
    toggleCategory,
    resetFilters,
    setDefaultFilters,
    filterState,
    setFilterState,
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
}

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
}; 