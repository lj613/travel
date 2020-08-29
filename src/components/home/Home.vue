<template>
    <div>
        <HomeHeader></HomeHeader>
        <Icons :iconsListL='iconsListL' :iconsListM='iconsListM'></Icons>
        <OnSale :onSaleList='onSaleList'></OnSale>
        <Ticket :scenicList='scenicList'></Ticket>
        <Swiper :swiperList='swiperList'></Swiper>
        <TourStrategy :strategyList='strategyList'></TourStrategy>
        <Copyright></Copyright>
        <Bottom></Bottom>
        <BackTop></BackTop>
    </div>
</template>

<script>
import HomeHeader from './pages/Header'
import Swiper from './pages/Swiper'
import Icons from './pages/Icons'
import OnSale from './pages/OnSale'
import Ticket from './pages/Ticket'
import TourStrategy from './pages/TourStrategy'
import Copyright from './pages/Copyright'
import Bottom from './pages/Bottom'
import BackTop from '../BackTop/BackTop'

export default {
    data(){
        return{
            swiperList:[],
            scenicList:[],
            strategyList:[],
            onSaleList:[],
            iconsListL:[],
            iconsListM:[]
        }
    },
    components:{
        HomeHeader,
        Swiper,
        Icons,
        OnSale,
        Ticket,
        TourStrategy,
        Copyright,
        Bottom,
        BackTop
    },
    mounted() {
        this.$http.get("/api/dataHome.json")
        .then(res=>{
            // console.log(res.data.data[0]);
            const data = res.data.data[0];
            this.swiperList = data.swiperList;
            this.scenicList = data.scenicList;
            this.strategyList = data.strategyList;
            this.onSaleList = data.onSaleList;
            this.iconsListL = data.iconsListL;
            this.iconsListM =data.iconsListM;
            // console.log( this.scenicList);
            // console.log(  data.swiperList);
            

        })
    },
}
</script>
<style scoped>
    
</style>