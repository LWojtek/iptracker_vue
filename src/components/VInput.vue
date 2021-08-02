<template>
    <div class="container wrapper">
        <div class="input__wrapper" :class="{ active: !isValid }">
            <div class="warning" :class="{ active: !isValid }">   
                <p>!</p>
            </div>
            <div>
                <input :class="{ active: !isValid }"
                    class="searchbar" 
                    type="text" 
                    placeholder="Search for IP address"
                    v-model="ip"
                    @keyup.enter="validateInput(ip)"
                    >
            </div>
            <div class="button" @click="validateInput(ip)">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg>
            </div>
        </div>
    </div>
</template>

<script>



    export default {
        name: 'VInput',
        data() {
            return {
                ip: '',
                isValid: true
            }
        },

        methods: {

            validateInput(ipaddress) {       
                if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
                    this.isValid = true;   
                    this.getIP() 
                } else {
                   this.isValid = false;    
                } 
                   
            },

            getIP(){
                if (this.ip) {
                    this.$store.state.newIP = this.ip;
                    this.$store.state.isEmpty = false;
                    this.$store.dispatch('getIP'); 
                } else {
                    this.$store.state.isEmpty = true;   
                    
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.input__wrapper {
    position: relative;

    display: flex;

    background-color: #fff;
    min-width: 50%;
    border-radius: 2rem;
    z-index: 9;
    min-height: 5rem;

    &.active {
        background-color: rgb(255, 176, 176);
     
    }
    

    >div {
        flex-basis: 90%;
    }

    .searchbar {
        width: 100.2%;
        height: 100%;

        padding: 1rem 1rem 1rem 1.5rem;
        background: white;

        border: 3px solid #fff;  
        border-radius: 2rem 0 0 2rem;
        transition: border 250ms;

        &.active {
            border: 3px solid #e74c3c;;
        }
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 10%;
        min-width: 7rem;
        cursor: pointer;
        background-color: $very-dark-grey;
        transition: background-color 250ms;
        transform: translateX(1px);

        border-radius: 0 2rem 2rem 0;


        &:hover {
            background-color: $dark-grey;
        }
    }

    .warning {
        position: absolute;
        top: 1rem;
        right: 8rem;

        display: flex;
        justify-content: center;
        align-items: center;

        height: 3rem;
        width: 3rem;
        
        background-color: transparent;
        z-index: 1;
        border-radius: 50%;
        transition: background-color 250ms;

        p {
            color: #fff;
        }

        &.active {
            background-color: #e74c3c;
        }

    }
}

</style>