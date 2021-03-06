import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor(){
    super()
    this.state = {
      fontColor: 'Black',
      fontSize: 14,
      fontFamily: 'Arial',
      allowEdit: true
    }
    this.updateColor = this.updateColor.bind(this)
    this.updateSize = this.updateSize.bind(this)
    this.updateFamily = this.updateFamily.bind(this)
  }

  updateColor(val){
    this.setState ({fontColor: val})
  }

  updateSize(val){
    this.setState ({fontSize: val})
  }

  updateFamily(val){
    this.setState ({fontFamily: val})
  }

  // updateEditStatus

  render() {
    console.log(this.state)
    return (
      <div>
        <div className="headerBar">
          { /* Render EditToggle */ }
          <ColorChanger
            update = {this.updateColor}
            fontColor = {this.state.fontColor}
          />
         <SizeChanger
            update = {this.updateSize}
            fontSize = {this.state.fontSize}
         />
          <FamilyChanger
            update = {this.updateFamily}
            fontFamily = {this.state.fontFamily}
          />
        </div>
        <div className="textArea">
          <TextContainer 
            fontColor = {this.state.fontColor}
            fontSize = {this.state.fontSize}
            fontFamily = {this.state.fontFamily}
          />
        </div>
      </div>
    )
  }
}

export default App;
