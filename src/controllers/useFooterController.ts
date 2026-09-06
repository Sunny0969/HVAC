import { useState, useCallback } from "react";
import { navigationData, floridaCities } from "../models/navigationModel";

export function useFooterController() {
  const [isAreasOpen, setIsAreasOpen] = useState(false);

  const toggleAreas = useCallback(() => {
    setIsAreasOpen((prev) => !prev);
  }, []);

  return {
    navigationData,
    floridaCities,
    isAreasOpen,
    toggleAreas,
  };
}
