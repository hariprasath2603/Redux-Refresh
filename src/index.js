import store from './store';


store.dispatch({
    type:"bugAdded",
    payload:{
        description: " Hello i am bung one"
    }
});


store.dispatch({
    type:"bugAdded",
    payload:{
        description: " Hello i am bung two"
    }
});

store.dispatch({
    type:"bugResolved",
    payload:{
        id:1
    }
});

// store.dispatch({
//     type:"bugRemoved",
//     payload:{
//         id:1
//     }
// });
console.log(store.getState());
