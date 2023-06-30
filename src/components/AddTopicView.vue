<script>
    export default {
        data() {
            return {
                addTopicTitle: "",
            }
        },
        methods: {
            addTopic() {
                let body = {
                    "topic": {
                        "topicName": this.addTopicTitle
                    }
                }
                
                fetch("http://localhost:8080/add_topic",{
                    method: "Post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(body)
                })
                .then(function(response) {
                    return response.json()
                })
                .then(function(data) {
                    console.log(data)
                })
                .catch(function(error) {
                    console.log(error)
                })
            },

            closeAddTopic() {
                this.$emit("closeAddTopic");
            }
        },
    }
</script>

<template>
    <div class="addTopicArea">

        <div class="addTopicCard">
            <span class="closeAddTopic" @click="closeAddTopic">&times;</span>
            <label for="">問卷主題</label>
            <input type="text" class="addTopicInput" v-model="addTopicTitle">
            <button class="addTopicBtn" @click="addTopic">新增問卷</button>
        </div>

        <div class="addTopicBg"></div>

    </div>
</template>

<style lang="scss" scoped>
    .addTopicArea {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;

        .addTopicCard {
            background-color: #ecedf3;
            width: 300px;
            height: 120px;
            border-radius: 5px;
            padding: 10px 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: relative;

            .closeAddTopic {
                font-weight: bolder;
                position: absolute;
                top: 0;
                right: 10px;
                font-size: 24px;
                cursor: pointer;
                transition: 0.6s;

                &:active {
                    transform: scale(0.95);
                }
            }

            .addTopicInput {
                border-radius: 2px;
                margin: 10px 0;
            }

            .addTopicBtn {
                border-radius: 2px;
                margin: 10px 0 0 0;
                background-color: #6e59b9;
                cursor: pointer;
                border: none;
                padding: 3px 8px;
                transition: 0.6s;
                color: aliceblue;

                &:hover {
                    background-color: #4727b8;
                }

                &:active {
                    transform: scale(0.95);
                }
            }
        }

        .addTopicBg {
            position: fixed;
            z-index: -1;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: #0b0b13;
            opacity: 0.2;
        }
    }
</style>