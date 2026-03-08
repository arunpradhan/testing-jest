import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/learn react/i);
  const imagetitle = screen.getByTitle("logo image");
  expect(linkElement).toBeInTheDocument();
  expect(imagetitle).toBeInTheDocument();
});

// for input field
test.skip("Testing Input Field", () => {
  render(<Home/>);
  const checkInput = screen.getByRole('textbox');
  const checkInputPlaceholder = screen.getByPlaceholderText("Enter Your Name");
  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "username");
  expect(checkInput).toHaveAttribute("id", "userid");
  expect(checkInput).toHaveAttribute("type", "text");
});

describe("check UI", () => {
  test("Testing Input Field", () => {
    render(<Home/>);
    const checkInput = screen.getByRole('textbox');
    expect(checkInput).toBeInTheDocument();
  });
  test("Testing Input Placeholder", () => {
    render(<Home/>);
    const checkInput = screen.getByRole('textbox');
    const checkInputPlaceholder = screen.getByPlaceholderText("Enter Your Name");
    expect(checkInputPlaceholder).toBeInTheDocument();
  });
  test("Testing Input Field Name attr", () => {
    render(<Home/>);
    const checkInput = screen.getByRole('textbox');
    expect(checkInput).toHaveAttribute("name", "username");
    expect(checkInput).toHaveAttribute("id", "userid");
    expect(checkInput).toHaveAttribute("type", "text");
  });
  test("Testing Input Field id attr", () => {
    render(<Home/>);
    const checkInput = screen.getByRole('textbox');
    expect(checkInput).toHaveAttribute("id", "userid");
  });
  test("Testing Input Field type attr", () => {
    render(<Home/>);
    const checkInput = screen.getByRole('textbox');
    expect(checkInput).toHaveAttribute("type", "text");
  });
});

describe.skip("check UI New-1", () => {
  test("Testing Input Field New-1", () => {
    render(<Home/>);
    const checkInput = screen.getByRole('textbox');
    expect(checkInput).toBeInTheDocument();
  });
  test("Testing Input Placeholder New-1", () => {
    render(<Home/>);
    const checkInput = screen.getByRole('textbox');
    const checkInputPlaceholder = screen.getByPlaceholderText("Enter Your Name");
    expect(checkInputPlaceholder).toBeInTheDocument();
  });
  test("Testing Input Field Name attr New-1", () => {
    render(<Home/>);
    const checkInput = screen.getByRole('textbox');
    expect(checkInput).toHaveAttribute("name", "username");
    expect(checkInput).toHaveAttribute("id", "userid");
    expect(checkInput).toHaveAttribute("type", "text");
  });
  test("Testing Input Field id attr New-1", () => {
    render(<Home/>);
    const checkInput = screen.getByRole('textbox');
    expect(checkInput).toHaveAttribute("id", "userid");
  });
  test("Testing Input Field type attr New-1", () => {
    render(<Home/>);
    const checkInput = screen.getByRole('textbox');
    expect(checkInput).toHaveAttribute("type", "text");
  });
});