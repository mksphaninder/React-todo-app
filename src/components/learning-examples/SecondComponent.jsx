import React, { Component } from 'react';

class SecondComponent extends Component
{
  render()
  {
    return(
      <div className="secondComponent">
        Second Component
      </div>
    );
  }
}

export default SecondComponent;

export function ThirdComponent()
{
  return(
    <div className="thirdComponent">
      Third Component
    </div>
  );
}

export function FourthComponent()
{
  return(
    <div className="fourthComponent">
      Fourth Component
    </div>
  );
}
