import { useState, useEffect, useMemo } from 'react'

export const useCart = () => {

    const initializeCart = () => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
     }

    const [cart, setCart] = useState(initializeCart)

    const addToCart = (guitar) => {
        const itemExist=cart.findIndex(item => item.id === guitar.id)
        if(itemExist >= 0){
            const newCart = [...cart]
            newCart[itemExist].quantity++
            setCart(newCart)
        } else {
            setCart([...cart, {...guitar, quantity: 1}])
        }
    }

    const removeFromCart = (guitar) => {
        const newCart = cart.filter(item => item.id !== guitar.id)
        setCart(newCart)
    }

    const addGuitar = (guitar) => {
        const newCart = [...cart]
        const itemExist=cart.findIndex(item => item.id === guitar.id)
        newCart[itemExist].quantity++
        setCart(newCart)
    }

    const substractGuitar = (guitar) => {
        const itemExist=cart.findIndex(item => item.id === guitar.id)
        if(itemExist >= 0){
            const newCart = [...cart]
            newCart[itemExist].quantity--
            if(newCart[itemExist].quantity === 0){
                newCart.splice(itemExist, 1)
            }
            setCart(newCart)
        }
    }

    const clearCart = () => {
        setCart([])
    }
    
    const isEmpty = useMemo(()=> cart.length === 0, [cart])

    const cartTotal = useMemo( ()=> cart.reduce((total, item) => total + (item.quantity * item.price), 0),[cart])

    const saveLocalStorage = () => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    useEffect(() => {
        saveLocalStorage()
    }, [cart])

   

    return {cart, addToCart, removeFromCart, addGuitar, substractGuitar, clearCart, isEmpty, cartTotal}
}