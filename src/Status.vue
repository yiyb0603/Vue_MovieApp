<template>
    <div>
        <h2>{{ name }}님</h2>
        <h2>{{ title }}</h2>
        <h2>{{ information.id }}</h2>
        <h2>{{ information.name }}</h2>
        <h2>{{ information.email }}</h2>
        <button @click = "switchName()">Change!</button>
    </div>
</template>

<script>    
export default {
    data: () => {
        return {
            isVelopert: false
        }
    },

    props: {
        name: {
            type: String,
            required: true
        },

        title: {
            type: String,
            required: true
        },

        information: {
            type: Object,
            required: true
        }
    },

    methods: {
        switchName () {
            this.isVelopert = !this.isVelopert

            if (this.isVelopert) {
                this.name = "벨로퍼트";
            } else {
                this.name ="권용빈";
            }
        }
    }
}
</script>