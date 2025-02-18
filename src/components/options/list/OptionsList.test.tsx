import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import OptionsList from './OptionsList';

describe('optionslist', () => {
  it('renders all children', () => {
    render(
      <OptionsList>
        <div>Child one</div>
        <div>Child two</div>
      </OptionsList>
    );
    expect(screen.queryByText('Child one')).toBeInTheDocument();
    expect(screen.queryByText('Child two')).toBeInTheDocument();
  });
});
