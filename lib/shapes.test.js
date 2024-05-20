const { Triangle, Square, Circle } = require('./shapes');
const validateText = require('../index.js')

describe('Shapes', () => {
    describe('Triangle', () => {
        //what the function should do
        it('should create svg dimensions of a triangle', () => {
            //what we're testing on
            const triangle = new Triangle('blue')
            //what the expected result should be
            expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`)
        })
    })

    describe('Square', () => {
        it('should create svg dimensions of a square', () => {
            const square = new Square('black')

            expect(square.render()).toEqual(`<rect x="50" y="50" width="200" height="200" fill="black" />`)
        })
    })

    describe('Circle', () => {
        it('should create svg dimensions of a circle', () => {
            const circle = new Circle('red')

            expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="75" fill="red" />`)
        })
    })
})

describe('Validation', () => {
    describe('ValidateText', () => {
        it('should throw an error if text length does not equal 3', () => {
            const cb = () => validateText('1234')
            const err = new Error('Please enter only 3 characters.')
            expect(cb).toThrowError(err)
        })
    })
})