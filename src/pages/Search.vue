<template>
<div>
    <SearchHeader></SearchHeader>
    <SearchMain></SearchMain>
</div>
</template>

<script>
import SearchHeader from './search/SearchHeader'
import SearchMain from './search/SearchMain'

export default {
    components: {
        SearchHeader,
        SearchMain
    }
}
</script>
