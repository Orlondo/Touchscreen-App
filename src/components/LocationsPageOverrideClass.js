import React from 'react';
import ReactDOM from 'react-dom';
// import { Player, BigPlayButton } from 'video-react';
import ItemButtonGenerator from './ItemButtonGenerator';

export default class LocationsPageOverrideClass extends ItemButtonGenerator {
  render() {
    return (
        <div class="scene">
            <this.DataBlockContainer />
            <div className="gallery-container locations-gallery-container">
                <this.BreadcrumbController />
                <this.SelectedItemContainer />
                <this.ItemButtonContainer />
            </div>
        </div>         
    )
  }
}
