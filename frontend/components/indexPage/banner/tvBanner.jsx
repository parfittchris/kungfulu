import React from 'react';
import TvBannerItemContainer from './tvBannerItemContainer';

class TVBanner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allShows: [],
        }

        this.shiftShows = this.shiftShows.bind(this);
    }

    componentDidMount() {
        this.props.userSelectAllShows().then(response => {
            this.setState({
                allShows: this.props.shows.map(show => { return show }),
            })
        });
    }

    shiftShows() {
        for (let i = 0; i < 5; i++) {
            this.state.allShows.push(this.state.allShows.shift())
        }
        this.forceUpdate();
    }

    render() {
        const all_shows = this.state.allShows.map(show => {
            return (
                <TvBannerItemContainer key={show.id} show={show} />             
            )
        });

        let visible_shows = all_shows.slice(0, 5);

            return (
                <div>
                    <ul className="show-item-container">
                        {visible_shows}
                    </ul>
                    <button className="next-videos-button" onClick={() => this.shiftShows()}> > </button>
                </div>
            )
        }
    }

export default TVBanner