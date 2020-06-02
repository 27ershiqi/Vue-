<template>
<div role="tabpanel" class="tab-pane active" id="home">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" class="active">
                                <!-- <a href="#Message" aria-controls="Message" role="tab"
                                data-toggle="tab">Message</a> -->
                                <router-link to="/home/message" aria-controls="Message" role="tab"
                                data-toggle="tab">Message</router-link>
                        </li>
                        <li role="presentation">
                                <!-- <a href="#News" aria-controls="News" role="tab"
                                data-toggle="tab">News</a> -->
                                <router-link to="/home/news" aria-controls="News" role="tab"
                                data-toggle="tab">News</router-link>
                        </li>
                    </ul>
                    <!-- Tab panes -->
                    <div class="tab-content">
                        <router-view></router-view>
                    </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
}
</script>

<style scoped>


</style>
