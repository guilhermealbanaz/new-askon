<template>
  <div>
    <advanced-search
      v-model="model"
      :options="options"
    >
    </advanced-search>
  </div>
</template>

<script>
  import AdvancedSearch from 'vue-advanced-search'
  export default {
    components: { AdvancedSearch },
    data () {
      return {
        model: null,
        options: [
            { label: 'League of Legends', value: 'value1' },
            { label: 'Elden Ring', value: 'value2' },
            { label: 'Dark Souls', value: 'value1' },
            { label: 'Fortnite', value: 'value2' },
            { label: 'Valorant', value: 'value1' },
        ]
      }
    }
  }
</script>
<style src="vue-advanced-search/dist/AdvancedSearch.css"></style>
<style>
.advanced-search-input .advanced-input-container .advanced-input-section .advanced-input, .advanced-search-input .advanced-input-container .advanced-input-section .label {
    font-family: Source Sans Pro;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 100%;
    border-radius: 5px;
    border: 1px solid #4630ab;
    background: #111;
    font-size: 14px;
    outline: unset;
    padding-left: 2px;
    color: #fff;
}
.advanced-search-input .search .options .row .option {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background-color: #111;
    color: #fff;
}
.advanced-search-input .search .options .row {
    background: #fff;
    height: auto;
    cursor: pointer;
}
.advanced-search-input .search .options .row .option:hover {
    background-color: #c9c9c9;
    color: #000;
}
</style>