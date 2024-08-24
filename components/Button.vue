<template>
    <button class="button" :class="{ 'is-primary': primary }" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
defineProps({
    primary: {
        type: Boolean,
        default: false
    }
})

defineEmits(['click'])
</script>

<style scoped>
.button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: #f0f0f0;
}

.button.is-primary {
    background-color: #3498db;
    color: #fff;
    border-color: #3498db;
}

.button.is-primary:hover {
    background-color: #2980b9;
}
</style>
