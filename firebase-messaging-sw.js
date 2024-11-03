importScripts(
    'https://www.gstatic.com/firebasejs/9.8.0/firebase-app-compat.js',
);
importScripts(
    'https://www.gstatic.com/firebasejs/9.8.0/firebase-messaging-compat.js',
);

const app = firebase.initializeApp({
    apiKey: "AIzaSyAn3twDOY8R6UdZHIH61JRJBcgugKZ4c-8",
    authDomain: "todo-3cb9c.firebaseapp.com",
    projectId: "todo-3cb9c",
    storageBucket: "todo-3cb9c.firebasestorage.app",
    messagingSenderId: "248782058104",
    appId: "1:248782058104:web:5a5242730aaf65dcb9338d",
    measurementId: "G-PJ7X8XN4HX"
});

firebase.messaging(app);