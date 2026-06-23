window.addEventListener('load', function() {
    const mapDiv = document.getElementById('map');
    if(!mapDiv) return;
    
    const listingLocation = mapDiv.dataset.location;
    const listingTitle = mapDiv.dataset.title;
    const listingLoc = mapDiv.dataset.listingLocation;
    
    const map = L.map('map').setView([20.5937, 78.9629], 5);

    // Different Map Styles
    const styles = {
        "Streets": L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', { attribution: '© CARTO' }),
        "Light": L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', { attribution: '© CARTO' }),
        "Dark": L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { attribution: '© CARTO' }),
        "Satellite": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { attribution: '© Esri' }),
        "Outdoors": L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', { attribution: '© OpenTopoMap' }),
    };

    // Default style
    styles["Streets"].addTo(map);

    // Layer control add karo (top-right corner mein)
    L.control.layers(styles).addTo(map);

    // Custom Icon
    const customIcon = L.divIcon({
        html: `<div style="
            background-color: #FF385C;
            width: 36px;
            height: 36px;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            border: 3px solid white;
            box-shadow: 0 2px 6px rgba(0,0,0,0.4);
        "></div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -36],
        className: ''
    });
    
    fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(listingLocation)}&format=json&limit=1`)
        .then(res => res.json())
        .then(data => {
            if(data.length > 0) {
                const lat = parseFloat(data[0].lat);
                const lon = parseFloat(data[0].lon);
                map.setView([lat, lon], 12);

                L.circle([lat, lon], {
                    color: '#FF385C',
                    fillColor: '#FF385C',
                    fillOpacity: 0.15,
                    radius: 2000
                }).addTo(map);

                L.marker([lat, lon], { icon: customIcon })
                    .addTo(map)
                    .bindPopup(`
                        <div style="text-align:center; padding: 5px;">
                            <b>${listingTitle}</b><br>
                            <small>${listingLoc}</small><br>
                            <small style="color:#FF385C;">Exact location provided after booking</small>
                        </div>
                    `)
                    .openPopup();
            }
        });
});