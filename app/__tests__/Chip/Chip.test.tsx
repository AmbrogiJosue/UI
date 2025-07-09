import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Chip from '@/app/components/Chip/Chip'; // Ajusta la ruta según tu estructura
import { ChipIconProps, ChipProps, ChipTextProps } from '../../components/Chip/interfaces'
import theme from '@/app/const/theme';

// // Mock de los componentes internos si es necesario
// jest.mock('@/app/components/Chip/ChipIcon', () => 'ChipIcon');
// jest.mock('@/app/components/Chip/ChipText', () => 'ChipText');
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

describe('<Chip />', () => {
  const defaultProps: ChipProps & ChipTextProps & ChipIconProps = {
    label: 'Label',
    size: 'medium',
    variant: 'filled',
    iconReversed: false,
    active: false,
    disabled: false,
    icon: 'info',
  };

  test('should render correctly with given props', () => {
    const { getByText, getByTestId } = render(<Chip {...defaultProps} />);

    // Verifica que el texto del label esté renderizado
    expect(getByText('Label')).toBeTruthy();

    // Verifica que el icono y el texto estén presentes
    //expect(getByTestId('chip-icon')).toBeTruthy();
    expect(getByTestId('chip-label')).toBeTruthy();
  });

  test('should render with correct styles based on props', () => {
    const { getByTestId } = render(<Chip {...defaultProps} />);

    // Verifica que el estilo de la vista contenedora se aplique correctamente
    const container = getByTestId('pressable-chip');

    console.log(container.props.style);
    
    expect(container).toHaveStyle({
      backgroundColor: '#ffffff'
    }); 
  });

  test('should be disabled when disabled prop is true', () => {
    const { getByTestId } = render(<Chip {...defaultProps} disabled={true} />);

    const pressable = getByTestId('pressable-chip');
    expect(pressable).toBeDisabled();
  });

  test('should handle press events', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<Chip {...defaultProps} onPress={onPress} />);

    const pressable = getByTestId('pressable-chip');
    fireEvent.press(pressable);

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  test('should change style when activated', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<Chip {...defaultProps} onPress={onPress} active={true} />);

    const pressable = getByTestId('pressable-chip');

    expect(pressable).toHaveStyle({
      backgroundColor: theme.colors.primaryAccent
    })
  });
});
