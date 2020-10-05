export default {
    setNumberOne(numberOne) {
        return { type: "CHANGE_NUMBER_ONE", payload: Number };
    },
    setNumberTwo(numberTwo) {
        return { type: "CHANGE_NUMBER_TWO", payload: Number };
    },
};