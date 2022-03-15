/*
 * @Description: 
 * @Autor: wxy
 * @Date: 2022-03-15 19:11:36
 * @LastEditors: wxy
 * @LastEditTime: 2022-03-15 19:47:46
 */
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

const container = document.getElementById('app');
if (container !== null) {
  const root = createRoot(container);
  root.render(<App/>);
}