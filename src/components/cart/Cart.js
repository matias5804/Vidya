import React, { useContext, useState } from 'react'
import { CartContext } from '../context/useContext'
import { Link } from 'react-router-dom'
import ItemCart from '../itemCart/ItemCart'
import '../styles/cart.css';
//import {getFirestore} from "../../firebase/Firebase"
import logoPrimeroIcon from '../../assets/iconos/logoPrimeroIcon.jpg'


const Cart = () => {

    const { cart, removeItem, clear, getTotalPrice } = useContext(CartContext)
    const total = getTotalPrice();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const comprar = () => {
        let datosDeCompra = {
            buyer:{name: name, phone: phone, email: email },
            items: {...cart},
            total:getTotalPrice(),}
 //       };
 //       let db = getFirestore()
 //       const OrderCollection = db.collection("order").add(datosDeCompra); 

        clear();
        alert(`! Su pedido fue registrado con exito ¡ \n Gracias por comprar en Vidya` )
    }
    
    return (

        <div>

            <h1 className='tituloCarrito'>- CARRITO DE COMPRAS -</h1>
            {cart.length > 0 ? (
                <div className='divArtCarrito'>
                    {cart.map((prod) => {
                    return <ItemCart
                        key={prod.item.id}
                        productos={prod}
                        removeItem={removeItem}
                    />
                    })}
                </div>
            ) : (

                <button className='btnSeguirCarrito'>
                    <Link to="/">
                        ¡Empezá a comprar!
                    </Link>
                </button>

            )}
            {cart.length > 0 && (
                <>
                    <div className='divTotalSeguirVaciar'>

                        <button className='btnSeguirCarrito'>
                            <Link to="/">
                                Seguir Comprando
                            </Link>
                        </button>
                        
                        <button className='btnVaciarCarrito' onClick={() => clear()} >Vaciar Carrito</button>
                    
                        <div className="txtTotalCarrito">
                            <p className=''>Total: $ {total}</p>
                        </div>

                    </div>

                    <div className='divOrden'>

                        <h2 className='txtTituloPedido'>Orden del Pedido</h2>
                        <h4 className='completePedido'>Por Favor complete la orden para registrar su pedido!</h4>

                        <div className='divImgImputOrden'>

                            <input type="text" className="formCompra" placeholder="Nombre" onChange={(e) => setName(e.target.value)}/>              
                            <input type="text" className="formCompra" placeholder="Telefono" onChange={(e) => setPhone(e.target.value)}/>
                            <input type="email" className="formCompra" placeholder="Direccion de Email" onChange={(e) => setEmail(e.target.value)}/>
                    
                            <div className='divImgBtn'>
                                <img className='ImgImputOrden' src={logoPrimeroIcon} alt='imgPedido'/>
                                <button className='btnOrden' type="submit" onClick={comprar}>FINALIZAR COMPRA</button>
                                <img className='ImgImputOrden' src={logoPrimeroIcon} alt='imgPedido'/>
                            </div>
                                
                        </div>
                       
                    </div>
                </>
            )}

        </div>
    )
}

export default Cart;
