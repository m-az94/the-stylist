import React, { Component } from 'react'
import { preloadScript, OTSession, OTStreams } from 'opentok-react'
import ConnectionStatus from './ConnectionStatus';
import Publisher from './Publisher';
import Subscriber from './Subscriber';
import config from './config';

class VideoChat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      connected: false
    };

    this.sessionEvents = {
      sessionConnected: () => {
        this.setState({ connected: true });
      },
      sessionDisconnected: () => {
        this.setState({ connected: false });
      }
    };
  }

  // componentWillMount() {
  //   OT.registerScreenSharingExtension('chrome', config.CHROME_EXTENSION_ID, 2);
  // }

  onError = (err) => {
    this.setState({ error: `Failed to connect: ${err.message}` });
  }

  render() {
    return (
      <iframe src="https://tokbox.com/embed/embed/ot-embed.js?embedId=eda73476-10d6-487e-9a00-4833dab2779a&room=DEFAULT_ROOM&iframe=true" width="800px" height="640px" scrolling="auto" allow="microphone; camera" ></iframe>


      // <OTSession
      //   apiKey={config.API_KEY}
      //   sessionId={config.SESSION_ID}
      //   token={config.TOKEN}
      //   eventHandlers={this.sessionEvents}
      //   onError={this.onError}
      // >
      //   {this.state.error ? <div>{this.state.error}</div> : null}
      //   <ConnectionStatus connected={this.state.connected} />
      //   <Publisher />
      //   <OTStreams>
      //     <Subscriber />
      //   </OTStreams>
      // </OTSession>
    );
  }
}

export default preloadScript(VideoChat)
