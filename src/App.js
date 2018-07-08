import React, { Component } from 'react'
import Picture from './components/picture'
import * as actionTypes from './appStore/actions/actionTypes'
import { connect } from 'react-redux'

import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    const offlineImages =localStorage.getItem("pictures")
    if (offlineImages) {
      this.props.storeNewImg(JSON.parse(offlineImages))
    }
  }

  fileChooseHandler = (event) => {
    const reader = new FileReader()
    const file = event.target.files[0]
     reader.readAsDataURL(file)
    reader.addEventListener("load",  ()=> {
      this.props.storeNewImg(reader.result)
      localStorage.setItem("pictures",JSON.stringify(this.props.gallery) );
    }, false);


  }
  plusClicked = (event) => {
    document.getElementById('fileInput').click()
  }
  updateGallery = () => {
    return this.props.gallery.map((pic, index) => <Picture key={index} imgSrc={pic}/>)
  }
  render () {
    return (
      <div className="App">
        <div className={'gallery'}>
          <input type="file" onChange={this.fileChooseHandler} className={'inputEl'} id={'fileInput'}/>
          <div className={'picture'} onClick={this.plusClicked}>
            <img src={'/plus.png'} alt={''} width="42" height="42"/>
          </div>
          {this.updateGallery()}
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    gallery: state.images
  }
}

const mapDispatchToProps = dispatch => {
  return {
    storeNewImg: (imgPath) => dispatch({type: actionTypes.ADD_IMAGE, newImg: imgPath})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)