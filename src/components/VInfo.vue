<template>
    <div class="container relative zindex"  v-if="this.$store.state.loaded" >
        <div class="content__info">
            <div class="content__info--address">
                <span>ip address</span>
                <p>{{ip.address}}</p>
            </div>
            <div class="content__info--location">
                <span>location</span>
                <p>{{ip.city}}, {{ip.state}}<br>{{ip.postalCode}}</p>
            </div>
            <div class="content__info--timezone">
                <span>timezone</span>
                <p>UTC {{ip.timezone}}</p>
            </div>
            <div class="content__info--isp">
                <span>isp</span>
                <p>{{ip.isp}}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'VInfo',
    computed: {
        ip(){
            return this.$store.state.ip
        }
    },
};

</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

.zindex {
    z-index: 1;

}

.content__info {
    position: absolute;
    left: 10%;


    display: flex;
    margin: 0 auto;
    background-color: $white;
    min-width: 80%;
    max-width: 80%;
    min-height: 10rem;
    padding: 3rem 0;
    transform: translateY(-50%);

    border-radius: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);

    pointer-events: none;

    @media screen and (max-width: 767px) {
        flex-wrap: wrap;
        padding: 1rem 0;
        transform: translateY(-60%);
        min-width: 90%;
        left: 5%;
    }
    
    div {
        min-height: 100%;
        border-right: 1px solid rgba(0,0,0,0.1);           
    
        &:last-of-type {       
            border-right: none;
        }
    }

    &--address,
    &--location,
    &--isp,
    &--timezone {
        flex-basis: 25%;
        color: $very-dark-grey;
        padding: 0rem 2rem;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media screen and (max-width: 767px) {
            flex-basis: 100%;
            text-align: center;
        }
    

        p {
            flex-basis: 90%;
            font-size: 2.4rem;    

            @media screen and (max-width: 767px) {
                font-size: 1.8rem;
                margin-bottom: 1.5rem;
                font-weight: 600;
            }
        }

        span {
            flex-basis: 5%;
            font-size: 1.3rem;
            color: $dark-grey;
            text-transform: uppercase;    
            letter-spacing: 1px;
            font-weight: 600;
            transform: translateY(-1rem);

            @media screen and (max-width: 767px) {
                font-size: 1.1rem;
                font-weight: 400;
                transform: translateY(0rem);
                margin-bottom: 0.5rem;
            }
    
        }

    }
}

</style>