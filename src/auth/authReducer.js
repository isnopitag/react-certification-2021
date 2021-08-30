import { types } from '../types/types';

export const AuthState = {
  id: '',
  name: '',
  avatarUrl: '',
  logged: false,
  favorites: [],
};

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      let { id, name, avatarUrl } = action.value;
      return { ...state, id: id, name: name, avatarUrl: avatarUrl, logged: true };
    case types.logout:
      return { ...state, id: '', name: '', avatarUrl: '', logged: false };
    case types.addFavorites:
      if (state.favorites.length > 0) {
        const videos = state.favorites.filter((f) => f.id === action.value.id);
        if (videos.length === 0) {
          state.favorites.push(action.value);
        }
      } else {
        state.favorites.push(action.value);
      }
      return { ...state };

    default:
      break;
  }
};
