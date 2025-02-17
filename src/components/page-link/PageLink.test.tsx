import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import PageLink from './PageLink';
import { icon } from '@assets/icons';

describe('pagelink', () => {
  it('renders title and icon correctly', () => {
    render(
      <MemoryRouter>
        <PageLink title="Title" icon={icon} path="example" />
      </MemoryRouter>
    );
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByAltText(/title/i)).toBeInTheDocument();
  });
});
