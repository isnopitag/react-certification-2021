import React from 'react'
import { Button } from './Button'
import { fireEvent, render } from '@testing-library/react'

const build = (props) => {
    const {container } = render(<Button {...props}/>)
    return container
}

describe('TEST', () => {
    it('should pas', () => {
        const testfn = jest.fn();
        const btn = build({ testing: testfn})

        fireEvent.click(btn.firstChild)

        expect(testfn).toBeCalledTimes(1)
    })
})

