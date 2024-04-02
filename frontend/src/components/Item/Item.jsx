import './Item.css';
export default function Item(prop){
    return (<>
         <div className="item">
            <div className="img-div">
                <img src={prop.img} alt="product" />
            </div>
            <h1>{prop.name}</h1>
            <p>{prop.des}</p>
            <p>{prop.price}</p>
         </div>
    </>);
}