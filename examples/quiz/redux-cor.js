function createStore(reducer) {
  let currentState;
  let subscribers = [];

  function dispatch(action) {
    currentState = reducer(currentState, action);
    subscribers.forEach((s) => s());
  }

  function getState() {
    return currentState;
  }

  function subscribe(subscriber) {
    subscribers.push(subscriber);
    return function unsubscribe() {};
  }

  dispatch({ type: 'INIT' });

  return {
    dispatch,
    getState,
  };
}
