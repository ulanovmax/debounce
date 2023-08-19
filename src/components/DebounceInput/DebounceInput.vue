<template lang="pug">
input(placeholder="Введите что нибудь..", v-model.trim="inputValue")
p Текущее значение:
  span {{ (inputValue === '' ? 'Не указано' : inputValue) }}
</template>


<script setup>
import {ref} from "vue";

const inputValue = ref()
</script>

<style lang="scss">
@import './DebounceInput.scss';
</style>