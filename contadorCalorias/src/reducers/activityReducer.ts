import type{ Activity } from '../../types';




export type ActivityActions =   {type : 'save_activity', payload:{newActivity: Activity} } | 
                                {type: 'delete_activity', payload:{id: number}}


export type ActivityState = {
    activities: Activity[]
}


export const initialState : ActivityState = {
    activities: []
}

export const activityReducer = (state: ActivityState, action: ActivityActions) => {

    switch (action.type) {
    
        case 'save_activity':
            console.log("Desde el type de save activity");
            return {
                ...state,
                activities: [...state.activities, action.payload.newActivity]
            }
        case 'delete_activity':
            console.log("Desde el delete actividades");
            /* return {
                activities: state.activities.filter((activity) => activity.category !== action.payload.id)
            } */
            break
        default: return state;
            break;
 
        
    }

    return state;
}  