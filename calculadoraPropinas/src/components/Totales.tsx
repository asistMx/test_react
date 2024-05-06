import { useMemo } from "react";
import type { OrderItem } from "../types"

type TotalesProps = {
    order: OrderItem[];
    tip: number;
    placeOrder: () => void;

}

export default function Totales({order, tip, placeOrder} : TotalesProps) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])
    const tipAmount = useMemo(() => subtotalAmount * tip , [subtotalAmount, tip])

  return (
    <>
        <div className='space-y-3'>
            <h2 className='font-black text-2xl'>Totales y Propina</h2>
            <p>
                Subtotal a pagar: <span className='font-black'>${subtotalAmount}</span>
            </p>
            <p>
                Propina: <span className='font-black'>${tipAmount}</span>
            </p>
            <p>
                Total a pagar: <span className='font-black'>${subtotalAmount + tipAmount}</span>
            </p>
        </div>
        <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10" 
            disabled={order.length === 0}
            onClick={placeOrder}        
        >
            Guardar orden
        </button>
    </>
  )
}
