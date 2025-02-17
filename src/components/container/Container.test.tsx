import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Container from './Container';

describe('container', () => {
  it('renders every child', () => {
    render(
      <Container>
        <div>Child one</div>
        <div>Child two</div>
      </Container>
    );
    expect(screen.queryByText('Child one')).toBeInTheDocument();
    expect(screen.queryByText('Child two')).toBeInTheDocument();
  });
});
