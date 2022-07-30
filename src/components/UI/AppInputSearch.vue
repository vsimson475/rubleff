<template>
  <div class="search">
    <input
    class="search__input"
    type="text"
    >
    <svg class="search__icon" width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2979 7.64895C13.2979 10.7688 10.7688 13.2979 7.64895 13.2979C4.52912 13.2979 2 10.7688 2 7.64895C2 4.52912 4.52912 2 7.64895 2C10.7688 2 13.2979 4.52912 13.2979 7.64895ZM13.0252 13.0897C11.6437 14.455 9.74474 15.2979 7.64895 15.2979C3.42455 15.2979 0 11.8733 0 7.64895C0 3.42455 3.42455 0 7.64895 0C11.8733 0 15.2979 3.42455 15.2979 7.64895C15.2979 9.05717 14.9173 10.3765 14.2535 11.5097L20.8132 16.9944C21.2369 17.3486 21.2932 17.9793 20.9389 18.403C20.5847 18.8267 19.954 18.883 19.5303 18.5287L13.0252 13.0897Z" fill="#FF0000"/>
    </svg>
  </div>
</template>

<script>
export default {
    name: 'AppInputSearch'
}
</script>

<style lang="scss" scoped>
    .search {
        display: flex;
        align-items: center;
        column-gap: 10px;
    }

    .search__input {
        border: none;
        outline: none;

        box-shadow: 0px -1px 4px rgba(191, 191, 191, 0.37), 0px 1px 6px rgba(155, 155, 155, 0.26);

        padding: 4px;
    }

    .search__input {
        width: 100%;
    }
</style>