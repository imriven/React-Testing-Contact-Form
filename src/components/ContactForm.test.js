import React from "react"
import { render, fireEvent } from "@testing-library/react"
import ContactForm from "./ContactForm"

test("Testing input visibility", () => {
    const { getByTestId } = render (<ContactForm />)
    getByTestId("firstName")
    getByTestId("lastName")
    getByTestId("email")
    getByTestId("message")
})

test("Checking Max Length", () => {
    const { getByLabelText, getByText } = render (<ContactForm/>)
    const firstNameInput = getByLabelText (/First Name*/i)
    fireEvent.change(firstNameInput, {target:{value:"Chat"}})
    fireEvent.blur(firstNameInput)
    expect(getByText(/maxLength/i)).toBeInDocument();
})