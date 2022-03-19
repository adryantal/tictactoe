import React from "react";
import Elem from "./Elem";
import Info from "./Info";
import "./jatekter.css";


class Jatekter extends React.Component {


    constructor(){
        super();
        this.meret=9; //így kívülről is használható
        let kTomb=[];
        for (let index = 0; index < this.meret; index++) {
            kTomb.push({
              jel:"",
              allapot: false
            });          
        }
        this.state = {
        tomb: kTomb,
        kattintasokSzama: 0,
        dbX : 0,
        dbY : 0
        }        
    }

    beszur=(id)=>{
      console.log(id);     
    const segedTomb = this.state.tomb;
    const aktKattSzam = this.state.kattintasokSzama+1;
    (aktKattSzam%2)==0 ? segedTomb[id].jel="X":segedTomb[id].jel="O" ;  
    segedTomb[id].allapot=true;
    this.setState({
      tomb: segedTomb,
      kattintasokSzama: aktKattSzam
    });
  }

  ellenoriz(j){
     nyert = false;

     
   
    if(nyert){
      return jel+" nyert!";
    }

  }


  render() {
    return (
      <div className="Jatekter">
        <header className="App-header">
          <h1>TicTacToe</h1>
        </header>
        <section className="Jatekter-refreshed">
        {this.state.tomb.map((elem,index )=> {
            return (
          <Elem id={index} elem={elem} key={index} szulofv={this.beszur}/>
            );
        })} 

         
        </section>

      

        <section className="Info"> <Info /> 
        </section>
        <footer></footer>
      </div>
    );
    //key: azonositas miatt kötelező; ezzel adjuk át, melyik elem változott, és ez alapján frissül az állapot
    //props-sal viszont nem érhető el
  }
}

export default Jatekter;
