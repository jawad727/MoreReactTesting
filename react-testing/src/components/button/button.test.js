import React from "react"
import {findByTestAtt, checkProps} from "../reusables/resuableFunctions"
import SharedButton from "./button"
import { shallow } from 'enzyme'

describe("SharedButton Component", () => {

    describe("Checking PropTypes", () => {

        it("Should NOT throw a warning", () => {
            const expectedProps = {
                buttonText: "Example Button Text",
                emitEvent: () => {
                }
            }

            const propsError = checkProps(SharedButton, expectedProps);
            expect(propsError).toBeUndefined();
        })

    })

    describe("Renders", () => {
        beforeEach(() => {
            const props = {
                buttonText: "Example Button Text",
                emitEvent: () => {

                }
            }
        })
        wrapper = shallow(<SharedButton {...props} />)

        it("Should render a button", () => {
            const button = findByTestAtt(wrapper, "buttonComponent")
            expect(button.length).toBe(1)
        })

    })


})