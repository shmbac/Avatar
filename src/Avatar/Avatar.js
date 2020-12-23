import { Component } from 'react';
import './Avatar.css';
import img from "../Assets/Shmulik.jpg";


class Avatar extends Component{

    constructor(props){
        super (props);
    }
  
  render() {
      const {shape, width} = this.props;
    //   const shape = this.props.shape;
    return (
      <div className="Avatar">
          <img 
            src={img} 
            width={width} 
            alt="Shmulik" 
            className={shape} />
      </div>
    );
  }
}


export default Avatar;