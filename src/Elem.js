import React from "react";
import "./elem.css";
//JS code-okat mindig {} közé helyezzük 

class Elem extends React.Component {
//

kattintasKezelo = () => {
  //console.log(this.props.id);
 if(!this.props.elem.allapot){
  this.props.szulofv(this.props.id);
 }
  
};

  render() {
    return (
      <div className="Elem" onClick={this.kattintasKezelo}>     
       {this.props.elem.jel  } 
      </div>
    );
  }
}

export default Elem;