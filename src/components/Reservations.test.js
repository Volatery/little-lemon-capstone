import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Reservations from './Reservations';

test('displays success message after submission', async () => {
    const { getByLabelText, getByText } = render(<Reservations />);
    const dateInput = getByLabelText('Date');
    const numDinersInput = getByLabelText('Number of Diners');
    const occasion = getByLabelText('Occasion');
    const time = getByLabelText('Time');
    const submitButton = getByText('Reserve!');

    fireEvent.change(dateInput, { target: { value: '2023-10-19' } });
    fireEvent.change(numDinersInput, { target: { value: '5' } });

    // Select the first option for "Time" and "Occasion"
    fireEvent.change(occasion, { target: { value: 'Birthday' } });
    fireEvent.change(time, { target: { value: '14:00' } });
    fireEvent.click(submitButton);
    await waitFor(() => {
      const successMessageRegex = /You have successfully booked your table!/;
      expect(screen.getByText(successMessageRegex)).toBeInTheDocument();
    });
  });
