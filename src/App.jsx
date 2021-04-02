import './App.css'
import React from 'react'

//import Primeiro from './components/Primeiro'
import ComParamentro from './components/ComParamentro'
//import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'

export default (props) => (
    <div className="App">
        <Card titulo="Exercício - #01" color="#688F4E" downColor="F4F1E9">
            <ComParamentro titulo="Velocidade do som"
                subtitulo="Uma fonte de ondas sonoras está imersa em água, emitindo ondas a uma frequência de 740 Hz. Sabendo que o comprimento de onda das ondas produzidas pela fonte é de 200 cm, determine a velocidade de propagação das ondas sonoras na água." />
        </Card>
        <Card titulo="Exercício - #02" color="#688F4E" downColor="F4F1E9">
            <ComParamentro titulo='Inércia, massa e força'
                subtitulo='Suponha que sobre uma mesa haja um livro. Qual será a força que a mesa exerce sobre o livro, sabendo que a força com que a Terra o atrai é de 10 N?' />
        </Card>
        <Card titulo="Exercício - #03" color="#688F4E" downColor="F4F1E9">
            <ComParamentro titulo="Função horária do MUV"
                subtitulo="Um móvel parte do repouso e desenvolve uma aceleração constante de 3 m/s² durante 4 segundos. De quantos metros foi o deslocamento desse móvel?" />
        </Card>
        <Card titulo="Exercício - #04" color="#688F4E" downColor="F4F1E9">
            <ComParamentro titulo="Análise dimensional"
                subtitulo="A grandeza física potência, medida em Watts, nas unidades do S.I., mede a quantidade de trabalho, em Joules, que é realizado a cada segundo. Como a unidade Watt também pode ser escrita?" />
        </Card>
        <Card titulo="Exercício - #05" color="#688F4E" downColor="F4F1E9">
            <ComParamentro titulo="Calor latente"
                subtitulo="Um corpo de massa 6g em estado sólido, é aquecido até o ponto de fusão. Sabendo que o calor latente do corpo é de 35 cal/g, determine a quantidade de calor recebida pelo corpo." />
        </Card>
    </div>
);
