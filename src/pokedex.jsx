import React, {Component} from "react";
import data from "./Data";
import Card from './Card.jsx';
import 'tachyons'

function CreateCard(element) {
    return(
        < Card
            key={element.id}
            id={element.id}
            name={element.name}
            type={element.type}
            base_exp={element.base_experience}
        />
    )
}

class PokeDex extends Component{
    render()
    {

        return(
            <div className="bg-light-blue ">
                {console.log(data)}
                {data.map(CreateCard)}
            </div>
        );


    }
}
export default PokeDex;
