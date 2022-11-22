import React, { useState } from 'react'
import './index.css'

export default function Calculadora() {

    const [valorDisplay, setValorDisplay] = useState('0')
    const [limparDisplay, setLimparDisplay] = useState(false)
    const [operacao, setOperacao] = useState(null)
    const [valores, setValores] = useState([0, 0])
    const [indice, setIndice] = useState(0)

    function _adicionar(label) {

        if (label === '.' && valorDisplay.includes('.')) return

        const check_limparDisplay = valorDisplay === '0' || limparDisplay
        const valorAtual = check_limparDisplay ? '' : valorDisplay

        const novo_valorDisplay = valorAtual + label
        const novos_valores = [...valores]

        if (label !== '.') novos_valores[indice] = parseFloat(novo_valorDisplay)

        setValorDisplay(novo_valorDisplay)
        setLimparDisplay(false)
        setValores(novos_valores)
    }

    function _operacao(operacao_clicada) {

        if (valores[0] === 0) return

        if (indice === 0) {

            setIndice(1)
            setOperacao(operacao_clicada)
            setLimparDisplay(true)

        } else {

            const igual = operacao_clicada === '='
            const novos_valores = [...valores]

            try {
                novos_valores[0] = eval(`${novos_valores[0]} ${operacao} ${novos_valores[1]}`)
            } catch (error) { novos_valores[0] = valores[0] }

            novos_valores[1] = 0

            setValorDisplay(novos_valores[0])
            setLimparDisplay(!igual)
            setOperacao(igual ? null : operacao_clicada)
            setValores(novos_valores)
            setIndice(igual ? 0 : 1)

            // if(igual) {
            //     const valorAtual = valorDisplay
            //     _limpar()
            //     _adicionar(valorAtual)
            // }

        }
    }

    function _limpar() {
        setValorDisplay('0')
        setLimparDisplay(false)
        setOperacao(null)
        setValores([0, 0])
        setIndice(0)
    }

    function _limpar2() {
        const novo_valorDisplay = valorDisplay.substr(0, valorDisplay.length - 1)
        const novos_valores = [...valores]

        if (novo_valorDisplay !== '.') novos_valores[indice] = parseFloat(novo_valorDisplay)

        setValorDisplay(novo_valorDisplay)
        setLimparDisplay(false)
        setValores(novos_valores)
    }

    return (
        <div className='calculadora'>
            <div className='display'> {valorDisplay} </div>
            <button className="button op" onClick={() => _limpar()}>AC</button>
            <button className="button op" onClick={() => _limpar2()}>C</button>
            <button className="button op" onClick={() => _operacao('%')}>%</button>
            <button className="button op" onClick={() => _operacao('/')}>/</button>
            <button className="button" onClick={() => _adicionar('7')}>7</button>
            <button className="button" onClick={() => _adicionar('8')}>8</button>
            <button className="button" onClick={() => _adicionar('9')}>9</button>
            <button className="button op" onClick={() => _operacao('*')}>*</button>
            <button className="button" onClick={() => _adicionar('4')}>4</button>
            <button className="button" onClick={() => _adicionar('5')}>5</button>
            <button className="button" onClick={() => _adicionar('6')}>6</button>
            <button className="button op" onClick={() => _operacao('-')}>-</button>
            <button className="button" onClick={() => _adicionar('1')}>1</button>
            <button className="button" onClick={() => _adicionar('2')}>2</button>
            <button className="button" onClick={() => _adicionar('3')}>3</button>
            <button className="button op" onClick={() => _operacao('+')}>+</button>
            <button className="button span-2" onClick={() => _adicionar('0')}>0</button>
            <button className="button op" onClick={() => _operacao('.')}>.</button>
            <button className="button op" onClick={() => _operacao('=')}>=</button>
        </div>
    )
}