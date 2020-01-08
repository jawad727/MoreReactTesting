import React from "react"
import { shallow } from "enzyme"
import Header from "./header"

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />)
    return component
}

const findByTestAtt = (component, attr) => { // finds element based on its data-test attribute
    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper
}

describe("Header Component", () => { // you can even nest describe in describe
    
    let component;
    beforeEach(() => { // says do this within before every function
        component = setUp(); 
    })
    
    it("Should render without errors", () => {       
        const wrapper = findByTestAtt(component, "headerComponent")
        expect(wrapper.length).toBe(1);
    })

    it("Should render a logo", () => {
        const logo = findByTestAtt(component, "logoH1")
        expect(logo.length).toBe(1);
    })
})

