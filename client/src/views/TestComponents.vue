<template>
  <div class="container">
    <div>
      <h1>Static Page msg for Testing stuff</h1>
    </div>
    <hr>

    <div>
      <h4>Checking user info</h4>
      Logged in: {{sessionData.loggedIn}}
      <br>
      UserName: {{sessionData.userinfo.username}}
      <br>
      Email: {{sessionData.userinfo.email}}
      <br>
      First Name: {{sessionData.userinfo.firstName}}
      <br>
      Last Name: {{sessionData.userinfo.lastName}}
      <br>
      Addr: {{sessionData.userinfo.address}}
      <br>
      Seller?: {{sessionData.userinfo.isSeller}}
      <br>img:
      <img :src="sessionData.userinfo.profileimage" style="width: 250px; height: 200px;">
      <br>
      stores: {{sessionData.userinfo.storesOwned}}
      <hr>
    </div>

    <div>
      <br>
      <h4>Product Card</h4>
      <div id="test">
        <ProductCard :productObject="testobject"/>
      </div>
      <br>
      <h4>Product Ribbon</h4>
      <ProductRibbon :productObjectArray="productList"/>

      <br>
      <h4>Product Grid</h4>
      <ProductGrid :productObjectArray="productList"/>

      <br>
      <br>
    </div>

    <!-- Vue cookies-->
    <h4>Testing vue cookies</h4>
    <b-button @click="setCookie">Set a cookie</b-button>
    <br>
    <b-button @click="getCookie">Get a cookie</b-button>
    <br>
    <b-button @click="delCookie">Delete a cookie</b-button>
    <!-- Vue cookies-->
  </div>
</template>
<script>
import ProductCard from "@/components/ProductCard.vue";
import ProductRibbon from "@/components/ProductRibbon.vue";
import ProductGrid from "@/components/ProductGrid.vue";
//import axios from "axios";

export default {
  name: "testComponents",
  components: { ProductCard, ProductRibbon, ProductGrid },
  props: {
    sessionData: Object
  },
  methods: {
    setCookie() {
      this.$cookies.set("testcookie", "loggedin", 60);
      console.log("cookie set");
    },
    getCookie() {
      let cook = this.$cookies.get("testcookie");
      console.log("cookie get: " + cook);
    },
    delCookie() {
      this.$cookies.remove("loginToken");
    }
  },
  data() {
    return {
      testobject: {
        name: "beats headphones",
        Price: "100.50",
        image:
          "https://res.cloudinary.com/teepublic/image/private/s--fZSzwgC7--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1527665318/production/designs/2737304_0.jpg"
      },
      productList: [
        {
          name: "beats headphones #1",
          Price: "100.50",
          image:
            "https://vignette.wikia.nocookie.net/love-live/images/c/cb/LLSS_S1Ep6_235.png/revision/latest?cb=20160806180336"
        },
        {
          name: "beats headphones #2",
          Price: "100.50",
          image:
            "https://i1.wp.com/www.animefeminist.com/wp-content/uploads/2018/07/Harukana1-19.png?resize=1024%2C576&ssl=1"
        },
        {
          name: "beats headphones #3",
          Price: "100.50",
          image: "https://i.imgur.com/9y1wkv6.jpg"
        },
        {
          name: "beats headphones #4",
          Price: "100.50",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/91JdzvaB-GL._RI_.jpg"
        },
        {
          name: "beats headphones #5",
          Price: "100.50",
          image:
            "https://res.cloudinary.com/teepublic/image/private/s--eSAoDaOc--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1534682471/production/designs/3040733_0.jpg"
        },
        {
          name: "beats headphones #6",
          Price: "100.50",
          image:
            "https://www.listchallenges.com/f/items/5e86fe66-eefa-4db0-aa06-bf076f8e5441.jpg"
        },
        {
          name: "beats headphones #7",
          Price: "100.50",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbb0saGwBmzZ-Xi7fkCp0EABbiMGUWFej-7cJgcQv6mwKwRPdD"
        },
        {
          name: "beats headphones #8",
          Price: "100.50",
          image: "https://img.fireden.net/v/image/1534/41/1534411052845.png"
        },
        {
          name: "beats headphones #9",
          Price: "100.50",
          image:
            "https://i0.wp.com/drunkenanimeblog.com/wp-content/uploads/2018/07/screen-shot-2018-07-13-at-10-32-56-pm.png?resize=620%2C347&ssl=1"
        },
        {
          name: "beats headphones #10",
          Price: "100.50",
          image:
            "https://d3ieicw58ybon5.cloudfront.net/ex/1200.630/0.133.600.316/u/160a8c89b92744ccb8d992dd8e685cf2.jpg"
        },
        {
          name: "beats headphones #11",
          Price: "100.50",
          image:
            "https://deluscar.files.wordpress.com/2015/01/horriblesubs-shirobako-01-720p-mkv_snapshot_01-49_2015-01-20_21-20-08.jpg?w=774&h=435"
        },
        {
          name: "beats headphones #12",
          Price: "100.50",
          image:
            "https://i2.wp.com/wrongeverytime.com/wp-content/uploads/2015/04/HorribleSubs-Shirobako-24-720p.mkv_snapshot_24.22_2015.03.28_19.43.02.jpg"
        },
        {
          name: "beats headphones #13",
          Price: "100.50",
          image: "https://i.imgur.com/uVDmqK0.jpg"
        },
        {
          name: "beats headphones #14",
          Price: "100.50",
          image:
            "https://www.animefeminist.com/wp-content/uploads/2017/03/SakuraQuest3.png"
        },
        {
          name: "beats headphones #15",
          Price: "100.50",
          image: "https://i.imgur.com/sZRSMQ8.jpg"
        },
        {
          name: "beats headphones #16",
          Price: "100.50",
          image:
            "https://remyfool.files.wordpress.com/2017/09/ed-8.jpg?w=924&h=0&crop=1"
        },
        {
          name: "beats headphones #17",
          Price: "100.50",
          image:
            "https://thumbs.gfycat.com/FabulousMajesticFinnishspitz-poster.jpg"
        },
        {
          name: "beats headphones #18",
          Price: "100.50",
          image: "https://i.imgur.com/ZUfBQzW.jpg"
        },
        {
          name: "beats headphones #19",
          Price: "100.50",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgI4-a-gbKESRCX7gLbnSukyRx21drab8NH8MVJ1qoVFtKlG-rCQ"
        }

        /*,
        {
          name: "beats headphones #20",
          Price: "100.50",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZK9eODqqVTjoHGmRy1J4pygPhaULiFTeZn9at99KtN4aBAKov0w"
        },
        {
          name: "beats headphones #21",
          Price: "100.50",
          image: "https://i.ytimg.com/vi/ZlL01zXTq4c/maxresdefault.jpg"
        }
        */
      ]
    };
  },
  mounted() {
    /*
    this.isLoading = true;
    this.$nextTick(() => {
      axios({
        method: "GET",
        url: this.$hostname + `/authenticate`
      })
        .then(res => {
          // response is a large thing, we want the data.
          console.log(res);
          if (res.status == 200) {
            console.log(res);
            this.isAuthd = true;
            this.isLoading = false;
          } else {
            console.log(`Error: ${res.status} received`);
          }
        })
        .catch(err => {
          // 401 was recvd
          this.notAuthd = true;
          this.isLoading = false;
          console.log(err);
        });
    });
    */
  }
};
</script>

<style>
#test {
  width: 250px;
}
</style>


