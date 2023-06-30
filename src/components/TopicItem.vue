<script>
    import { RouterLink, RouterView } from 'vue-router'
    export default {
        props: [
            "topicId",
            "topicName",
            "state",
            "startTime",
            "endTime"
        ],

        computed: {
            getTopicURL() {
                return '/editTopicView/?topicId=' + this.topicId;
            }
        }
    }
</script>

<template>
    <div class="topicItem">
        <div class="choose"><input type="radio"></div>
        <div class="topicNum">{{ topicId }}</div>
        <div class="topic"><RouterLink :to="getTopicURL">{{ topicName }}</RouterLink></div>
        <div class="state">{{ state }}</div>
        <div>{{ startTime }}</div>
        <div>{{ endTime }}</div>
        <div>{{  }}</div>
    </div>
</template>

<style lang="scss" scoped>
    .topicItem {
        border-bottom: 2px solid black;
        display: flex;

        .choose {
            border-left: 2px solid black;
            width: 30px;
        }

        .topicNum , .state {
            width: 80px;
        }

        .topic {
            width: 200px;
            white-space: nowrap;
            overflow: hidden;

            a {
                text-decoration: none;
                margin: 0 5px;
            }
        }

        div {
            width: 100px;
            border-right: 2px solid black;
            text-align: center;
            padding: 2px 0;
        }
    }
</style>