import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import PageList from './PageList';

beforeEach(() => {
  render(
    <MemoryRouter>
      <PageList title="Page List">
        <div>Test</div>
      </PageList>
    </MemoryRouter>
  );
});

describe('pagelist', () => {
  it('renders title', () => {
    expect(screen.queryByText('Page List')).toBeInTheDocument();
  });

  it('renders children', () => {
    expect(screen.queryByText('Test')).toBeInTheDocument();
  });
});
