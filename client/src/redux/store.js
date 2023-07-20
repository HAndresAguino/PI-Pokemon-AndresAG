import {createStore, applyMiddleware, compose} from "redux"
import thunkMiddleware from "redux-thunk"
import reducer from "./reducer";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose; //Con esto funciona la extensión de chrome 


const Store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) //Con esta hacemos peticiones a una API 

)

export default Store