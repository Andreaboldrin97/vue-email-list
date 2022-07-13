const app = new Vue({
    el : '#root',
    data:
    {
        emailGroup : [],
    },
    methods : {
        emailGenerator : function(array){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(response){
                console.log(response.data.response)
                array.push(response.data.response) 
            })
        },
        generatorListEmail : function(){
            for (let index = 0; index < 10; index++) {
                this.emailGenerator(this.emailGroup) 
            }
            console.log(this.emailGroup)
        }
        



    },
    created(){
        // this.emailGenerator(this.emailGroup)
        this.generatorListEmail()
    }
})