import { searchDOM } from './DOM';
import { searchCity } from './Logic';

searchDOM.search_button.addEventListener('click', () => {
  searchCity(searchDOM.getSearchInputValue());
});