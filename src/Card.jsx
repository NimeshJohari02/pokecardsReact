import React , {Component} from "react";
import 'tachyons';

function MakeStd(n) {
        return (n < 10 ? '00' : (n<100?'0':'')) + n;

}
class Card extends Component {
    render() {
        {console.log(this.props);}
        let {id,name,type,base_exp}=this.props;
        let myimage=MakeStd(id);
        let imgaddress=`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${myimage}.png`
        console.log(imgaddress);

        console.log(myimage)
        return(
           <div className="bg-black white dib br4 pa4 ma3 grow-large">
               <h2>Name : {name}</h2>
               <img src={imgaddress} />
               <h3>Type : {type}</h3>
               <p>Experience : {base_exp}</p>
           </div>
        )
    }
}
export default Card;
