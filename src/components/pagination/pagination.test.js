import { render, screen } from "@testing-library/react";
import Pagination from "./pagination";
import React from "react";
import userEvent from "@testing-library/user-event";

const mockData = {
  completeData: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
  setData: jest.fn(),
  itemsPerPage: 5,
  setItemsPerPage: jest.fn(),
};

describe("Pagination tests", () => {
  it("should display total items count", () => {
    render(<Pagination {...mockData} />);
    const element = screen.getByText(/Total items:/i);
    const count = element.getElementsByTagName("b").item(0).textContent;
    expect(element).toBeInTheDocument();
    expect(count).toBe("10");
  });

  it("should display navgation buttons", () => {
    render(<Pagination {...mockData} />);

    const preButton = screen.getByText(/Previous/i);
    const nextButton = screen.getByText(/Next/i);
    expect(preButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();

    expect(preButton).toBeDisabled();
    expect(nextButton).not.toBeDisabled();

    userEvent.click(nextButton);
    expect(mockData.setData).toHaveBeenCalled();

    userEvent.click(preButton);
    expect(mockData.setData).toHaveBeenCalled();
  });
});
