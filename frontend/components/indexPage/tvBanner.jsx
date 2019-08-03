import React from 'react'
import TvBannerItem from './tvBannerItem'

class TVBanner extends React.Component {
    componentDidMount() {
        this.props.userSelectAllShows();
    }

    render() {
        const all_shows = this.props.shows.map(show => {
            return (
                <TvBannerItem 
                key={show.id}
                show={show}
                />
            )
        });

        return (
            <div>
                <ul>
                    {all_shows}
                </ul>
            </div>
        );
    }
}

export default TVBanner