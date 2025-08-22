import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    if (!hash) {
      // No hash: smooth-scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // When the target element may render after route change, poll briefly
    const id = hash.startsWith('#') ? hash : `#${hash}`;
    let attempts = 0;
    const maxAttempts = 10; // try for ~1s (10 * 100ms)

    const tryScroll = () => {
      const element = document.querySelector(id);
      if (element) {
        // Smooth scroll to the element
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // For accessibility, move focus to the element. If it's not focusable,
        // temporarily set tabindex="-1" and focus, then remove tabindex on blur.
        try {
          const alreadyFocusable = element.tabIndex >= 0;
          if (!alreadyFocusable) {
            element.setAttribute('tabindex', '-1');
            const onBlur = () => {
              element.removeAttribute('tabindex');
              element.removeEventListener('blur', onBlur);
            };
            element.addEventListener('blur', onBlur);
            element.focus({ preventScroll: true });
          } else {
            element.focus({ preventScroll: true });
          }
        } catch (e) {
          // ignore focus errors on older browsers
        }

        return true;
      }
      return false;
    };

    if (!tryScroll()) {
      const idPoll = setInterval(() => {
        attempts += 1;
        if (tryScroll() || attempts >= maxAttempts) {
          clearInterval(idPoll);
          if (attempts >= maxAttempts) {
            // fallback: scroll to top if target not found
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      }, 100);

      return () => clearInterval(idPoll);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
