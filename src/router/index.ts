// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

export default function (/* { store, ssrContext } */) {
  const Router = createRouter({
    // Используйте hash-режим для GitHub Pages
    history: createWebHashHistory(),
    routes,

    // Настройка для scroll behavior
    scrollBehavior: () => ({ left: 0, top: 0 }),
  });

  return Router;
}
