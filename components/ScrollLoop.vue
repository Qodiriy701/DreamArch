<template>
    <div class="flex items-center justify-center relative">
        <img src="@/assets/icons/Element.png" class="shrink-0 scroll-loop" width="150" height="147" alt="scrollDown" />
        <img src="../assets/icons/arrowJump.png" class="animate-bounce absolute" width="25" height="44" alt="arrow">
    </div>
</template>

<script>
export default {
    name: 'ScrollLoop',
}
</script>


<style scoped>
.scroll-loop {
    width: 150px;
    height: 147px;
    animation: loopRotate 35s linear infinite;
}

@keyframes loopRotate {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>