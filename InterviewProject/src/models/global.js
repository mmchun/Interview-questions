
const Global = {
    namespace: 'global',

    state: {
        name: 0,
    },

    effects: {
        *query({ payload }, { call, put }) {
            yield put({
                type: 'save',
                payload,
            });
        },
    },
    reducers: {
        save(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
    subscriptions: {},
};

export default Global;