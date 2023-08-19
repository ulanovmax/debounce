<template>
  <input placeholder="Введите что-нибудь..." :value="modelValue" @input="updateValue">
</template>

<script setup>
import {debounce} from "../../utils/debounce.utils.js";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true
  }
})

const emits = defineEmits(['update:modelValue']);

const updateValue = (e) => e.target.value ? debounceUpdate(e) : emits('update:modelValue', e.target.value);

const debounceUpdate = debounce((e) => emits('update:modelValue', e.target.value), 500);
</script>

<style lang="scss">
@import './DebounceInput.scss';
</style>