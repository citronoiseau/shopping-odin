import { describe, it, vi, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import App from './App';

vi.mock('./utils/StoreAPI', () => ({
  default: () => [
    { id: 1, category: 'clothing', name: 'Shirt' },
    { id: 2, category: 'clothing', name: 'Pants' },
    { id: 3, category: 'electronics', name: 'Phone' }
  ]
}));


function MockComponent() {
  return <div data-testid="mock-page">Mock Page</div>;
}

describe('App Component', () => {
  it('renders NavBar, Mock Outlet, and Footer', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<MockComponent />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByTestId('mock-page')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument(); 
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});