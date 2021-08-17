import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import Conta from "../../conta/Conta";

describe('Componente Conta', () =>{

    it('Deve retornar o valor formatado', function () {
        render(<Conta saldo={1000}/> )
        const saldo = screen.getByTestId('saldo-conta')
        expect(saldo.textContent).toBe('R$ 1000')
    });


    it('Deve chamar a funcao de realizar a trasnsação quando o botão é clicado', function () {

        // Simulando funcao
        const funcaoRealizarTransacao = jest.fn()
        render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransacao}/>)

        fireEvent.click(screen.getByText('Realizar operação'));

        expect(funcaoRealizarTransacao).toHaveBeenCalled()

    });

})