import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Filter from '..';

describe('TableOptions', () => {
  const onSubmit = jest.fn();
  const setup = () =>
    render(
      <BrowserRouter>
        <Filter />
      </BrowserRouter>
    );

  beforeEach(() => onSubmit.mockClear());

  test('popup element should not be visible on initial render', async () => {
    setup();
    const popupElement = screen.queryByTestId(/popup-filter/i);

    expect(popupElement).not.toBeInTheDocument();
  });

  it('should open popup options on click of button', async () => {
    setup();
    const buttonElement = screen.getByTestId('open-filter');
    userEvent.click(buttonElement);

    const popupElement = screen.getByTestId(/popup-filter/i);

    expect(popupElement).toBeInTheDocument();
  });
});
