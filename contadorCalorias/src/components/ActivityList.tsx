import { useMemo } from 'react';
import { Activity } from '../../types';
import { categories } from '../../data/categorias';


type ActivityListProps = {
    activities: Activity[];

}

const ActivityList = ({activities}:ActivityListProps) => {

    const categoryName = useMemo(() => 
        (category : Activity['category'])=> categories.map((cat) => cat.id === category ? cat.name : '')
    ,[activities])

    return (
        <>
            <h2 className='text-4xl font-bold text-slate-600 text-center'>Comida y Actividades</h2>
            {activities.map((activity) => (
                <div key={activity.id} className='px-5 py-10 bg-white mt-5 flex justify-between'>
                    <div className='space-y-2 relative'>
                        <p>{categoryName(activity.category)}</p>
                        <p className='text-2xl font-bold pt-5'>
                            {activity.name}
                        </p>
                        <p className='font-black text-4xl text-lime-500 '>
                            {activity.calories}{'  '} <span>Calorías</span>
                        </p>
                    </div>
                    <div>

                    </div>

                </div>
            ))}
        </>
    );
}

export default ActivityList;
