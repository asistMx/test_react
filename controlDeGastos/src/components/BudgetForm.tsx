import {useMemo, useState} from 'react';

const BudgetForm = () => {

    const [budget, setBudget] = useState(0);   
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(e.target.valueAsNumber);
    }

    const isValid =useMemo(() => {
        return isNaN(budget) || budget <= 0;
    },[budget]);

    return (
        <form className='space-y-5 '>
            <div className='flex flex-col space-y-5'>
                <label htmlFor="budget" className='text-4xl text-blue-600 font-bold text-center'>
                    Definir Presupuesto
                </label>
                <input 
                type="number" 
                id="budget" 
                placeholder="Ingresa tu presupuesto"
                name="budget"
                className='w-full bg-white border border-gray-200 p-2'
                value={budget}
                onChange={handleChange}
                />
            </div>
            <input 
                type="submit" 
                value={'Definir Presupuesto'}
                className='w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white p-2 font-black uppercase disabled:opacity-10' 
                disabled={isValid}           
            />
        </form>
    );
}

export default BudgetForm;
