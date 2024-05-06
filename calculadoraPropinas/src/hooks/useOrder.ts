import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";


export function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip , setTip] = useState<number>(0)
    
    const addItem = (item: MenuItem ) => {
        const itemExist = order.findIndex(orderItem => orderItem.id === item.id)
        if (itemExist >= 0){
            const newOrder: OrderItem[] = [...order]
            newOrder[itemExist].quantity++
            setOrder(newOrder)
        }else{
            const newItem: OrderItem = {...item, quantity: 1}
        setOrder([...order, newItem])
        }
    }

  const removeItem = (item: OrderItem) => {
        const newOrder: OrderItem[] = order.filter(orderItem => orderItem.id !== item.id)
        setOrder(newOrder)
  }

  const resetOrder = () => {
        setOrder([])
    }


const placeOrder = () => {
    setOrder([])
    setTip(0)
}

/* substractItem = (item: OrderItem) => {
    const itemExist = order.findIndex(orderItem => orderItem.id === item.id)
    if (itemExist >= 0){
        const newOrder: OrderItem[] = [...order]
        newOrder[itemExist].quantity--
        if (newOrder[itemExist].quantity === 0){
            newOrder.splice(itemExist, 1)
        }
        setOrder(newOrder)
    }
} */

    return {
        addItem,
        removeItem,
        resetOrder,
        tip,
        setTip,
        placeOrder,
        order

    }
    }
