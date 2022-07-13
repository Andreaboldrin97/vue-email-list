const app = new Vue({
    el : '#root',
    data:
    {
        emailGroup : [],
    },
    methods : {
        emailGenerator : (array)=>{
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response)=>{
                console.log(response.data.response)
                array.push(response.data.response) 
                console.log(array)
            })
        },
        generatorListEmail : ()=>{
            for (let index = 0; index < 10; index++) {
                this.emailGenerator(this.emailGroup) 
            }
        }
        



    },
    created(){
        // this.emailGenerator(this.emailGroup)
        this.generatorListEmail()
    }
})