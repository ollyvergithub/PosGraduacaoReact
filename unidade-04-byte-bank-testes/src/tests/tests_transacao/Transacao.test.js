import React from "react";
import {render} from "@testing-library/react";
import Transacao from "../../transacoes/Transacao";

describe('Componente de Transação do extrato', () =>{

    it('Deve retornar sempre o mesmo snapshot', function () {

        const {container} = render(
            <Transacao
                data='07/08/2021'
                tipo = 'saque'
                valor = '50.00'
            />
        )
        expect(container.firstChild).toMatchSnapshot()
    });

})