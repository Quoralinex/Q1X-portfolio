import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { RootApp } from '../app/root';
import config from '../app/config.json';

const mockFetcher = { formData: null, submit: vi.fn() };

vi.mock('@remix-run/react', async () => {
  const actual = await vi.importActual('@remix-run/react');

  const LinkComponent = ({ to, children, ...props }) => (
    <a href={typeof to === 'string' ? to : to?.pathname} {...props}>
      {children}
    </a>
  );

  return {
    ...actual,
    Meta: () => null,
    Links: () => null,
    ScrollRestoration: () => null,
    Scripts: () => null,
    Outlet: () => <div data-testid="outlet" />,
    useLoaderData: vi.fn(() => ({ canonicalUrl: config.url, theme: 'dark' })),
    useFetcher: vi.fn(() => mockFetcher),
    useNavigation: vi.fn(() => ({ state: 'idle' })),
    useRouteError: vi.fn(() => new Error('Test error')),
    useLocation: vi.fn(() => ({ pathname: '/', hash: '', key: 'test' })),
    Link: LinkComponent,
    NavLink: LinkComponent,
  };
});

const renderRoot = () => render(<RootApp />);

describe('root route', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the brand link', () => {
    renderRoot();

    expect(
      screen.getByLabelText(new RegExp(config.name, 'i'))
    ).toBeInTheDocument();
  });

  it('shows primary navigation links', () => {
    renderRoot();

    const navLabels = ['Portfolio', 'Consultancy', 'CPMS', 'About', 'Contact', 'Email'];

    navLabels.forEach(label => {
      expect(screen.getByRole('link', { name: new RegExp(label, 'i') })).toBeInTheDocument();
    });
  });
});
