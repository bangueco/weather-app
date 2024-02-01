import './css/style.css';
import './modules/EventListeners.js';
import { searchCity } from './modules/Logic.js';

window.onload = () => {
  searchCity('Samal Bataan');
};