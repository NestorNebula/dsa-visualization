import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Informations from './Informations';

beforeEach(() => {
  render(
    <Informations>
      <div>Test</div>
    </Informations>
  );
});

describe('informations', () => {
  it('renders informations with title', () => {
    expect(screen.queryByText(/did you know?/i)).toBeInTheDocument();
  });

  it('renders children content', () => {
    expect(screen.queryByText('Test')).toBeInTheDocument();
  });

  it("doesn't display anything after close button click", async () => {
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /close/i }));
    expect(screen.queryByText('Test')).not.toBeInTheDocument();
  });
});
