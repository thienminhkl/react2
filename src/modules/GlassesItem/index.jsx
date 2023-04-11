import React, { Component } from 'react'

export default class GlassesItem extends Component {
  glassesItem = [
    {
      "id": 1,
      "price": 30,
      "name": "GUCCI G8850U",
      "url": "./glassesImage/v1.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 2,
      "price": 50,
      "name": "GUCCI G8759H",
      "url": "./glassesImage/v2.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 3,
      "price": 30,
      "name": "DIOR D6700HQ",
      "url": "./glassesImage/v3.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 4,
      "price": 70,
      "name": "DIOR D6005U",
      "url": "./glassesImage/v4.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 5,
      "price": 40,
      "name": "PRADA P8750",
      "url": "./glassesImage/v5.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 6,
      "price": 60,
      "name": "PRADA P9700",
      "url": "./glassesImage/v6.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 7,
      "price": 80,
      "name": "FENDI F8750",
      "url": "./glassesImage/v7.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 8,
      "price": 100,
      "name": "FENDI F8500",
      "url": "./glassesImage/v8.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 9,
      "price": 60,
      "name": "FENDI F4300",
      "url": "./glassesImage/v9.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  ]

  state = {
    glasses: {
      "id": 1,
      "price": 30,
      "name": "GUCCI G8850U",
      "url": "./glassesImage/v1.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  }
  handleChangeGlasses = (item) => {
    this.setState({
      glasses: item
    })
  }


  render() {
    return (
      <div>
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#00000099',
        }} />
        <img
          src="./glassesImage/background.jpg"
          className="d-block w-100"
          alt="background"
          style={{
            height: '100vh',
            objectFit: 'cover'
          }} />
        <div className='container mt-5'>
          <div className='fixed-top'
            style={{
              transform: 'translateY(20%)'
            }}>
            <div
              className='row' style={{
                placeContent: 'center'
              }}
            >
              <div className='col-3'>
                <img className='w-75' src="./glassesImage/model.jpg" alt="" />
              </div>
              <div className='col-3' style={{
                position: 'relative'
              }} >
                <img className='w-75' src="./glassesImage/model.jpg" alt=""
                />
                <img src={this.state.glasses.url} alt="" style={{
                  position: 'absolute',
                  top: '26%',
                  left: '18.5%',
                  width: '40%'
                }}/>
                <div className='card-body p-2' style={{
                  position: 'absolute',
                  bottom: '8px',
                }}>
                  <p className='text-primary m-0'>{this.state.glasses.name}</p>
                  <p className='text-info m-0'>Price: {this.state.glasses.price}$</p>
                  <p className='w-75 mb-0'>{this.state.glasses.desc}</p>
                </div>
              </div>
            </div>
            <div className='row mt-4 justify-content-center bg-light'>
              <h3 className='text-dark text-center'>Select glasses type to try it on</h3>
              {
                this.glassesItem.map((item) =>
                  <div className='col-3' key={item.id}>
                    <button className='btn btn-outline-secondary btn-sm m-2' onClick={() => this.handleChangeGlasses(item)}>
                      <img className='w-25' src={item.url} alt="" />

                    </button>
                  </div>

                )}
            </div>
          </div>

        </div>
      </div>

    )
  }
}
