import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Drop this inside <BrowserRouter> in App.jsx.
// It watches the URL and instantly scrolls to top on every navigation.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
