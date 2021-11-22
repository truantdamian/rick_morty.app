import { createContext, useReducer } from 'react'
export const AppContext = createContext(null)
export const actions = {
  addFavorite: 'addFavorite',
  removeFavorite: 'removeFavorite',
  toggleFavorite: 'toggleFavorite',
  search: 'search',
}
const AppContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case actions.addFavorite:
        return { ...state, favorites: [...state.favorites, action.payload] }
      case actions.removeFavorite:
        return {
          ...state,
          favorites: [
            state.favorites.filter((x) => x.id !== action.payload.id),
          ],
        }
      case actions.toggleFavorite:
        return state.favorites.some((x) => x.id === action.payload.id)
          ? {
              ...state,
              favorites: [
                ...state.favorites.filter((x) => x.id !== action.payload.id),
              ],
            }
          : { ...state, favorites: [...state.favorites, { ...action.payload }] }
      case actions.search:
        return { ...state, search: action.payload }
    }
  }

  const initialState = {
    search: '',
    favorites: [],
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
