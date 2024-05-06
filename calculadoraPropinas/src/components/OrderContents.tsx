import type { OrderItem } from "../types"


type OrderContentsProps = { 
    order: OrderItem[],
    removeItem: (item: OrderItem) => void
    
}

export default function OrderContents({order, removeItem}: OrderContentsProps) {
  return (
    <div className="flex flex-col justify-between">
        <div>
            <h2 className="font-black text-4xl">Consumo</h2>
            <div className="space-y-3 mt-5">
            {
                order.map((item) => (
                <div key={item.id} className="flex justify-between">
                    <div>
                        <p>{item.name} </p>
                        <p className="font-black">${item.price}</p>
                    </div>
                    <div className="flex align-middle">

                        <p className="mr-5">Cantidad: <span className="font-black">{item.quantity}</span></p>
                        <button
                            className="bg-red-600 h-8 w-8 text-white rounded-full font-bold hover:bg-red-700"
                            onClick={() => removeItem(item)}
                        >
                            X
                        </button>
                    </div>
                </div>
                ))
            }
            </div>
        </div>
        
    </div>
  )
}
