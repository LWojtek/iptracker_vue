<template>
    <div class="container wrapper">
        <div class="input__wrapper">
            <div>
                <input 
                    class="searchbar" 
                    type="text" 
                    placeholder="Search for any IP address or domain">
            </div>
            <div class="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'VInput'
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
    display: flex;

    background-color: #fff;
    min-width: 50%;
    border-radius: 2rem;

    >div {
        flex-basis: 90%;
        padding: 1rem;
    }

    .searchbar {
        width: 100%;
        min-height: 4rem;
        padding-left: 0.5rem;

        border: none;
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 10%;
        cursor: pointer;
        background-color: $very-dark-grey;
        transition: background-color 250ms;
        transform: translateX(1px);

        border-radius: 0 2rem 2rem 0;


        &:hover {
            background-color: $dark-grey;
        }
    }
}

</style>