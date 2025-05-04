import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import StoreAPI from './StoreAPI';

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: 1, title: 'Item 1' },
          { id: 2, title: 'Item 2' },
        ]),
    })
  );
});

describe('StoreAPI Hook', () => {
  it('fetches and returns product data', async () => {
    const { result } = renderHook(() => StoreAPI());

    await waitFor(() => {
      expect(result.current.length).toBeGreaterThan(0);
    });

    expect(result.current).toEqual([
      { id: 1, title: 'Item 1' },
      { id: 2, title: 'Item 2' },
    ]);
  });
});