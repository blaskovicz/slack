export const WS_URI = `ws${window.location.protocol === 'https:' ? 's' : ''}://${window.location.hostname === 'localhost' ? ('localhost:'+(process.env.BACKEND_PORT||'3000')) : window.location.host }/stream`;