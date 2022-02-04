import { useEffect, useState } from 'react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false); 

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='fixed bottom-2 right-2'>
      <button type='button' onClick={scrollToTop} className={isVisible ? 'scroll-top-button' : 'd-none'}>
        <i class="fas fa-arrow-up scroll-top-icon"></i>
      </button>
    </div>
  );
};




