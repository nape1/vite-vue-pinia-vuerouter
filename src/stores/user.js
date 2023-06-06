import { defineStore } from 'pinia'


export const useUserStore = defineStore('user', {
    state: () => ({
        isAdmin:false,
        userName: null,
        isLoggedIn: false
    }),
    actions: {
        loginUser(){
            this.userName = 'John Doe'
            this.isLoggedIn = true
        },
        logoutUser(){
            this.userName = null
            this.isLoggedIn = false
            this.isAdmin = false

        },
        tooglePrivlage(){
            if(this.isLoggedIn){
                this.isAdmin = !this.isAdmin
            }
        },
    },
    persist: true
})