import { renderHook, act } from '@testing-library/react';
import { CartProvider, useCart } from './CartData';
import { describe, it, expect } from 'vitest';


const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;

describe('useCart', () => {
  it('adds an item to the cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem(1, 2);
    });

    expect(result.current.items).toEqual([{ id: 1, amount: 2 }]);
  });

  it('adds more of the same item to the cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem(1, 2);
    });
    act(() => {
        result.current.addItem(1, 3);
    })

    expect(result.current.items).toEqual([{ id: 1, amount: 5 }]);
  });

  it('deletes an item from the cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem(1, 2);
    });
    act(() => {
        result.current.deleteItem(1);
      });

    expect(result.current.items).toEqual([]);
  });

  it('increases item amount by 1', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem(1, 1);
    });
    act(() => {
        result.current.increaseAmount(1);
      });

    expect(result.current.items).toEqual([{ id: 1, amount: 2 }]);
  });

  it('decreases item amount but not below 1', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem(1, 1); 
    });
    act(() => {
        result.current.decreaseAmount(1); 
      });

    expect(result.current.items).toEqual([{ id: 1, amount: 1 }]);
  });

  it('clears the cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem(1, 1);
    });
    act(() => {
        result.current.addItem(2, 3);
      });
      act(() => {
        result.current.clearCart();
      });

    expect(result.current.items).toEqual([]);
  });
});