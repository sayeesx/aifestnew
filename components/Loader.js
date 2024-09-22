import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Loader = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      {/* Show Loading Animation if Network Delay or Route Change */}
      {loading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      )}
    </>
  );
};

export default Loader;
