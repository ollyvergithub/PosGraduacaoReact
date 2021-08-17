import React from "react";
import {fireEvent, render, screen, wait} from "@testing-library/react";
import App, {calcularNovoSaldo} from "../../App";

// Descrição do Principal
describe('Componete principal', () => {

    describe('Quando abro o app do banco:', () => {

        // Testando se a String ByteBank está na página
        it('O nome é exibido', function () {
            render(<App/>);
            expect(screen.getByText('ByteBank')).toBeInTheDocument();
        });
        it('O saldo é exibido', function () {
            render(<App/>);
            expect(screen.getByText('Saldo:')).toBeInTheDocument()
        });
        it('O botão realizar transação é exibido', function () {
            render(<App/>);
            expect(screen.getByText('Realizar operação')).toBeInTheDocument()
        });
    })

    describe('Quando eu realizo uma transação:', () => {

        it('Que é saque o saldo deve diminuir', function () {
            const valores = {
                transacao: 'saque',
                valor: 50,
            }
            const novoSaldo = calcularNovoSaldo(valores, 100)
            expect(novoSaldo).toBe(50)
        });

        it('Que é um depósito o valor deve aumentar', () =>{
            const valores = {
                transacao: 'deposito',
                valor: 50
            }
            const novoSaldo = calcularNovoSaldo(valores, 100)
            expect(novoSaldo).toBe(150)
        })

        it('Que é um saque sem saldo na conta', function () {
            const valores = {
                transacao: 'saque',
                valor: 200
            }
            const novoSaldo = calcularNovoSaldo(valores, 100)
            expect(novoSaldo).toBe(-100)
        });

        it('Que é um saque, a transação deve ser realizada corretamente', function () {

            const {getByTestId, getByLabelText, getByText} = render(<App/>)

            //const inputValor = getByTestId('valor').getAttribute('value')

            const saldo = getByText('R$ 1000')
            const transacao = getByLabelText('Saque')
            const valor = getByTestId('valor')
            const botaoTransacao = getByText('Realizar operação')

            expect(saldo.textContent).toBe('R$ 1000')

            fireEvent.click(transacao, {target: {value: 'saque'}})
            fireEvent.change(valor, {target: {value:  10}})
            fireEvent.click(botaoTransacao)
            expect(saldo.textContent).toBe('R$ 990')
        });

        it('Refazendo teste com screen: Que é um saque, a transação deve ser realizada corretamente', function () {
            render(<App/>)

            //const inputValor = getByTestId('valor').getAttribute('value')

            const saldo = screen.getByText('R$ 1000')
            const transacao = screen.getByLabelText('Saque')
            const valor = screen.getByTestId('valor')
            const botaoTransacao = screen.getByText('Realizar operação')

            expect(saldo.textContent).toBe('R$ 1000')

            fireEvent.click(transacao, {target: {value: 'saque'}})
            fireEvent.change(valor, {target: {value:  10}})
            fireEvent.click(botaoTransacao)
            expect(saldo.textContent).toBe('R$ 990')
        });

    })

})