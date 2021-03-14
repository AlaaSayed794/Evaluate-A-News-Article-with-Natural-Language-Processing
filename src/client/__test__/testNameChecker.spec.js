// Import the js file to test
import { checkForName } from "../js/nameChecker"
describe("Testing the url validity functionality", () => {
    test("Testing the url validation function declaration", () => {
        expect(checkForName).toBeDefined();
    })
    test("Testing the handleSubmit() function", () => {
        expect(checkForName).toBeDefined();
    })
    test('check valid url should return true', () => {
        expect(checkForName('http://example.com')).toBeTruthy()
    })

    test('check invalid url should return false', () => {
        expect(checkForName('invalid url')).toBeFalsy()
    })

});