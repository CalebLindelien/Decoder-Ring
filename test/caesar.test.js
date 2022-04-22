// Write your tests here!
//import the function 
const {caesar} = require("../src/caesar.js")
const expect = require("chai").expect

describe("Caesar Shift", () => {
    it(`(thinkful, 3) Should be: wklqnixo`, () => {
        //Setup phase
        const expected = "wklqnixo"
        //Run phase
        const actual = caesar("thinkful", 3)
        //Check phase
        expect(actual).to.equal(expected)
    })

    it(`(thinkful, -3) Should be: qefkhcri`, () => {
        const expected = "qefkhcri"
        const actual = caesar("thinkful", -3)
        expect(actual).to.equal(expected)
    }) 

    it(`(wklqnixo, 3, false) Should be: thinkful`, () => {
        const expected = "thinkful"
        const actual = caesar("wklqnixo", 3, false)
        expect(actual).to.equal(expected)
    })

    it(`(This is a secret message!, 8) Should be: bpqa qa i amkzmb umaaiom!`, () => {
        const expected = "bpqa qa i amkzmb umaaiom!"
        const actual = caesar("This is a secret message!", 8)
        expect(actual).to.equal(expected)
    })

    it(`(BPQA qa I amkzmb umaaiom!, 8, false) Should be: this is a secret message!`, () => {
        const expected = "this is a secret message!"
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false) 
        expect(actual).to.equal(expected)
    })

    it(`(thinkful) Should be: false`, () => {
        const expected = false
        const actual = caesar("thinkful")
        expect(actual).to.equal(expected)    
    })

    it(`(thinkful, 99) Should be: false`, () => {
        const expected = false
        const actual = caesar("thinkful", 99)
        expect(actual).to.equal(expected)    
    })

    it(`(thinkful, -26) Should be: false`, () => {
        const expected = false
        const actual = caesar("thinkful", -26)
        expect(actual).to.equal(expected)    
    })
})