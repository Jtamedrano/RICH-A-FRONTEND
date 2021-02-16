import { useEffect, useState } from 'react';

const useDimension = () => {
  const [state, setState] = useState({
    x: window.screen.availWidth,
    y: window.screen.availHeight,
  });
  const resize = () => {
    setState({ x: window.screen.availWidth, y: window.screen.availWidth });
  };
  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return state;
};

export default useDimension;
