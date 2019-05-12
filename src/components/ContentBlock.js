import React from 'react';
import LocationItems from '../data/LocationItemsData';

class ContentBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title : "state"
        }
    }

    render() {
        return (
            <div className="locationDataBlock">
                <h2>{LocationItems.data[0].title}</h2>
                <hr />
                {LocationItems.data[0].address1}
                {LocationItems.data[0].address2}
                {LocationItems.data[0].address3}
                {LocationItems.data[0].phoneNumber} 
                <br />
                {LocationItems.data[0].roll1}
                {LocationItems.data[0].roll2}
                {LocationItems.data[0].roll3}
                {LocationItems.data[0].roll4}
                {LocationItems.data[0].roll5}            
            </div>
        )    
    }
}

export default ContentBlock;