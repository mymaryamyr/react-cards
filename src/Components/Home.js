import React, { Component } from 'react';
import {  withTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import s from './Home.module.css'

mapboxgl.accessToken = 'pk.eyJ1IjoibXltYXJ5YW15ciIsImEiOiJja2R5NXE0b2IzOGYwMnJ0YXlqeDJjdml6In0.Os3Z061nPq_8gy2RP2804Q'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    lng: 51.3890,
    lat: 35.6892,
    zoom: 3
    };
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
    container: this.mapContainer,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [this.state.lng, this.state.lat],
    zoom: this.state.zoom
    });
    map.on('move', () => {
      this.setState({
      lng: map.getCenter().lng.toFixed(4),
      lat: map.getCenter().lat.toFixed(4),
      zoom: map.getZoom().toFixed(2)
      });
    });
  }
  render() {
    const { t } = this.props;
      return(
          <div>
              <div>{t("welcome.title")}</div>
              <section className={s.container}>
              <div className={s.sidebarStyle}>
                Longitude: {this.state.lng} | 
                Latitude: {this.state.lat} | 
                Zoom: {this.state.zoom}
              </div>
              <div ref={el => this.mapContainer = el} 
                className={s.mapContainer} 
              />
              </section>
          </div>
      )
  }
}
Home.propTypes = {
  t: PropTypes.func
}

export default withTranslation()(Home);