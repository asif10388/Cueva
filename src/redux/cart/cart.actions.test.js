const cart_actions = require("./cart.actions")
// @ponicode
describe("cart_actions.toggleCartHidden", () => {
    test("0", () => {
        let callFunction = () => {
            cart_actions.toggleCartHidden()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("cart_actions.clearItemFromCart", () => {
    test("0", () => {
        let callFunction = () => {
            cart_actions.clearItemFromCart("dummyName123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            cart_actions.clearItemFromCart("dummyname")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            cart_actions.clearItemFromCart("/dummy_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            cart_actions.clearItemFromCart("$dummy_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            cart_actions.clearItemFromCart("dummy_name/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            cart_actions.clearItemFromCart(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("cart_actions.removeItem", () => {
    test("0", () => {
        let callFunction = () => {
            cart_actions.removeItem("dummyName")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            cart_actions.removeItem("dummy_name/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            cart_actions.removeItem("dummyname")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            cart_actions.removeItem("DUMMYNAME")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            cart_actions.removeItem("dummy_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            cart_actions.removeItem(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
