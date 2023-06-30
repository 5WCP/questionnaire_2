<script>
    import SearchView from "../components/SearchView.vue"
    import TopicItem from "../components/TopicItem.vue"
    import TopicItemTitle from "../components/TopicItemTitle.vue"
    import AddTopicView from "../components/AddTopicView.vue"
    import '@fortawesome/fontawesome-free/css/all.css';
    export default {
        components: {
            SearchView,
            TopicItem,
            TopicItemTitle,
            AddTopicView,
        },

        data() {
            return {
                isAddTopicShow: false,
                isAddTopicInfoShow: false,
                topicList: "",
            }
        },
        methods: {
            addTopicShow() {
                this.isAddTopicShow = !this.isAddTopicShow
            }

        },

        mounted() {
            fetch("http://localhost:8080/search_all_topic", {
                method: "Post",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(data => {
                this.topicList = data.topicInfoList;

            })
            .catch(error => {
                console.log(error);
            })
        }
    }
</script>

<template>
    <div class="container">
        <h1 class="backTitle">問卷管理</h1>
        <SearchView />
        <div class="addDeleArea">
            <i class="addT fa-solid fa-circle-plus" @click="addTopicShow"></i>
            <i class="deleT fa-solid fa-trash-can"></i>
        </div>
        <div class="tapicArea">
            <TopicItemTitle />
            <TopicItem v-for="topic in topicList" :key="topic.topicId" :topicId= "topic.topicId" :topicName= "topic.topicName" 
            :state= "topic.state" :startTime= "topic.startName" :endTime= "topic.endTime" />
        </div>
        <AddTopicView v-show="isAddTopicShow" @closeAddTopic="addTopicShow" />
    </div>
</template>

<style lang="scss" scoped>
    .container {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .backTitle {
        font-size: 39px;
        color: #3d5baf;
        margin: 10px 0;
        }

        .tapicArea {
            margin-top: 5px;
            padding: 10px;
            background-color: rgba($color: #7c85b1, $alpha: 0.8);
            border-radius: 5px;
            height: 390px;
        }

        .addDeleArea {
            position: relative;
            margin: 20px 0 0 0;
            height: 20px;
            
            .addT {
                position: absolute;
                left: -350px;
                font-size: 20px;
                cursor: pointer;

                &:active {
                    transform: scale(0.95);
                }
            }

            .deleT {
                position: absolute;
                left: -320px;
                font-size: 20px;
                cursor: pointer;

                &:active {
                    transform: scale(0.95);
                }
            }
        }
    }
</style>