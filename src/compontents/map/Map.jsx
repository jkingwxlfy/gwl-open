import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import { useCallback, useState } from 'react'
import useIsMobile from '@/hooks/useIsMobile'

const center = {
    lat: 43.27274113515528,
    lng: 76.94951102973967,
}

const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
    })

    const [map, setMap] = useState(null)
    const isMobile = useIsMobile()

    const containerStyle = {
        width: isMobile ? '100vw' : '355px',
        height: '355px',
    }

    const onLoad = useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center)
        map.fitBounds(bounds)

        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : (
        <></>
    )
}
export default Map
