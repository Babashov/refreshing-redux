const redux = require('redux')

const counterReducer = (state = {counter:0},action)=>{

    return {
        counter:state.counter + 1
    }
}

const store = redux.createStore(counterReducer)
console.log('after creating redux store',store.getState());

const counterSubscriber = ()=>{
    console.log('after counterSubscriber',store.getState());
}

store.subscribe(counterSubscriber);

store.dispatch({type:'increment'})
store.dispatch({type:'testing'})