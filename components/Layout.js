import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const [loading, setLoading] = useState(false);

  // Simulate loading for demonstration purposes
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    // Simulate a loading event (e.g., fetching data)
    handleStart();
    const timer = setTimeout(handleComplete, 3000); // Simulate loading duration

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <div className="main-layout">
      <header className="topbar">
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/register">Register</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </header>
      {loading && <div className="loading-spinner"></div>} {/* Show loading spinner */}
      <main className="scrollable-content">{children}</main>
      <footer className="footer">
        <p>© 2024 AI FEST - All Rights Reserved</p>
      </footer>
    </div>
  );
}
