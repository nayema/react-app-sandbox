import { connectRoutes } from 'redux-first-router'

const routesMap = {
  HOME: '/',
  FORM: '/form'
}

const routes = () => {
  const {
    enhancer: routingEnhancer,
    middleware: routingMiddleware,
    reducer: routingReducer,
    initialDispatch
  } = connectRoutes(routesMap, { initialDispatch: false })
  return { routingEnhancer, routingMiddleware, routingReducer, initialDispatch }
}

export default routes
