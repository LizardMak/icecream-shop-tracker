import React from "react";
import IceCreamMenu from "./IceCreamMenu";
import BuyForm from "./buyForm";

export default class IceCreamInformationHolder extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    formVisibleOnPage: false,
    iceCreamMenu: [],
  }
};

handleClick = () => {
  this.setState(prevState => ({
    formVisibleOnPage: !prevState.formVisibleOnPage
  })); 
}

render(){
  let currentlyVisibleState = null;
  let buttonText = null;
  if (this.state.formVisibleOnPage == false) {
    currentlyVisibleState = <IceCreamMenu iceCreamMenu={this.state.iceCreamMenu}/>
    buttonText = "Switch to Restock Mode"
  } else {
    currentlyVisibleState = <BuyForm/>
    buttonText = "Switch to Sell Mode"
  }
  return(
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
    
  )
}
}


