import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from '..';

describe('Sidebar', () => {
  const onSubmit = jest.fn();
  const setup = () =>
    render(
      <BrowserRouter>
        <Sidebar sidebarIsVisible={true} />
      </BrowserRouter>
    );

  beforeEach(() => onSubmit.mockClear());

  test('sidebar links should have href', () => {
    setup();
    const anchorLinks = screen.getAllByRole('link');

    anchorLinks.forEach((link) => {
      expect(link).toHaveAttribute('href');
    });
  });
});
