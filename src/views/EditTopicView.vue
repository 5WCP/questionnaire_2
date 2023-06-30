<script>
    export default {
        data() {
            return {
                
            }
        },

        mounted() {
            const topicId = new URLSearchParams(window.location.search).get("topicId");
            let body = {
                "topic":{
                    "topicId": topicId
                }
            }

            fetch("http://localhost:8080/get_topic_info", {
                method: "Post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
            .then(res => res.json())
            .then(data => {
                
            })
            .catch(error => {
                console.log(error)
            })
        }
    }

</script>

<template>
    <div class="container">

        <h1 class="editTopicTitle">問卷編輯</h1>

        <div class="tabs">

            <input type="radio" class="tRadio" name="tab" id="topicInfo" checked>
            <label for="topicInfo" class="tLabel">問卷資訊</label>
            <div class="tContent">
                <div class="topicInfoArea">
                    <div>
                        <label for="">問卷名稱</label>
                        <input type="text" v-model="topicName">
                    </div>

                    <div>
                        <label for="">問卷描述</label>
                        <input type="text" class="description">
                    </div>

                    <div>
                        <label for="">開始時間</label>
                        <input type="date">
                    </div>

                    <div>
                        <label for="">結束時間</label>
                        <input type="date">
                    </div>
                </div>

                <div class="infoBtnArea">
                    <button>送出</button>
                    <button>取消</button>
                </div>

            </div>

            <input type="radio" class="tRadio" name="tab" id="topicQuestion">
            <label for="topicQuestion" class="tLabel">問卷問題</label>
            <div class="tContent">

            </div>

            <input type="radio" class="tRadio" name="tab" id="ansRequest">
            <label for="ansRequest" class="tLabel">問卷回饋</label>
            <div class="tContent">

            </div>

            <input type="radio" class="tRadio" name="tab" id="statistics">
            <label for="statistics" class="tLabel">統計</label>
            <div class="tContent">

            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
    .container {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .editTopicTitle {
            font-size: 39px;
            color: #339742;
            margin: 20px 0;
        }
        .tabs {
            display: flex;
            flex-wrap: wrap;
            width: 75%;
            height: 70%;
    
            .tLabel {
                font-size: 20px;
                padding: 8px 12px;
                cursor: pointer;
            }

            .tRadio {
                display: none;
            }

            .tContent {
                order: 1;
                width: 100%;
                height: 100%;
                display: none;
            }

            .tRadio:checked + .tLabel {
                font-weight: bolder;
                color: white;
                background-color: rgba($color: #619c6a, $alpha: 0.6);
                border-radius: 5px 5px 0 0;
            }

            .tRadio:checked + .tLabel + .tContent {
                display: block;
                background-color: rgba($color: #619c6a, $alpha: 0.6);
                border-radius: 0 10px 10px 10px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                position: relative;

                .topicInfoArea {

                    div {
                        margin: 50px 0;
                        display: flex;
                        
                    }

                    input {
                        margin-left: 15px;
                        height: 24px;
                        width: 200px;
                        border-radius: 5px;
                        font-size: 18px;
                    }
    
                    label {
                        font-size: 20px;
                    }
    
                    .description {
                        width: 400px;
                        height: 100px;
                    }

                }

                .infoBtnArea {
                    position: absolute;
                    bottom: 15px;
                    right: 0;

                    button {
                        padding: 2px 6px;
                        font-size: 20px;
                        margin: 0 30px;
                        background-color: #52b367;
                        border-radius: 2px;
                        border: none;
                        cursor: pointer;
                        transition: 0.6s;

                        &:hover {
                            color: white;
                        }

                        &:active {
                            transform: scale(0.95);
                        }
                    }
                }

            }
        }
    }
</style>