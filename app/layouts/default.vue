<template>
    <div class="container">
        <LayoutsHeader />
    </div>
    <div class="container">
        <router-view></router-view>
    </div>
    <LayoutsFooter />
</template>

<style lang="scss">
.container {
    padding: 0 60px;

    @media (max-width: 768px) { 
        padding: 0 20px;
    }
}
</style>