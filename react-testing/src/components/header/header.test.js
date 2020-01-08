import React from "react"
import { shallow } from "enzyme"
import Header from "./header"


describe("Header Component", () => { // you can even nest describe in describe
    it("It should render without errors", () => {
        const component = shallow(<Header />);
        console.log(component.debug()) //console.log the component to the terminal
        const wrapper = component.find(".headerComponent");
        expect(wrapper.length).toBe(1);
    })
})

