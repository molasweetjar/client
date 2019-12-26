export const getCategory = () => ({ typeCategory: 'CATEGORY', url: '/category' });

export const signinUser = ({ request, password }) => ({ typeSignin: 'SIGNIN', url: '/signin', method: 'post', payload: { request, password } });

export const getSignIn = () => ({ typeSignin: 'CHECK', url: '/', token: localStorage.getItem('token'), method: 'get' });

export const signoutUser = () => ({ type: "SIGNOUT" })

export const signinGOOGLE = ({ id_token }) => ({ typeSignin: 'SIGNIN', url: '/signinG', method: 'post', payload: { id_token } })