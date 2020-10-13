import React from 'react'
import { Map, TileLayer } from 'react-leaflet'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'

import 'leaflet/dist/leaflet.css'
import mapMarkerImg from '../images/map-marker.svg'

function OrphangesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Map marker Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Goiânia</strong>
                    <span>Goiás</span>
                </footer>
            </aside>

            <Map 
                center={[-16.6824873,-49.2626649]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
             </Map>

            <Link to="" className="create-orphanage"><FiPlus size={32} color="#FFF"/></Link>
        </div>
    )
}


export default OrphangesMap