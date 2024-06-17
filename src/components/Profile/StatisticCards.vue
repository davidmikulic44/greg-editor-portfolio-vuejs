<template>
    <div class="stat-cards">
        <StatisticCardSingle
            :imageUrl="eye"
            bigText="2340000000"
            smallText="total views"
        ></StatisticCardSingle>
        <StatisticCardSingle
            :imageUrl="clients"
            bigText="34"
            smallText="different clients"
        ></StatisticCardSingle>
        <StatisticCardSingle
            :imageUrl="yt"
            bigText="1405"
            smallText="videos edited"
        ></StatisticCardSingle>
    </div>
</template>

<script setup>
import StatisticCardSingle from "./StatisticCardSingle.vue";
import eye from '../../assets/images/Vectoreye.png'
import clients from '../../assets/images/Vectorclient.png'
import yt from '../../assets/images/Vectoryt.png'
</script>
