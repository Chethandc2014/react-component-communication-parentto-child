import React,{Component} from 'react';
import {render} from 'reacr-dom';

export class Child extends React.Component{
 
 


  render(){
    return(
      <p>
       initial:{this.props.initial}
      </p>
    );
  }
}

