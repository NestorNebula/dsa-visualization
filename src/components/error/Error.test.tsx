import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Error from './Error';
import { FrontendSperror } from 'sperror';

describe('error', () => {
  it('renders error message', () => {
    render(
      <MemoryRouter>
        <Error
          error={
            new FrontendSperror(
              'Frontend Sperror',
              'This is a Frontend Sperror'
            )
          }
        />
      </MemoryRouter>
    );
    expect(screen.queryByText('Frontend Sperror')).toBeInTheDocument();
    expect(
      screen.queryByText('This is a Frontend Sperror')
    ).toBeInTheDocument();
  });

  it('renders default error when invalid error or no error is given', () => {
    render(
      <MemoryRouter>
        <Error error={null} />
      </MemoryRouter>
    );
    expect(screen.queryByText('Unexpected Error')).toBeInTheDocument();
  });
});
