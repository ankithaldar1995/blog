export var INCREMENT = 'INCREMENT';
export var DECREMENT = 'DECREMENT';
export var RESET = 'RESET';
export function counterReducer(state, action) {
    if (state === void 0) { state = 0; }
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case RESET:
            return 0;
        default:
            return state;
    }
}
//# sourceMappingURL=E:/AngularJS 2/grabing data from Node server/grabFromNode - blog/src/app/add-post-dialog/counter.js.map