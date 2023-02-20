import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  it("displays an error message", () => {
    const component = render(<Alert message="Error!" />);
    const alertMessageNode = component.getByText("Error!");

    expect(alertMessageNode.textContent).toBe("Error!");
  });

  it("displays a success message", () => {
    const component = render(<Alert message="Success!!" success />);
    const alertMessageNode = component.getByText("Success!!");

    expect(alertMessageNode.textContent).toBe("Success!!");
  });
});
