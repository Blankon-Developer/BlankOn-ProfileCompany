// Helper functions for Google Analytics / Google Ads tracking

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || "G-RXQK1PCGCB";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Log pageview (biasanya otomatis dilacak oleh gtag.js saat navigasi)
 */
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

/**
 * Log custom conversion event (misal: submit form onboarding, klik tombol WhatsApp, kontak, dll)
 * @param action Nama event (misal: 'generate_lead', 'contact_submit', 'whatsapp_click')
 * @param params Data pendukung event
 */
export const trackEvent = (
  action: string,
  params?: Record<string, string | number | boolean | undefined>
) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, params);
  }
};
