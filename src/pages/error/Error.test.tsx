import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Error from './Error';
import Sperror, { FrontendSperror } from 'sperror';

let error: any = new FrontendSperror(
  'Frontend Sperror',
  'This is a Frontend Sperror'
);

vi.mock('react-router', async () => {
  const getError = () => error;
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useRouteError: getError,
  };
});

beforeEach(() => {
  render(
    <MemoryRouter>
      <Error />
    </MemoryRouter>
  );
});

describe('error', () => {
  it('renders error when error is valid', () => {
    expect(screen.queryByText('Frontend Sperror')).toBeInTheDocument();
    error = null;
  });

  it('renders default error when error is invalid', () => {
    expect(screen.queryByText('Unexpected Error')).toBeInTheDocument();
    error = new Sperror('Not Found', 'Page not found', 404);
  });

  it('renders link to homepage when error has 404 status', () => {
    expect(screen.queryByRole('link', { name: /home/i })).toBeInTheDocument();
  });
});
