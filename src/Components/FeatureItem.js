import React from 'react'
import './FeatureItem.css'

function FeatureItem(props) {
    return (
        <div key={props.itemHash} className="feature__item">
            <input
              type="radio"
              id={props.itemHash}
              className="feature__option"
              name={props.name}
              checked={props.item.name === props.selected[props.feature].name}
              onChange={e => props.updateFeature(props.feature, props.item)}
            />
            <label htmlFor={props.itemHash} className="feature__label">
              {props.item.name} ({props.USCurrencyFormat.format(props.item.cost)})
            </label>
        </div>
        );
    
}

export default FeatureItem