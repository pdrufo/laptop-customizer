import React from 'react';
import Feature from './Feature';
import FeatureItem from './FeatureItem';
import slugify from 'slugify';
import './MainForm.css'

function MainForm(props) {
    const features = Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + "-" + idx;
        const options = props.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          const name = slugify(feature);
          return (
            <FeatureItem
              key={itemHash}
              itemHash={itemHash}
              feature={feature}
              item={item}
              selected={props.selected}
              name={name}
              USCurrencyFormat={props.USCurrencyFormat}
              updateFeature={props.updateFeature}
            />
          );
        });
    
        return (
          <Feature
            key={featureHash}
            featureHash={featureHash}
            feature={feature}
            options={options}
          />
        );
      });
    
      return (
        <form className="main__form">
          <h2>Customize your laptop</h2>
          {features}
        </form>
      );
    }
export default MainForm;