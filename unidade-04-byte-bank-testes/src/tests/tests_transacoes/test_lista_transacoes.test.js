import React from "react";
import {render, screen} from "@testing-library/react";
import api from '../../api'
import App from "../../App";

// Simulando chamada a API
jest.mock('../../api')

describe('Requisições para a API', () => {

    it('Deve exibir lista de transacoes atraves da API', async function () {

        // Simulando chamada a API
        api.listaTransacoes.mockResolvedValue([{
            "valor": '10',
            "transacao": "saque",
            "data": "10/08/2020",
            "id": 1
        },
        {
            "transacao": "deposito",
            "valor": "20",
            "data": "26/09/2020",
            "id": 2
        }
        ]);

        render(<App/>)

        await screen.findByText('saque')
        expect(screen.getByTestId('transacoes').children.length).toBe(2)

    });

})