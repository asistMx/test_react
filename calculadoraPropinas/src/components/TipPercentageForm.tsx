import { Dispatch, SetStateAction } from "react"
import { tipOptions } from "../data/tipsOptions.ts"

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>
    tip : number;
}


export default function TipPercentageForm({setTip, tip}: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl"> Propina</h3>
      <form >
        {tipOptions.map(tipOption => (
            <div key={tipOption.id} className="flex gap-2">
                <label htmlFor="">{tipOption.label}</label>
                <input
                    id = {tipOption.id}
                    type="radio"
                    name="tip"
                    value={tipOption.value}
                    onChange={e=> setTip(Number(e.target.value))}
                    checked={tip === tipOption.value} 
                />
            </div>
        ))
        }

      </form>
    </div>
  )
}
