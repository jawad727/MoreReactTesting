import React from "react";
import { shallow } from "enzyme";
import Headline from "./headline.js"
import checkPropTypes from "check-prop-types"
import PropTypes from "prop-types";
import {findByTestAtt, checkProps} from "../reusables/resuableFunctions.js"


const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />)
    return component
}

describe("Headline Component", () => {

    describe("Checking PropTypes", () => {

        it("Should not throw a warning", () => {
            const expectedProps = { // Here we create an object that will replicate the value types of our props
                header: "Test",
                desc: "Test Desc",
                tempArr: [{
                    fName: "Test fName",
                    lName: "Test lName",
                    email: "test$email.com",
                    age: 23,
                    onlineStatus: false
                }]
            }
            const propsErr = checkProps(Headline.propTypes, expectedProps); //imported from reusables
            expect(propsErr).toBeUndefined();

        })
    })

    describe("Have props", () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header: "Test Header",
                desc: "Test Desc"
            }
            wrapper = setUp(props)
        });

        it("should render without errors", () => {
            const component = findByTestAtt(wrapper, "HeadlineComponent")
            expect(component.length).toBe(1)
        })

        it("should render an h1", () => {
            const h1 = findByTestAtt(wrapper, "header")
            expect(h1.length).toBe(1)
        })


        it("should render an desc", () => {
            const desc = findByTestAtt(wrapper, "desc")
            expect(desc.length).toBe(1)
        })

    })

    describe("Have no props", () => {
        
        let wrapper;
        beforeEach(() => {
            wrapper = setUp()
            })
            
            it("should not render", () => {
                const component = findByTestAtt(wrapper, "w")
                expect(component.length).toBe(0)
            })

        })


})