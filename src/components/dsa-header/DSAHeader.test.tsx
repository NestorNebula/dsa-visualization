import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import DSAHeader from './DSAHeader';

describe('dsaheader', () => {
  it('renders title and link', () => {
    render(<DSAHeader title="Title" resource="resource" />);
    expect(screen.queryByText('Title')).toBeInTheDocument();
    expect(screen.queryByLabelText(/link/i)).toBeInTheDocument();
  });
});
