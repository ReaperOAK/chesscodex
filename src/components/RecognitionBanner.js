import React, { useEffect, useState } from 'react';

const RecognitionBanner = ({ leftLogo = '/kca.png', rightLogo = '/aca.png', className = '' }) => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const body = document.body;
    const detect = () => {
      if (body.classList.contains('theme-kca')) return 'kca';
      if (body.classList.contains('theme-aspirechess') || body.classList.contains('theme-aspire')) return 'aspire';
      return '';
    };
    setTheme(detect());
    const obs = new MutationObserver(() => setTheme(detect()));
    obs.observe(body, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  const wrapperClasses =
    theme === 'kca'
  ? 'bg-amber-50 text-amber-900 border-amber-200'
  : theme === 'aspire'
  ? 'bg-transparent text-slate-100 border-transparent'
  : 'bg-gray-50 text-gray-800 border-gray-200 dark:bg-slate-900 dark:text-gray-100 dark:border-slate-700';

  const innerClasses = theme === 'aspire'
    ? 'backdrop-blur-sm bg-slate-900/45 border border-slate-700/30 rounded-md px-3 py-1'
    : '';

  const logoBg = theme === 'aspire' ? 'bg-white/8' : 'bg-white/70 dark:bg-slate-800/60';

  return (
    <section
      aria-label="Site recognition banner"
      className={`py-2 border-t border-b ${wrapperClasses} ${className}`}
    >
    <div className={`max-w-7xl mx-auto px-4 ${innerClasses} flex flex-row items-center justify-between gap-6 flex-nowrap overflow-hidden whitespace-nowrap`}>
        <div className="flex items-center gap-3 flex-shrink-0 min-w-0">
      <img src={leftLogo} alt="Kolkata District Chess Association logo" className={`h-9 w-auto object-contain rounded-sm shadow-sm ${logoBg} p-0.5`} />
          <div className="leading-tight min-w-0 whitespace-nowrap">
            <span className="sr-only">Affiliation:</span>
            <span className="text-sm font-bold truncate">
              <span className="text-xs font-semibold opacity-90 mr-2 align-middle">Affiliated to</span>
              <span className="align-middle">North 24 Parganas District Chess Association</span>
            </span>
          </div>
        </div>

        <div className="mx-4 h-6 w-px bg-amber-200/60 dark:bg-slate-600/40 flex-shrink-0" aria-hidden="true" />

        <div className="flex items-center gap-3 flex-shrink-0 min-w-0">
          <img src={rightLogo} alt="Sara Bangla Daba Sangstha logo" className={`h-9 w-auto object-contain rounded-sm shadow-sm ${logoBg} p-0.5`} />
          <div className="leading-tight min-w-0 text-right whitespace-nowrap">
            <span className="sr-only">Recognition:</span>
            <span className="text-sm font-bold truncate">
              <span className="text-xs font-semibold opacity-90 mr-2 align-middle">Recognized by</span>
              <span className="align-middle">Sara Bangla Daba Sangstha</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(RecognitionBanner);
