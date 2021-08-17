import { theme } from './theme';

export const initialState = {
  currentTheme: !theme[JSON.parse(localStorage.getItem('theme'))]
    ? theme.light
    : theme[JSON.parse(localStorage.getItem('theme'))],
  search: 'wizeline',
  view: false,
};

export function reducer(state, action) {
  switch (action.type) {
    case 'setSearch':
      return { ...state, search: action.value, view: false };
    case 'setView':
      return { ...state, view: action.value };
    case 'setTheme':
      return { ...state, currentTheme: action.value };
    case 'updateTheme':
      return {
        ...state,
        currentTheme: { ...theme[state.currentTheme.id], ...action.value },
      };
    case 'toggleTheme': {
      const newThemeKey = state.currentTheme.id === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', JSON.stringify(newThemeKey));
      return { ...state, currentTheme: theme[newThemeKey] };
    }
    default:
      throw new Error();
  }
}
