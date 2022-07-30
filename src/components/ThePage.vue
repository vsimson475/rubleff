<template>
  <div class="wrapper">
    <TheHeader></TheHeader>
    <main class="main">
        <div class="container">
            <div class="main__container">
                <router-view></router-view>
            </div>
        </div>
    </main>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';

export default {
    name: 'ThePage',
    components: {
        TheHeader,
        TheFooter
    }
}
</script>

<style lang="scss" scoped>
    .wrapper {
        display: flex;
        flex-direction: column;

        min-height: 100%;
    }

    .main {
        flex: 1 0 auto;
    }
</style>