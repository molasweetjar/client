const initCategory = {
  loading: false,
  error: '',
  category: []
}

export default (state = initCategory, action) => {
  if(action.type === 'CATEGORY_LOADING') return { ...state, loading: true };
  else if(action.type === 'CATEGORY_SUCCESS') return { ...state, loading: false, category: action.payload };
  else if(action.type === 'CATEGORY_ERROR') return { ...state, error: action.payload, loading: false };
  else return { ...state }
}