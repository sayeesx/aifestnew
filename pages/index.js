import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false); // Loading state for network issues
  const [currentWord, setCurrentWord] = useState('Register'); // Control which word is displayed

  const handleRegisterClick = () => {
    setLoading(true); // Show loading animation when navigating
    router.push('/register');
  };

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true); // Show loading animation when route change starts
    };

    const handleRouteChangeComplete = () => {
      setLoading(false); // Hide loading animation when route change completes
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  // Control the rolling text
  useEffect(() => {
    const words = ['Register', 'Now'];
    let index = 0;

    const intervalId = setInterval(() => {
      index = (index + 1) % words.length;
      setCurrentWord(words[index]);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <div className="home-container">
        <h1 className="main-heading">AI FEST</h1>
        <div className="register-button-container">
          <button className="register-button" onClick={handleRegisterClick}>
            <span className="rolling-text">{currentWord}</span>
          </button>
        </div>
        <p className="subheading">Welcome to the AI event at Empire College of Science!</p>
      </div>

     
      <div className="footer">Co-sponsored by the BCA Department</div>
    </>
  );
}
