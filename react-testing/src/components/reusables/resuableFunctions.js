import checkPropTypes from "check-prop-types"

export const findByTestAtt = (component, attr) => { // finds element based on its data-test attribute
    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, "props", component.name)
    return propsErr
}