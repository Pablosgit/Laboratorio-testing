import { renderHook, act } from '@testing-library/react';
import { createEmptyLookup, Lookup } from 'common/models';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('useConfirmationDialog specs', () => {
  it('should return an object: itemToDelete with default values and onOpenDialog a function when it calls it', () => {
    // Arrange
     const defaultIsOpen:Lookup = { id: '', name: '' };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.itemToDelete).toEqual(defaultIsOpen);
    expect(result.current.onOpenDialog).toEqual(expect.any(Function))
  });
  it('should update ItemToDelete when it calls onOpenDialog', () => {
    // Arrange
    const newItemToDelete: Lookup = { id: '123456', name: 'name' };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(newItemToDelete);
    });

    // Assert
    expect(result.current.itemToDelete).toEqual(newItemToDelete);
    expect(result.current.onOpenDialog).toEqual(expect.any(Function))
  });
  it('should update data to empty when press the accept button', () => {
    // Arrange
    const newItemToDelete: Lookup = { id: '', name: '' };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onAccept();
    });

    // Assert
    expect(result.current.itemToDelete).toEqual(newItemToDelete);
    expect(result.current.onAccept).toEqual(expect.any(Function))
  });
  it('should close dialog when press the cancel button', () => {
    // Arrange
    const newIsOPen = false;

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toEqual(newIsOPen);
    expect(result.current.onClose).toEqual(expect.any(Function))
  });
  it('should open dialog', () => {
    // Arrange
    const newIsOPen = true;
    const newItemToDelete: Lookup = { id: '123456', name: 'name' };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(newItemToDelete);
    });

    // Assert
    expect(result.current.isOpen).toEqual(newIsOPen);
    expect(result.current.onOpenDialog).toEqual(expect.any(Function))
  });
});
