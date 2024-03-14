import { render, screen } from '@testing-library/react'
import TestingStateChange from '../components/TestingStateChange'

test("Testing page load", () => {
    render(<TestingStateChange />)
    expect(screen.getByText(/page loaded/i)).toBeInTheDocument();
})