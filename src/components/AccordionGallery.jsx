import { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';

const DEFAULT_ITEMS = [
  { image: 'https://picsum.photos/id/1015/900/1200', label: 'Canyon', link: '#' },
  { image: 'https://picsum.photos/id/1018/900/1200', label: 'Ridgeline', link: '#' },
  { image: 'https://picsum.photos/id/1039/900/1200', label: 'Falls', link: '#' },
  { image: 'https://picsum.photos/id/1043/900/1200', label: 'Harbour', link: '#' },
  { image: 'https://picsum.photos/id/1044/900/1200', label: 'Skyline', link: '#' }
];

const AccordionGallery = ({
  items = DEFAULT_ITEMS,
  defaultIndex = 2,
  accentColor = '#ffffff',
  overlayColor = '#060010',
  textColor = '#ffffff',
  height = 460,
  gap = 10,
  radius = 16,
  expandRatio = 0.52,
  orientation = 'horizontal',
  duration = 0.6,
  ease = 'power3.out',
  parallax = 0.5,
  tilt = 8,
  stagger = 0.06,
  trigger = 'hover',
  showLabels = true,
  grayscale = false,
  className = ''
}) => {
  const rootRef = useRef(null);
  const panelRefs = useRef([]);
  const mediaRefs = useRef([]);
  const barRefs = useRef([]);
  const textRefs = useRef([]);
  const tlRef = useRef(null);
  const firstRunRef = useRef(true);
  const mediaSizeRef = useRef(320);
  const isMobileRef = useRef(false);

  const vertical = orientation === 'vertical';

  const checkMobile = () => {
    isMobileRef.current = typeof window !== 'undefined' && window.innerWidth <= 520;
  };
  checkMobile();
  const count = items.length;
  const [active, setActive] = useState(Math.min(Math.max(defaultIndex, 0), count - 1));

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const overlayBg = `linear-gradient(180deg, transparent 45%, color-mix(in srgb, ${overlayColor} 78%, transparent) 100%), color-mix(in srgb, ${overlayColor} calc(var(--ag-dim, 0.35) * 100%), transparent)`;

  const applyLayout = useCallback(
    animate => {
      const panels = panelRefs.current;
      if (!panels.length) return;

      const isMob = isMobileRef.current;
      const useVertical = vertical || isMob;
      const r = Math.min(Math.max(expandRatio, 0.2), 0.9);
      const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;
      const mediaSize = mediaSizeRef.current;

      tlRef.current?.kill();
      const dur = animate && !prefersReduced ? duration : 0;
      const tl = gsap.timeline();

      panels.forEach((panel, i) => {
        if (!panel) return;
        const isActive = isMob ? true : i === active;
        const media = mediaRefs.current[i];
        const bar = barRefs.current[i];
        const text = textRefs.current[i];

        const rot = isActive ? 0 : i < active ? tilt : -tilt;
        const rotProp = useVertical ? { rotateX: -rot } : { rotateY: rot };

        tl.to(panel, { flexGrow: isActive ? grow : 1, ...rotProp, duration: dur, ease }, 0);

        if (media) {
          const drift = Math.max(-1.5, Math.min(1.5, active - i));
          const shift = drift * parallax * mediaSize * 0.06;
          const gray = grayscale ? (isActive ? 0 : 1) : 0;
          tl.to(
            media,
            {
              xPercent: -50,
              yPercent: -50,
              x: useVertical ? 0 : isActive ? 0 : shift,
              y: useVertical ? (isActive ? 0 : shift) : 0,
              '--ag-gray': gray,
              '--ag-dim': isActive ? 0 : 0.35,
              duration: dur,
              ease
            },
            0
          );
        }

        if (showLabels && bar && text) {
          if (isActive) {
            tl.to([bar, text], { opacity: 1, x: 0, duration: dur, ease, stagger: prefersReduced ? 0 : stagger }, 0);
          } else {
            tl.to([bar, text], { opacity: 0, x: -14, duration: dur * 0.6, ease }, 0);
          }
        }
      });

      tlRef.current = tl;
    },
    [
      active,
      count,
      expandRatio,
      duration,
      ease,
      vertical,
      tilt,
      parallax,
      grayscale,
      showLabels,
      stagger,
      prefersReduced
    ]
  );

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      checkMobile();
      const isMob = isMobileRef.current;
      const useVertical = vertical || isMob;
      const total = useVertical ? rect.height : rect.width;
      const usable = Math.max(total - gap * (count - 1), 120);
      const size = Math.max(140, usable * Math.min(Math.max(expandRatio, 0.2), 0.9) * 1.22);
      mediaSizeRef.current = size;
      el.style.setProperty('--ag-media-size', `${size}px`);
      applyLayout(!firstRunRef.current);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [applyLayout, gap, count, expandRatio, vertical]);

  useEffect(() => {
    applyLayout(!firstRunRef.current);
    firstRunRef.current = false;
  }, [applyLayout]);

  useEffect(
    () => () => {
      tlRef.current?.kill();
    },
    []
  );

  const handleEnter = i => {
    if (trigger !== 'hover') return;
    if (typeof window !== 'undefined' && window.innerWidth <= 520) return;
    if (isMobileRef.current) return;
    setActive(i);
  };

  const handleClick = (i, e) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && window.innerWidth <= 520) return;
    if (isMobileRef.current) return;
    setActive(i);
  };

  const handleKeyDown = (i, e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i + 1) % count);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i - 1 + count) % count);
    }
  };

  return (
    <div
      ref={rootRef}
      className={`flex ${vertical ? 'flex-col' : 'flex-row'} w-full max-w-full [perspective:1400px] max-[520px]:!flex-col max-[520px]:[perspective:none] ${className}`}
      style={{ gap: `${gap}px`, height: (vertical || isMobileRef.current) ? `${Math.round(height * 1.6)}px` : `${height}px` }}
      role="list"
      aria-label="Image accordion gallery"
    >
      {items.map((item, i) => {
        const isActive = i === active;
        const Tag = item.link ? 'a' : 'div';
        return (
          <Tag
            key={i}
            ref={el => (panelRefs.current[i] = el)}
            className="group relative block min-w-0 min-h-0 flex-[1_1_0] cursor-pointer overflow-hidden bg-white/80 no-underline outline-none [transform-style:preserve-3d] [transform-origin:center]  focus-visible:[box-shadow:0_0_0_2px_var(--ag-accent)] max-[520px]:min-h-[84px] max-[520px]:!transform-none max-[520px]:!rounded-[6px]"
            style={{ borderRadius: `${radius}px`, '--ag-accent': accentColor, willChange: 'flex-grow, transform' }}
            href={item.link || undefined}
            onClick={e => handleClick(i, e)}
            onMouseEnter={() => handleEnter(i)}
            onFocus={() => {
              if (typeof window !== 'undefined' && window.innerWidth <= 520) return;
              if (isMobileRef.current) return;
              setActive(i);
            }}
            onKeyDown={e => handleKeyDown(i, e)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? 'true' : undefined}
            aria-label={item.label}
          >
            <span className="absolute inset-0 overflow-hidden [border-radius:inherit]">
              <span
                ref={el => (mediaRefs.current[i] = el)}
                className="absolute top-1/2 left-1/2 [filter:grayscale(var(--ag-gray,1))]"
                style={{
                  width: (vertical || isMobileRef.current) ? '100%' : 'var(--ag-media-size, 320px)',
                  height: (vertical || isMobileRef.current) ? 'var(--ag-media-size, 320px)' : '100%',
                  willChange: 'transform, filter'
                }}
              >
                <img
                  src={item.image}
                  alt={item.alt || item.label || ''}
                  draggable="false"
                  className="block h-full w-full select-none object-cover [-webkit-user-drag:none]"
                />
              </span>
              <span
                className="ag-overlay pointer-events-none absolute inset-0 max-[520px]:!hidden"
                style={{ background: overlayBg }}
                aria-hidden="true"
              />
            </span>
            {showLabels && (
              <span
                className={`pointer-events-none absolute bottom-0 left-0 z-[2] flex max-w-[85%] items-center gap-3 border-0 bg-transparent py-2.5 pl-5 pr-5 shadow-none backdrop-blur-0 max-[520px]:border max-[520px]:border-white/30 max-[520px]:border-b-0 max-[520px]:bg-[color-mix(in_srgb,var(--ag-accent)_35%,transparent)] max-[520px]:py-2 max-[520px]:pl-3 max-[520px]:pr-4 max-[520px]:shadow-[0_8px_24px_rgba(13,42,73,0.25)] max-[520px]:backdrop-blur-[10px] ${
                  i % 2 === 1
                    ? 'border-l-0 max-[520px]:!left-0 max-[520px]:!right-auto max-[520px]:!rounded-tr-[6px] max-[520px]:!rounded-tl-none max-[520px]:!border-l-0 max-[520px]:!border-r'
                    : 'border-l-0 max-[520px]:!left-auto max-[520px]:!right-0 max-[520px]:!rounded-tr-none max-[520px]:!rounded-tl-[6px] max-[520px]:!border-l max-[520px]:!border-r-0'
                }`}
                aria-hidden="true"
              >
                <span
                  ref={el => (barRefs.current[i] = el)}
                  className="h-[26px] w-[3px] flex-none rounded-[3px] opacity-0 max-[520px]:!hidden"
                  style={{
                    background: accentColor,
                    boxShadow: `0 0 12px color-mix(in srgb, ${accentColor} 60%, transparent)`
                  }}
                />
                <span
                  ref={el => (textRefs.current[i] = el)}
                  className="overflow-hidden text-ellipsis whitespace-nowrap text-[clamp(1rem,1.4vw,1.4rem)] font-semibold tracking-[0.01em] opacity-0 [text-shadow:0_2px_14px_rgba(0,0,0,0.55)] max-[520px]:!translate-x-0 max-[520px]:!text-[0.85rem] max-[520px]:!opacity-100 max-[520px]:[text-shadow:0_1px_10px_rgba(0,0,0,0.9),0_0_3px_rgba(0,0,0,0.9)]"
                  style={{ color: textColor }}
                >
                  <span className="max-[520px]:hidden">{item.label}</span>
                  <span className="hidden max-[520px]:inline">{item.label.split(',')[0].trim()}</span>
                </span>
              </span>
            )}
          </Tag>
        );
      })}
    </div>
  );
};

export default AccordionGallery;
