const app = new Vue({
    el : '#root',
    data:
    {

    },
    methods : {
        emailgenerator : ()=>{
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function (response){
                console.log(response.data.response)
            })
        }
    },
    created(){
        this.emailgenerator();
    }
})