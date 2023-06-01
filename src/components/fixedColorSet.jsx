
import { specialColorSets } from "../../data/colorSets";
import Cube from "./Cube";



// map and push
const AsetColors = specialColorSets.map(aSet =>{
  console.log(aSet.aSetColors)
  let list=[]
  for(let i=0; i<6; i++){
    list.push(<Cube color={aSet.aSetColors[i]} key={aSet.Id}/>)
    if(i == 5){
      list = (
      <>
        <div>{aSet.name}</div>
        <div className="cubes">
          {list}
        </div>
      </>
      )
    }
  }
  return list
})

export default function FixedColorSet(){
  return(
    <div>
      {AsetColors}
    </div>
  )
}