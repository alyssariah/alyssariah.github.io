import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { PrinciplesTabs } from './principles-tabs';

const items = [
  { name: 'Vision', content: 'Vision text' },
  { name: 'Mission', content: 'Mission text' },
  { name: 'Approach', content: 'Approach text' },
];

describe('PrinciplesTabs', () => {
  it('shows the first panel initially', () => {
    render(<PrinciplesTabs items={items} />);
    expect(screen.getByRole('tab', { name: 'Vision' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Vision text');
  });

  it('switches panels on click', async () => {
    render(<PrinciplesTabs items={items} />);
    await userEvent.click(screen.getByRole('tab', { name: 'Approach' }));
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Approach text');
  });

  it('supports arrow-key navigation with wrap-around', async () => {
    render(<PrinciplesTabs items={items} />);
    await userEvent.click(screen.getByRole('tab', { name: 'Vision' }));
    await userEvent.keyboard('{ArrowLeft}');
    expect(screen.getByRole('tab', { name: 'Approach' })).toHaveFocus();
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Approach text');
    await userEvent.keyboard('{Home}');
    expect(screen.getByRole('tab', { name: 'Vision' })).toHaveFocus();
  });
});
