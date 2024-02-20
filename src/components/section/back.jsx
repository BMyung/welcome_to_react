
import {Cardback} from '../card/cardback'

export class Back extends React.Component{
    render(){
        return (
        <div className='backSection'>
        <Cardback />
        <Cardback />
        <Cardback />
        </div>

    )
}
}