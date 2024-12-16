import { sum } from "../helpers/sum.js";

describe("the sum function", () => {
    test("two plus two is four", () => {
        let first = 2;
        let second = 2;
        let expection = 4;
        let result = sum(first, second);
        expect(result).toBe(expection);
    });

    test("minus eight plus four is minus four", () => {
        let first = -8;
        let second = 4;
        let expection = -4;
        let result = sum(first, second);
        expect(result).toBe(expection);
    });
});
