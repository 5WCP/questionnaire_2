<script>

</script>

<template>
    <div class="topicItemTitle">
        <div class="chooseT"></div>
        <div class="topicNumT">編號</div>
        <div class="topicT">問卷</div>
        <div class="stateT">狀態</div>
        <div>開始時間</div>
        <div>結束時間</div>
        <div>觀看統計</div>
    </div>
</template>

<style lang="scss" scoped>
    .topicItemTitle {
        border-bottom: 2px solid black;
        display: flex;

        .chooseT {
            border-left: 2px solid black;
            width: 30px;
        }

        .topicNumT , .stateT {
            width: 80px;
        }

        .topicT {
            width: 200px;
        }

        div {
            width: 100px;
            border-right: 2px solid black;
            border-top: 2px solid black;
            text-align: center;
            padding: 2px 0;
        }
    }
</style>