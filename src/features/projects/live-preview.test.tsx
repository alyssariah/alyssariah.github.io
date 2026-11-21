import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { LivePreview } from './live-preview';

const renderPreview = () =>
  render(
    <LivePreview url="https://example.com/" title="Example">
      <p>Example screenshot</p>
    </LivePreview>,
  );

describe('LivePreview', () => {
  it('shows the screenshot and loads no iframe by default', () => {
    const { container } = renderPreview();
    expect(screen.getByText('Example screenshot')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Screenshot' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(container.querySelector('iframe')).toBeNull();
  });

  it('embeds the live site in a sandboxed, titled iframe on request', async () => {
    renderPreview();
    await userEvent.click(screen.getByRole('button', { name: 'Live site' }));

    const frame = screen.getByTitle('Live preview of Example');
    expect(frame).toHaveAttribute('src', 'https://example.com/');
    expect(frame).toHaveAttribute('sandbox');
    expect(screen.queryByText('Example screenshot')).not.toBeInTheDocument();
    expect(screen.getByText('example.com')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /open/i })).toHaveAttribute(
      'href',
      'https://example.com/',
    );
  });

  it('switches back to the screenshot', async () => {
    renderPreview();
    await userEvent.click(screen.getByRole('button', { name: 'Live site' }));
    await userEvent.click(screen.getByRole('button', { name: 'Screenshot' }));
    expect(screen.getByText('Example screenshot')).toBeInTheDocument();
  });
});
