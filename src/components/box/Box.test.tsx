import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Box from './Box';

describe('box', () => {
  it("renders box's value", () => {
    render(<Box value={1} />);
    expect(screen.queryByText(1)).toBeInTheDocument();
  });
});
