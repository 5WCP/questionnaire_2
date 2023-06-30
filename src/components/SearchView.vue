<script>
    export default {
        data() {
            return {
                topicName: "",
                startTime: "",
                endTime: ""
            }
        }
    }
</script>

<template>
    <div class="searchArea">
        <div class="topicName">
            <label for="topicName">問卷名稱</label>
            <input type="text" v-model="topicName">
        </div>
        <div class="startTime">
            <label for="startTime">開始時間</label>
            <input type="date" v-model="startTime">
        </div>
        <div class="endTime">
            <label for="endTime">結束時間</label>
            <input type="date" v-model="endTime">
        </div>
        <button class="searchBtn">搜尋</button>
    </div>
</template>

<style lang="scss" scoped>
    .searchArea {
        width: 350px;
        background-color: rgba($color: #4b5eb1, $alpha: 0.8);
        border-radius: 8px;
        margin: 10px 0;
        position: relative;

        .topicName, .startTime, .endTime {
            margin: 10px 0 10px 10px;

            input {
                margin: 0 10px;
                border-radius: 5px;
            }
        }

        .searchBtn {
            position: absolute;
            bottom: 10px;
            right: 15px;
            background-color: #61af9c;
            border: none;
            cursor: pointer;
            border-radius: 3px;
            transition: 0.6s;

            &:hover {
                color: azure;
            }

            &:active {
                transform: scale(0.95);
            }
        }
    }
</style>