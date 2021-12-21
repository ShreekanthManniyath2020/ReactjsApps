function Header(props){
    return(<h1>hello I am {props.data}</h1>)
}

//using class component 
/*
import {Component} from 'react'

class Header extends Component{
    render(){
        return(<h1>hello I am {this.props.data}</h1>)
    }
}
}
*/

export default Header