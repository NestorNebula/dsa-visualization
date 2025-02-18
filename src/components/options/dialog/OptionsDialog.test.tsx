import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import OptionsDialog from './OptionsDialog';

describe('optionsdialog', () => {
  it('renders all children', () => {
    render(
      <OptionsDialog>
        <div>Child one</div>
        <div>Child two</div>
      </OptionsDialog>
    );
    expect(screen.queryByText('Child one')).toBeInTheDocument();
    expect(screen.queryByText('Child two')).toBeInTheDocument();
  });
});
