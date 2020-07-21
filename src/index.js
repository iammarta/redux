import {createStore} from 'redux';


const reducer = (state = 23, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RES':
            return 0;
        default:
            return state;
    }
};

const store = createStore(reducer);

document.getElementById('incr').addEventListener('click', ()=>{
    store.dispatch({type: 'INC'});
});

document.getElementById('decr').addEventListener('click', ()=>{
    store.dispatch({type: 'DEC'});
});

document.getElementById('reset').addEventListener('click', ()=>{
    store.dispatch({type: 'RES'});
});

const update = () => {
    document.getElementById('number').textContent = store.getState();
};

store.subscribe(update);