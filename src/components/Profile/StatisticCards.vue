<template>
    <div class="stat-cards">
        <StatisticCardSingle
            imageUrl="/src/assets/svgs/eye.svg"
            bigText="2340000000"
            smallText="total views"
        ></StatisticCardSingle>
        <StatisticCardSingle
            imageUrl="/src/assets/svgs/clients.svg"
            bigText="34"
            smallText="different clients"
        ></StatisticCardSingle>
        <StatisticCardSingle
            imageUrl="/src/assets/svgs/youtube.svg"
            bigText="1405"
            smallText="videos edited"
        ></StatisticCardSingle>
    </div>
</template>

<script setup>
import StatisticCardSingle from "./StatisticCardSingle.vue";
</script>
