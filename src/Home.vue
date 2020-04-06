<template>
    <div>
        <AppStatus />
        <h1>{{ homeTitle }} </h1>
    </div> 
</template>

<script>
export default {
    name: 'Home',
    data: () => {
        return {
            homeTitle: "홈 입니다."
        }
    }
}
</script>