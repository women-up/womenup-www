import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

// Publiczny klucz witryny Cloudflare Turnstile (bezpieczny w kodzie klienta).
const TURNSTILE_SITE_KEY = "0x4AAAAAADpNIoLdu3Ulx4x3";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id?: string) => void;
      remove: (id?: string) => void;
    };
  }
}

export interface TurnstileHandle {
  reset: () => void;
}

interface TurnstileProps {
  /** Wywoływane z tokenem po pomyślnym rozwiązaniu wyzwania. */
  onVerify: (token: string) => void;
  /** Wywoływane gdy token wygaśnie lub wystąpi błąd (wyczyść token w rodzicu). */
  onExpire?: () => void;
  className?: string;
}

const Turnstile = forwardRef<TurnstileHandle, TurnstileProps>(({ onVerify, onExpire, className }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onVerifyRef = useRef(onVerify);
  const onExpireRef = useRef(onExpire);
  onVerifyRef.current = onVerify;
  onExpireRef.current = onExpire;

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (widgetIdRef.current && window.turnstile) window.turnstile.reset(widgetIdRef.current);
    },
  }));

  useEffect(() => {
    const SCRIPT_ID = "cf-turnstile-script";

    const renderWidget = () => {
      if (containerRef.current && window.turnstile && widgetIdRef.current === null) {
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token: string) => onVerifyRef.current(token),
          "expired-callback": () => onExpireRef.current?.(),
          "error-callback": () => onExpireRef.current?.(),
        });
      }
    };

    let poll: ReturnType<typeof setInterval> | undefined;
    if (window.turnstile) {
      renderWidget();
    } else if (!document.getElementById(SCRIPT_ID)) {
      const s = document.createElement("script");
      s.id = SCRIPT_ID;
      s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      s.async = true;
      s.defer = true;
      s.onload = renderWidget;
      document.head.appendChild(s);
    } else {
      poll = setInterval(() => {
        if (window.turnstile) {
          clearInterval(poll);
          renderWidget();
        }
      }, 200);
    }

    return () => {
      if (poll) clearInterval(poll);
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} className={className} />;
});

Turnstile.displayName = "Turnstile";

export default Turnstile;
