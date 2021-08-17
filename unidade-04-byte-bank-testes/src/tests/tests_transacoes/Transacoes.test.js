import React from "react";
import {render} from "@testing-library/react";
import Transacoes from "../../transacoes/Transacoes";

describe('Componente Transações do extrato', () =>{

    it('Deve retornar sempre o mesmo snapshot', function () {

        const transacoes = [
            {
                data: "10/08/2020",
                id: 1,
                transacao: "saque",
                valor: '1',
            },
            {
                data: "10/08/2020",
                id: 2,
                transacao: "deposito",
                valor: '2',
            },
        ]

        const {container} = render(
            <Transacoes
                transacoes={transacoes}
            />
        )

        expect(container.firstChild).toMatchSnapshot()

    });
})
