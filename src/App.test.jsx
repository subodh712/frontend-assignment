import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App.jsx';

describe('App tests', () => {

    const xhrMockClass = () => ({
    open            : jest.fn(),
    send            : jest.fn().mockImplementation(function() { this.onreadystatechange(); }),
    readyState      : 4,
    status          : 200,
    responseText    : JSON.stringify([])
    })

    window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass)

    it('should contains the heading 1', () => {
        render(<App />);
        const heading = screen.getByText(/Table and Pagination demo/i);
        expect(heading).toBeInTheDocument()
    });

    it('should contains the subheading', () => {
        render(<App />);
        const subheading = screen.getByText(/This is a demo of a table and pagination component./i);
        expect(subheading).toBeInTheDocument()
    });
});