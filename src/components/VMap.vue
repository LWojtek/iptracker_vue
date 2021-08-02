<template>
    <div class="test" id="mapid" ref="map">

    </div>
</template>

<script>

import leaflet from 'leaflet';

import { mapState } from 'vuex';

    export default {
        name: 'VMap',
        computed: {
            ...mapState([
                'ip'
            ]),
            latitude(){
                return this.$store.state.ip.lat;
            },
            longtitude(){
                return this.$store.state.ip.lng;
            },

        },
        watch: {
            latitude(){
                if (this.ip.lat === 50.09) {
                    leaflet.marker([this.ip.lat, this.ip.lng]).addTo(this.mymap);
                    this.mymap.setView([this.ip.lat, this.ip.lng], 13);
                } else {
                    leaflet.marker([this.ip.lat, this.ip.lng]).addTo(this.mymap);
                    this.mymap.setView([this.ip.lat, this.ip.lng], 16);
                }

            },
        },
        mounted(){
            
            this.mymap = leaflet.map('mapid').setView([50.095, 18.542], 13);
            this.mymap.zoomControl.setPosition('bottomright')

            leaflet.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibHdvanRlayIsImEiOiJja3I1M2x1NWgyM3hhMnBzNjJ4eGQyajV1In0.z3MphZKQXKc0i2Bgj8qdkA`, {        
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                position: 'bottomright',
                accessToken: 'pk.eyJ1IjoibHdvanRlayIsImEiOiJja3I1M2x1NWgyM3hhMnBzNjJ4eGQyajV1In0.z3MphZKQXKc0i2Bgj8qdkA',        
            }).addTo(this.mymap);

        }
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

#mapid {
    width: 100%;
    min-height: calc(100vh - 30rem);
    z-index: 0;
}

</style>