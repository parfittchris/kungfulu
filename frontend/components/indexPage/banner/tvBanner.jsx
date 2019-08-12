import React from 'react';
import TvBannerItemContainer from './tvBannerItemContainer';

class TVBanner extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.userSelectAllShows();
    }

    render() {
        const all_shows = this.props.shows.map(show => {
            return (
                <TvBannerItemContainer key={show.id} show={show} />             
            )
        });
            return (
                <div>
                    <ul className="show-item-container">
                        {all_shows}
                    </ul>
                </div>
            )
        }
    };

export default TVBanner