import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
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
});
