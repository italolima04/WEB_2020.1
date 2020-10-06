export default {
    changeNumberOne(numberOne) {
        return { type: "CHANGE_NUMBER_ONE", payload: numberOne };
    },
    changeNumberTwo(numberTwo) {
        return { type: "CHANGE_NUMBER_TWO", payload: numberTwo };
    },
};