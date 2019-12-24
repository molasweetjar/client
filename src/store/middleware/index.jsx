import axios from '../../apis'

export default state => next => async action => {
  console.log(action)
  if(action.typeCategory){
    next({ type: `${action.typeCategory}_LOADING` })
    try{
      const { data } = await axios({method: 'get', url: action.url });
      next({ type: `${action.typeCategory}_SUCCESS`, payload: data.category })
    } catch(err) { next({ type: `${action.typeCategory}_ERROR`, payload: err.response })}
  }else if(action.typeSignin) {
    next({ type: `${action.typeSignin}_LOADING` })
    try {
      const { data } = await axios({ method: action.method, url: action.url, headers: { token: action.token }, data: action.payload })
      if(data.token) {
        localStorage.setItem('token', data.token);
        next({ type: `${action.typeSignin}_SUCCESS`, payload: data.user })
      } else next({ type: `${action.typeSignin}_SUCCESS`, payload: data.user })
    } catch(err) { next({ type: `${action.typeSignin}_ERROR`, payload: err.response })}
  } else {
    console.log('masuk sini harusnya')
    next({ type: action.type })
  }
}