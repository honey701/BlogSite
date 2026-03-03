import React, { createContext, useContext, useState } from "react";

const RouterContext = createContext(null);

export function RouterProvider({ children }) {
  const [currentSlug, setCurrentSlug] = useState(null);

  function navigate(slug) {
    setCurrentSlug(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goBack() {
    setCurrentSlug(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <RouterContext.Provider value={{ currentSlug, navigate, goBack }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}
