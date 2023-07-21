const contentSecurityPolicyItems = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-eval' *.berneck.com.br berneck.pertinhodemim.com *.google-analytics.com *.jquery.com *.cloudfront.net *.googletagmanager.com *.instagram.com *.pinterest.com *.elfsight.com *.facebook.net *.facebook.com *.juicer.io 'unsafe-inline'",
  "style-src 'self' *.berneck.com.br *.instagram.com berneck.pertinhodemim.com *.jquery.com *.googleapis.com 'unsafe-inline'",
  "img-src 'self' *.ytimg.com *.berneck.com.br *.instagram.com berneck.pertinhodemim.com *.google-analytics.com data: *.pinimg.com *.pinterest.com",
  "font-src 'self' *.berneck.com.br *.instagram.com berneck.pertinhodemim.com *.jquery.com *.gstatic.com *.googleapis.com fonts.gstatic.com",  // Added fonts.gstatic.com here
  "connect-src 'self' *.ytimg.com *.berneck.com.br *.instagram.com berneck.pertinhodemim.com *.doubleclick.net *.google-analytics.com *.googleapis.com *.rdstation.com.br *.facebook.com *.juicer.io fonts.gstatic.com devapisite.berneck.com.br",  // Added fonts.gstatic.com and devapisite.berneck.com.br here
  "media-src 'self'",
  "object-src 'self' data:",
  "prefetch-src 'self'",
  "child-src 'self'",
  "frame-src 'self' *.berneck.com.br *.instagram.com berneck.pertinhodemim.com *.linkedin.com *.youtube.com *.facebook.com *.juicer.io",
  "worker-src 'self' *.berneck.com.br berneck.pertinhodemim.com",
  "frame-ancestors 'self'",
  "form-action 'self'",
  'upgrade-insecure-requests',
  'block-all-mixed-content',
  "base-uri 'self'",
  "manifest-src 'self'"
];

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Permissions-Policy',
    value: 'accelerometer=(), ambient-light-sensor=(), autoplay=(), battery=(), camera=(), cross-origin-isolated=(), display-capture=(), document-domain=(), encrypted-media=(), execution-while-not-rendered=(), execution-while-out-of-viewport=(), fullscreen=(), geolocation=(self), gyroscope=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), navigation-override=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), web-share=(), xr-spatial-tracking=()'
  },
  {
    key: 'Content-Security-Policy',
    value: contentSecurityPolicyItems.join('; ')
  },
  {
    key: 'Referrer-Policy',
    value: 'no-referrer'
  }
];

module.exports = securityHeaders;
