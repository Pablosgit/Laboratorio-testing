import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { ConfirmationDialogComponent } from "./confirmation-dialog.component"

describe('ConfirmationDialog componet spec', () => {
  it('Should display dialog', ()=>{
    // Arrange
    const LabelProps = {
      closeButton: "Cancelar",
      acceptButton: "Aceptar",
    }
    const props = {
      isOpen: true,
      onAccept: () => {},
      onClose: () => {},
      title: "Eliminar Elemento",
      labels: LabelProps,
      children: "¿Seguro que quiere borrar el elemento?",
    };

    // Act
    render(< ConfirmationDialogComponent {...props} />);

    const dialogElement = screen.getByRole('dialog');

    // Assert
    expect(dialogElement).toBeInTheDocument();
  })
  it('Should display a buttom with text "CANCELAR"', ()=>{
    // Arrange
    const LabelProps = {
      closeButton: "Cancelar",
      acceptButton: "Aceptar",
    }
    const props = {
      isOpen: true,
      onAccept: () => {},
      onClose: () => {},
      title: "Eliminar Elemento",
      labels: LabelProps,
      children: "¿Seguro que quiere borrar el elemento?",
    };

    // Act
    render(< ConfirmationDialogComponent {...props} />);

    const element = screen.getByRole('button',{
      name: /cancelar/i
    });

    // Assert
    expect(element).toBeInTheDocument();
  })
  it('Should display a buttom with text "ACEPTAR"', ()=>{
    // Arrange
    const LabelProps = {
      closeButton: "Cancelar",
      acceptButton: "Aceptar",
    }
    const props = {
      isOpen: true,
      onAccept: () => {},
      onClose: () => {},
      title: "Eliminar Elemento",
      labels: LabelProps,
      children: "¿Seguro que quiere borrar el elemento?",
    };

    // Act
    render(< ConfirmationDialogComponent {...props} />);

    const element = screen.getByRole('button',{
      name: /aceptar/i
    });

    // Assert
    expect(element).toBeInTheDocument();
  })
  it('Should close dialog when click on "ACEPTAR"', ()=>{
    // Arrange

    const LabelProps = {
      closeButton: "Cancelar",
      acceptButton: "Aceptar",
    }
    const props = {
      isOpen: true,
      onAccept: () => {},
      onClose: () => {},
      title: "Eliminar Elemento",
      labels: LabelProps,
      children: "¿Seguro que quiere borrar el elemento?",
    }

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const buttonElement = screen.getByRole('button',{
      name: /Cancelar/i,
    });

    userEvent.click(buttonElement);

    const buttonEvent = jest.spyOn(props, "onClose");

    // Assert
    expect(buttonEvent).toHaveBeenCalled();
  })
})
