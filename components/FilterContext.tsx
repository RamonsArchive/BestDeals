'use client';

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { useSearchParams, usePathname, useRouter } from "next/navigation";

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
  setPriceValue: (value: number) => void;
  priceDrop: boolean;
  setPriceDrop: (value: boolean) => void;
  locationDrop: boolean;
  setLocationDrop: (value: boolean) => void;
  zipCode: string;
  setZipCode: (value: string) => void;
  toggleFilter: (category: string, filter: string) => void;
  toggleCategory: (category: string) => void;
  resetFilters: () => void;
  setDefaultFilters: () => void;
  filterState: FilterState;
  updateFilterState: (updates: Partial<FilterState>) => void;
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
    options: ['New', 'Like New', 'Fine', 'Fair', 'Poor'],
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

// Default context value
const defaultContextValue: FilterContextType = {
  filters: defaultFilters,
  selectedFilters: {},
  priceRange: defaultPriceRange,
  setPriceValue: () => {},
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
  updateFilterState: () => {},
};

export const FilterContext = createContext<FilterContextType>(defaultContextValue);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  
  const query = searchParams.get("query") || "";
  
  // State for UI elements that don't need to be in URL
  const [filters, setFilters] = useState<Record<string, { expanded: boolean; options: string[] }>>(defaultFilters);
  const [priceDrop, putPriceDrop] = useState<boolean>(false);
  const [locationDrop, putLocationDrop] = useState<boolean>(false);
  const [filterState, setFilterState] = useState<FilterState>(defaultFilterState);
  const [localSelectedFilters, setLocalSelectedFilters] = useState<Record<string, string[]>>({});
  
  //console.log("filterState", filterState);
  
  // Parse URL parameters into filter state
  const selectedFilters = useMemo(() => {
    const result: Record<string, string[]> = {};
    
    // Extract filter params
    const filterParam = searchParams.get("f")?.toLowerCase();
    if (filterParam) {
      const filterValues = filterParam.split(",");
      
      // Group filters by their category
      Object.keys(defaultFilters).forEach(category => {
        const categoryOptions = defaultFilters[category].options;
        const matchingFilters = filterValues.filter(filter => 
          categoryOptions.includes(filter.toLowerCase()) || 
          categoryOptions.map(o => o.toLowerCase()).includes(filter.toLowerCase())
        );
        
        if (matchingFilters.length > 0) {
          result[category] = matchingFilters;
        }
      });
    }

    return result;
  }, [searchParams]);

  useEffect(() => {
    setLocalSelectedFilters(selectedFilters);
  }, [selectedFilters]);
  
  // Parse price from URL
  const priceRange = useMemo(() => {
    const priceParam = searchParams.get("price");
    if (priceParam && !isNaN(Number(priceParam))) {
      return {
        ...defaultPriceRange,
        value: Number(priceParam)
      };
    }
    return defaultPriceRange;
  }, [searchParams]);
  
  // Parse zipcode from URL
  const zipCode = useMemo(() => {
    return searchParams.get("zip") || "";
  }, [searchParams]);
  
  // Update URL based on filters
  const updateURL = useCallback((params: Record<string, string | null>) => {
    const newParams = new URLSearchParams(searchParams.toString());
    
    Object.entries(params).forEach(([key, value]) => {
      if (value === null || value === "") {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
    });
    
    // Skip navigation when on non-relevant pages
    if (pathname.includes("/sign-in") || pathname.includes("/product")) {
      return;
    }
    
    const newPath = newParams.toString() 
      ? `${pathname}?${newParams.toString()}`
      : pathname;
    
    router.push(newPath.toLowerCase(), { scroll: false });
  }, [pathname, router, searchParams]);
  
  // Handler functions with useCallback to avoid recreation
  const toggleFilter = useCallback((category: string, filter: string) => {
    const lowerCaseFilter = filter.toLowerCase();

    setLocalSelectedFilters((prev) => {
      const currentFilters = prev[category] || [];
      const newFilters = currentFilters.includes(lowerCaseFilter) ? 
        currentFilters.filter(f => f !== lowerCaseFilter) : [...currentFilters, lowerCaseFilter];

      const updatedFilters = {
        ...prev,
        [category]: newFilters
      }

      if (newFilters.length === 0) {
        delete updatedFilters[category];
      }

      return updatedFilters;
    })


    const currentFilters = selectedFilters[category] || [];
    console.log("currentFilters", currentFilters);
    const newFilters = currentFilters.includes(lowerCaseFilter)
      ? currentFilters.filter(f => f !== lowerCaseFilter)
      : [...currentFilters, lowerCaseFilter];
    
    console.log("newFilters", newFilters);
    // Update URL with new filters
    const allFilters = Object.entries({
      ...selectedFilters,
      [category]: newFilters
    })
      .flatMap(([_, values]) => values)
      .filter(Boolean);
    console.log("allFilters", allFilters);
    
    updateURL({ 
      f: allFilters.length > 0 ? allFilters.join(",") : null
    });
  }, [selectedFilters, updateURL]);
  
  const toggleCategory = useCallback((category: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        expanded: !prev[category].expanded,
      }
    }));
    console.log("filters", filters);
  }, []);
  
  const setPriceValue = useCallback((value: number) => {
    updateURL({ price: value > 0 ? value.toString() : null });
  }, [updateURL]);
  
  const setZipCode = useCallback((value: string) => {
    updateURL({ zip: value || null });
  }, [updateURL]);
  
  const setPriceDrop = useCallback((value: boolean) => {
    putPriceDrop(value);
  }, []);
  
  const setLocationDrop = useCallback((value: boolean) => {
    putLocationDrop(value);
  }, []);
  
  const updateFilterState = useCallback((updates: Partial<FilterState>) => {
    setFilterState(prev => ({ ...prev, ...updates }));
  }, []);
  
  const resetFilters = useCallback(() => {
    // Reset URL parameters
    updateURL({ 
      f: null,
      price: null,
      zip: null 
    });
    
    // Reset UI states
    setFilters(defaultFilters);
    setPriceDrop(false);
    setLocationDrop(false);
    setFilterState(defaultFilterState);
  }, [updateURL]);
  
  const setDefaultFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);
  
  // Initialize filters from sessionStorage on mount
  /*useEffect(() => {
    const savedFilters = sessionStorage.getItem("filters");
    console.log("savedFilters", savedFilters);
    if (savedFilters) {
      try {
        setFilters(JSON.parse(savedFilters));
      } catch (e) {
        console.error("Error parsing saved filters", e);
        setDefaultFilters();
      }
    } else {
      setDefaultFilters();
    }
  }, [setDefaultFilters]);*/
  
  // Save expanded/collapsed state to sessionStorage
  /*useEffect(() => {
    sessionStorage.setItem("filters", JSON.stringify(filters));
    console.log("filters", filters);
  }, [filters]); */
  
  // Collapse filter categories when all filters are cleared
  useEffect(() => {
    const hasAnyFilters = Object.values(selectedFilters).some(filters => filters.length > 0);
    console.log("hasAnyFilters", hasAnyFilters);
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
  
  const value: FilterContextType = {
    filters,
    selectedFilters,
    priceRange,
    setPriceValue,
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
    updateFilterState,
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