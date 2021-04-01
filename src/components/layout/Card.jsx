import './Card.css'
import React from 'react'

export default props =>
    <div className="Card" style={{borderColor: props.color}}>
        <div className="Conteudo" style={{backgroundColor: props.downColor}}>
            {props.children}
        </div>
        <div className="Footer" style={{backgroundColor: props.color}}>
            {props.titulo}
        </div>
    </div>
