<template>
    <div>
        
            <div class="h4 title-text">Your items:</div>
            <hr>
            <b-card class="padded-card">
                <ItemsTable :cart="sessionData.cart"/>
            </b-card>

            
            <b-card class="padded-card">
                <PriceSummary ref="priceSummary" :cart="sessionData.cart" />
            </b-card>
        
        <b-card class="padded-card">
            <div class="h4"> Choose a shipping address</div>
            <b-container fluid>
                <b-row>
                    <b-col sm="4" v-for="(address,index) in addresses" :key="index"> 
                        <b-card class="address-card" :class="{'selected-address' : selectedShipping === index? true : false}" @click="selectedShipping = index">
                            <b-container fluid>
                                <b-row>
                                    <b-col>
                                        <div class="text-justify"> 
                                            {{address.firstName}} {{address.lastName}}
                                            <br>
                                            {{address.street}}
                                            <br>
                                            {{address.city}}, {{address.state}} {{address.zipcode}}
                                        </div>
                                    </b-col>
                                </b-row>
                                
                            </b-container>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </b-card>


<b-card class="padded-card">
<div class="h4">Choose a billing address</div>
        <b-container fluid>
            <b-row>
                <b-col sm="4" v-for="(address,index) in addresses" :key="index"> 
                    <b-card class="address-card" :class="{'selected-address' : selectedBilling === index? true : false}" @click="selectedBilling = index">
                        <b-container fluid>
                            <b-row>
                                <b-col>
                                    <div class="text-justify"> 
                                        {{address.firstName}} {{address.lastName}}
                                        <br>
                                        {{address.street}}
                                        <br>
                                        {{address.city}}, {{address.state}} {{address.zipcode}}
                                    </div>
                                </b-col>
                            </b-row>
                            
                        </b-container>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>

        </b-card>
        <b-card class="padded-card">
            <div class="h4">Payment method</div>
            <b-form-group
                label="Credit Card Number (not stored in this demo)"
            >
                <b-form-input type="number" maxlength="16" required></b-form-input>
            </b-form-group>
        </b-card>
        <div class="padded-card">
            <b-alert v-model="showInvalidWarning" variant="danger" dismissible> 
                {{warningMessage}}
            </b-alert>

            
            <b-button block @click="submitOrder" >
                    Place Order
            </b-button>
        </div>
      

    </div>
    
</template>

<script>
import axios from "axios";
import ItemsTable from "../components/ItemsTable"
import PriceSummary from "../components/PriceSummary"
export default {
    props:{
        sessionData: Object
    },
    components:{
        ItemsTable, PriceSummary
    },
    data:()=>{
        return {
            addresses: [],
            selectedBilling: null,
            selectedShipping: null,
            taxRate: 0.05, // 5 percent tax on all
            showInvalidWarning: false,
        }
    },
    created(){
        // get addresses associated with this user from server...
        axios.get(this.$hostname + "/address/" + this.sessionData.userinfo.user_id)
        .then(response=>{
            console.log(response)
            if(response.status === 200){
                this.addresses = [...response.data]
            }
            else{
            console.log("aww")
            }
        }).catch(err=>{
            console.log(err)
        })
    },
    computed:{
        // TODO hard coded values here
        isOrderValid(){
            if(this.sessionData.cart.length === 0){
                return false
            }

            if(!this.sessionData.loggedIn){
                return false
            }

            if(this.selectedBilling === null){
                return false
            }
            if(this.selectedShipping === null){
                return false
            }

            return true
        },
        warningMessage(){
            if(this.sessionData.cart.length === 0){
                return "Please add something to your cart!"
            }

            if(!this.sessionData.loggedIn){
                return "Please be logged in to perform this action"
            }

            if(this.selectedBilling === null){
                return "Please select a billing address"
            }
            if(this.selectedShipping === null){
                return "Please select a shipping address"
            }
            return ''
        }

    },
    methods: {
        selectBilling(idx){
            this.selectedBilling = idx
        },
        
        submitOrder(){
            if(!this.isOrderValid){
                this.showInvalidWarning = true
            }

            axios({
                url: this.$hostname + "/orders",
                method: "POST",
                data: {
                    cart: this.sessionData.cart.map((el, idx)=>{
                        return JSON.stringify({
                            ...el,
                            subtotal: this.$refs.priceSummary.subtotalArray[idx],
                            tax: this.$refs.priceSummary.taxArray[idx],
                            shipping: this.$refs.priceSummary.shippingArray[idx],
                            total: this.$refs.priceSummary.subtotalArray[idx] + this.$refs.priceSummary.taxArray[idx] + this.$refs.priceSummary.shippingArray[idx],
                        })
                    }),
                    customerDetails: JSON.stringify({
                        shippingAddress: this.addresses[this.selectedShipping],
                        billingAddress: this.addresses[this.selectedBilling],
                        customer:{
                            id: this.sessionData.userinfo.user_id,
                            username: this.sessionData.userinfo.username
                        }
                    }),
                }
            }).then(response=>{
                if(response.status===200){
                    axios.delete(this.$hostname + '/cart/all').then(response=>{
                        this.$emit('update:sessionData', {cart:response.data})
                        this.$router.push('/')
                    })
                }
                else{
                    console.log(response)
                }
            }).catch(err=>{
                console.log(err)
            })
        },


    }
}
</script>

<style>

.padded-card{
    margin:5px

}
.selected-address{
    background: grey;
    color: whitesmoke;
    border: whitesmoke;
}
.address-card:hover{
    background: grey;
    color: whitesmoke;
    border: whitesmoke;
}

.title-text{
    margin-top:20px;
    margin-left: 15px;
}
</style>
