import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OptionsButton from './OptionsButton';

const mockClick = vi.fn();

describe('optionsbutton', () => {
  it('renders button', () => {
    render(
      <OptionsButton
        onClick={mockClick}
        icon="placeholder"
        label="test button"
      />
    );
    expect(
      screen.queryByRole('button', { name: /test button/i })
    ).toBeInTheDocument();
  });

  it('renders button in text version when prop exists', () => {
    render(
      <OptionsButton onClick={mockClick} textVersion label="Test Button" />
    );
    expect(screen.queryByText('Test Button')).toBeInTheDocument();
  });

  it('calls add on click', async () => {
    render(
      <OptionsButton
        onClick={mockClick}
        icon="placeholder"
        label="test button"
      />
    );
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /test button/i }));
    expect(mockClick).toHaveBeenCalled();
  });
});
