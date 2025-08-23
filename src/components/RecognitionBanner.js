import React, { useEffect, useState } from 'react';

const RecognitionBanner = ({ leftLogo = '/N24PDCA.webp', rightLogo = '/sbds.webp', className = '' }) => {
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
  ? 'bg-black bg-opacity-20 text-cyan-300 border border-cyan-400/8'
  : theme === 'aspire'
  ? 'bg-transparent text-slate-100 border-transparent'
  : 'bg-gray-50 text-gray-800 border-gray-200 dark:bg-slate-900 dark:text-gray-100 dark:border-slate-700';

  const innerClasses = theme === 'aspire'
    ? 'backdrop-blur-sm bg-slate-900/45 border border-slate-700/30 rounded-md px-3 py-1'
    : theme === 'kca'
    ? 'backdrop-blur-sm bg-black/30 border border-cyan-400/10 rounded-md px-3 py-1'
    : '';

  const logoBg = theme === 'aspire' ? 'bg-white/8' : theme === 'kca' ? 'bg-black/30 ring-1 ring-cyan-400/8' : 'bg-white/70 dark:bg-slate-800/60';

  const dividerClass = theme === 'kca' ? 'mx-4 h-6 w-px bg-cyan-400/20 dark:bg-cyan-500/10' : 'mx-4 h-6 w-px bg-amber-200/60 dark:bg-slate-600/40';

  return (
    <section
      aria-label="Site recognition banner"
      className={`py-2 border-t border-b ${wrapperClasses} ${className}`}
    >
    <div className={`max-w-7xl mx-auto px-2 sm:px-4 ${innerClasses}`}>
      {/* Mobile View - Stacked Layout */}
      <div className="sm:hidden flex flex-col gap-2">
        <div className="flex items-center justify-center gap-2">
          <img src={leftLogo} alt="Kolkata District Chess Association logo" className={`h-7 w-auto object-contain rounded-sm shadow-sm ${logoBg} p-0.5`} />
          <div className="text-center">
            <div className="text-xs font-semibold opacity-90">Affiliated to</div>
            <div className="text-xs font-bold leading-tight">North 24 Parganas District Chess Association</div>
          </div>
        </div>
        
        <div className={`${dividerClass.replace('h-6 w-px', 'h-px w-full')} my-1`} aria-hidden="true" />
        
        <div className="flex items-center justify-center gap-2">
          <img src={rightLogo} alt="Sara Bangla Daba Sangstha logo" className={`h-7 w-auto object-contain rounded-sm shadow-sm ${logoBg} p-0.5`} />
          <div className="text-center">
            <div className="text-xs font-semibold opacity-90">Recognized by</div>
            <div className="text-xs font-bold leading-tight">Sara Bangla Daba Sangstha</div>
          </div>
        </div>
      </div>

      {/* Desktop View - Horizontal Layout */}
      <div className="hidden sm:flex flex-row items-center justify-between gap-4 lg:gap-6 overflow-hidden">
        <div className="flex items-center gap-2 lg:gap-3 flex-shrink-0 min-w-0">
          <img src={leftLogo} alt="Kolkata District Chess Association logo" className={`h-8 lg:h-9 w-auto object-contain rounded-sm shadow-sm ${logoBg} p-0.5`} />
          <div className="leading-tight min-w-0">
            <span className="sr-only">Affiliation:</span>
            <div className="text-xs lg:text-sm font-bold">
              <span className="text-xs font-semibold opacity-90 mr-1 lg:mr-2 block sm:inline">Affiliated to</span>
              <span className="block sm:inline">North 24 Parganas District Chess Association</span>
            </div>
          </div>
        </div>

        <div className={`${dividerClass} flex-shrink-0 hidden md:block`} aria-hidden="true" />

        <div className="flex items-center gap-2 lg:gap-3 flex-shrink-0 min-w-0">
          <img src={rightLogo} alt="Sara Bangla Daba Sangstha logo" className={`h-8 lg:h-9 w-auto object-contain rounded-sm shadow-sm ${logoBg} p-0.5`} />
          <div className="leading-tight min-w-0 text-right">
            <span className="sr-only">Recognition:</span>
            <div className="text-xs lg:text-sm font-bold">
              <span className="text-xs font-semibold opacity-90 mr-1 lg:mr-2 block sm:inline">Recognized by</span>
              <span className="block sm:inline">Sara Bangla Daba Sangstha</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default React.memo(RecognitionBanner);
