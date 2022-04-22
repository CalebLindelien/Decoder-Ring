// Write your tests here!
const {polybius} = require("../src/polybius")
const expect = require("chai").expect

describe("Polybius Square", () => {
    it("thinkful", () => {
        const expected = "4432423352125413"
        const actual = polybius("thinkful")
        expect(actual).to.eql(expected)
    })

    it("Hello world, ignores caps", () => {
        const expected = "3251131343 2543241341"
        const actual = polybius("Hello world")
        expect(actual).to.eql(expected)
    })

    it("3251131343 2543241341", () => {
        const expected = "hello world"
        const actual = polybius("3251131343 2543241341", false)
        expect(actual).to.eql(expected)
    })

    it("4432423352125413", () => {
        const expected = "th(i/j)nkful"
        const actual = polybius("4432423352125413", false)
        expect(actual).to.eql(expected)
    })

    it("44324233521254134", () => {
        const expected = false
        const actual = polybius("44324233521254134", false)
        expect(actual).to.eql(expected)
    })
})