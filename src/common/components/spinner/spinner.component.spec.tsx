import React from 'react';
import { usePromiseTracker, trackPromise } from 'react-promise-tracker';
import { render, screen } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import { isValidLogin } from '../../../pods/login/login.api';
import Loader from 'react-spinners/ScaleLoader';
import { Modal } from '@mui/material';
import { renderHook, act } from '@testing-library/react';

describe('SpinnerComponent component specs', () => {
  it('should display spinner loader by default to false', async () => {
    // Arrange

   const { result } = renderHook(() => usePromiseTracker())
   const defaultPromiseInProgress = await trackPromise(isValidLogin("admin","test"))

    // Act
    render(<SpinnerComponent />);

    //const modalElement = screen.getByRole('presentation');

    screen.debug();

    // Assert
    expect(result.current.promiseInProgress).toEqual(defaultPromiseInProgress);
    //expect(modalElement).toBeInTheDocument()
  });
});
