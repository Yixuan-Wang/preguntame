if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/preguntame/sw.js', { scope: '/preguntame/' })})}