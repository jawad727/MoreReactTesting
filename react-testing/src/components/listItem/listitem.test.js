import React from "react";
import { shallow } from "enzyme";
import {findByTestAtt, checkProps} from "../reusables/resuableFunctions.js"
import ListItem from "./ListItem"

describe("ListItem Component", () => {

    describe("Checking PropTypes", () => {
        
        it ("Should NOT thow a warning", () => {
            const expectedProps = {
                title: "Example Title",
                desc: "Example Desc"
            };
            const propsError = checkProps(ListItem, expectedProps)
            expect(propsError).toBeUndefined();
        })
    })

    describe("Component Renders", () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: "Example Title",
                desc: "Example Desc"
            }
            wrapper = shallow(<ListItem {...props} />)
        })

        it("Should render without error", () => {
            const component = findByTestAtt(wrapper, "listItemComponent");
            expect(component.length).toBe(1);
        })

        it("Should render a title", () => {
            const title = findByTestAtt(wrapper, "componentTitle")
            expect(title.length).toBe(1)
        })

        it("Should render a desc", () => {
            const desc = findByTestAtt(wrapper, "componentDesc")
            expect(desc.length).toBe(1)
        })
        
    })

    describe("Should NOT render", () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                desc: "Some text"
            }
            wrapper = shallow(<ListItem {...props} />)
        })

        it("Component is not rendered", () => {
            const component = findByTestAtt(wrapper, "listItemComponent")
            expect(component.length).toBe(0);
        })

    })


})