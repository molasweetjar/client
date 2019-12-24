const initUser = {
  isSignin: false,
  loading: false,
  error: '',
  user: {}
}

export default (state = initUser, action) => {
  if(action.type === 'SIGNIN_LOADING' || action.type === 'CHECK_LOADING') return { ...state, loading: true };
  else if(action.type === 'SIGNIN_SUCCESS' || action.type === 'CHECK_SUCCESS') return { ...state, isSignin: true, user: action.payload, loading: false };
  else if(action.type === 'SIGNIN_ERROR' || action.type === 'CHECK_ERROR') return { ...state, loading: false, error: action.payload };
  else if(action.type === 'SIGNOUT') return { ...state, user: {}, isSignin: false }
  else return { ...state }
}