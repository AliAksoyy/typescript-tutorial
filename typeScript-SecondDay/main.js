// **Generic Examples *************************************1**********************************
var useState = function (initStore) {
    var store = initStore;
    function setState(newStore) {
        store = newStore;
        return store;
    }
    return [store, setState];
};
var _a = useState({
    email: "",
    password: "",
}), state = _a[0], setState = _a[1];
console.log(state);
console.log(setState({ email: "emre", password: "emre" }));
