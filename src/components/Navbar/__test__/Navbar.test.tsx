import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '..';

describe('Navbar', () => {
  const onSubmit = jest.fn();
  const setup = () =>
    render(
      <BrowserRouter>
        <Navbar toggleSidebar={() => console.log('testing')} />
      </BrowserRouter>
    );

  beforeEach(() => onSubmit.mockClear());

  test('lendsqr logo should be rendered', () => {
    setup();
    expect(screen.getByAltText(/lendsqr logo/i)).toBeInTheDocument();
  });

  test('search user option should be rendered', () => {
    setup();
    expect(screen.getByTestId(/search-user/i)).toBeInTheDocument();
  });

  test('profile details should be rendered', () => {
    setup();
    expect(screen.getByTestId(/user-profile/i)).toBeInTheDocument();
    expect(screen.getByAltText(/user profile/i)).toBeInTheDocument();
    expect(screen.getByTestId(/user-name-select/i)).toBeInTheDocument();
  });
});
