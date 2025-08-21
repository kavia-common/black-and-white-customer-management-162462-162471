import { render, screen } from '@testing-library/react';
import App from './App';
import AuthProvider from './hooks/useAuth';
import { MemoryRouter } from 'react-router-dom';

test('renders navbar brand', () => {
  render(
    <AuthProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </AuthProvider>
  );
  const brand = screen.getByText(/Customer Manager/i);
  expect(brand).toBeInTheDocument();
});
