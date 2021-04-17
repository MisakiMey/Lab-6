<template>
    <div id="app">
        <Week/>
        <Entry/>
    </div>
</template>

<script>




import Week from "./components/Week";
import Entry from "./components/Entry";
export default {
  name: 'App',
  components: {
      Entry,
      Week


  }
}
</script>

<style>

</style>
