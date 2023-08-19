<template lang="pug">
h1 Тестовое задание
DebounceInput(v-model.trim="inputValue")
p Текущее значение:
  span {{ (inputValue === '' ? 'Не указано' : inputValue) }}
</template>

<script setup>
import DebounceInput from './components/DebounceInput/DebounceInput.vue'

import {ref} from "vue";

const inputValue = ref();
</script>