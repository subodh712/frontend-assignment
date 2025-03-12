import { render, screen } from "@testing-library/react";
import Table from "./table";
import React from "react";

const mockData = [
  {
    "s.no": 47,
    "amt.pledged": 14322,
    blurb:
      "When an aged mortal man and immortal vampire fall in love, painful realities about death—and the deathless—interfere.",
    by: "IronSpike",
    country: "US",
    currency: "usd",
    "end.time": "2016-11-23T16:00:30-05:00",
    location: "Chicago, IL",
    "percentage.funded": 179,
    "num.backers": "23331",
    state: "IL",
    title: "Letters for Lucardo: An Erotic Graphic Novel",
    type: "Town",
    url: "/projects/ironspike/letters-for-lucardo-an-erotic-graphic-novel?ref=discovery",
  },
  {
    "s.no": 48,
    "amt.pledged": 40070,
    blurb:
      "A picture book adaptation of the classical On The Origin Of Species. Great for children and grownups!",
    by: "Sabina Radeva",
    country: "GB",
    currency: "gbp",
    "end.time": "2016-11-09T09:41:26-05:00",
    location: "Oxford, UK",
    "percentage.funded": 2108,
    "num.backers": "22844",
    state: "England",
    title: "Darwin’s On the Origin of Species: A Picture Book Adaptation",
    type: "Town",
    url: "/projects/1128391174/darwins-on-the-origin-of-species-a-picture-book-ad?ref=discovery",
  },
  {
    "s.no": 49,
    "amt.pledged": 36662,
    blurb:
      "Once again, show us your love and support. Make a generous donation for the Season 8 of the Invisible Dog!",
    by: "Lucien Zayan",
    country: "US",
    currency: "usd",
    "end.time": "2016-11-09T18:30:00-05:00",
    location: "Brooklyn, NY",
    "percentage.funded": 146,
    "num.backers": "22361",
    state: "NY",
    title: "THE INVISIBLE DOG - SEASON 8",
    type: "County",
    url: "/projects/183275255/the-invisible-dog-season-8?ref=discovery",
  },
];

describe("Table tests", () => {
  it("should render the table", () => {
    render(<Table data={mockData} />);
    const rowsCount = screen.getAllByRole("row").length;
    expect(rowsCount).toBe(4);
  });
});
