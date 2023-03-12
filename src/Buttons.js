function Buttons ({selectProduct}) {

    return(<div className="buton">
            <button className="btns" onClick={() => window.location.reload()}>Все категории</button>
            <button className="btns" onClick={() => selectProduct("a")}>Сантехника</button>
            <button className="btns" onClick={() => selectProduct("b")}>Техника</button>
            <button className="btns" onClick={() => selectProduct("c")}>Инструмент</button>
            <button className="btns" onClick={() => selectProduct("d")}>Все для сада</button>
            <button className="btns" onClick={() => selectProduct("e")}>Материалы</button>
        </div>
    )
}

export default Buttons;
