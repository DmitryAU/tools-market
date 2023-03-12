function Goods({itemProduct}) {

    return(<div className="card-info">
    {itemProduct.map((element =>{
        const {id, name, price, image} = element;
        return(
            <div className="card" key={id}>
                <img className="pict" src={image} width="350px" height="250px" alt="poduct"/>
                <div className="info">
                <h3>{name}</h3>
                <h4>Цена {price} руб.</h4>
                </div>
            </div>
        )
    }))}
</div>
)
}

export default Goods;