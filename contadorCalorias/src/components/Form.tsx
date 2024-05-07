import { useState, ChangeEvent, Dispatch} from 'react';
import { categories } from '../../data/categorias';
import type{ Activity } from '../../types';
import type{ ActivityState, ActivityActions } from '../reducers/activityReducer';
import {v4 as uuidv4} from 'uuid';




type FormProps = {
    dispatch: Dispatch<ActivityActions>;
    state: ActivityState;
}


const initialState : Activity = {
    id: uuidv4(),
    category: 1,
    name: '',
    calories: 0
}
const Form = ({dispatch, state} : FormProps) => {

    const [activity , setActivity] = useState<Activity>(initialState)

    const isValidActivity = () => {
        const {name, calories} = activity;
        return name.trim() !== '' && calories > 0;
    }
   
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const isNumberField = ['category', 'calories'].includes(e.target.id);
        setActivity({
            ...activity,
            [e.target.name]: isNumberField ? Number(e.target.value) : e.target.value
        }) 
    }

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({type: 'save_activity', payload: {newActivity: activity}})
        setActivity(initialState) 
        
    }


    return (
        <form
            className='space-y-5 bg-white shadow p-10 rounded-lg'
            onSubmit={handleSubmit}
        >
           <div className='grid grid-cols gap-3'>
                <label htmlFor="category" className='font-bold'>Categoria:</label>
                <select 
                    className='border border-slate-300 p-2 rounded-lg w-full bg-white' 
                    id="category"
                    name="category"
                    value={activity.category}   
                    onChange={handleChange}    
                >   
                    {
                        categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))
                    }
                </select>
           </div>
           <div
            className='grid grid-cols-1 gap-3'
           >
                 <label htmlFor="name" className='font-bold'>Actividad:</label>
                 <input 
                    type="text"
                    id="name"
                    name="name"
                    className='border border-slate-300 p-2 rounded-lg w-full bg-white'
                    placeholder='Ej. Comida, Jugo de naranja, Ensalada, Ejercicio, Pesas, Bicicleta.'
                    value={activity.name}
                    onChange={handleChange}
                />  
           </div>
           <div
            className='grid grid-cols-1 gap-3'
           >
                 <label htmlFor="calories" className='font-bold'>Calorias:</label>
                 <input 
                    type="number"
                    id="calories"
                    name="calories"
                    className='border border-slate-300 p-2 rounded-lg w-full bg-white'
                    placeholder='Calorias. Ej. 300, 500'
                    value={activity.calories}
                    onChange={handleChange}
                />  
           </div>
           <input type="submit" 
                className='bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10'
                value= {activity.category === 1 ? 'Agregar Comida' : 'Agregar Ejercicio'}
                disabled={!isValidActivity()}
           />
        </form>
    );
}

export default Form;
