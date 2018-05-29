import React, {Component} from 'react';
import ReactHowler from 'react-howler';

class SoundCard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      playing: false
    };
  }
  
  handleClick = () => {
    this.player.seek(0);
    this.setState({
      playing: true
    });
  }
  
  handleEnd = () => {
    this.setState({
      playing: false
    });
  }
  
  render() {
    let {sound, title} = this.props;
    
    return (
      <div>
        <ReactHowler
          src={sound}
          playing={this.state.playing}
          ref={(ref) => (this.player = ref)}
          onEnd={this.handleEnd}
        />
        <button onClick={this.handleClick}>{title}</button>
      </div>
    );
  }
}

export default SoundCard;