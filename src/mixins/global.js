import axios from 'axios'

export default {
 
  data() {
    return {
      service: {},
      service_products : {},
      base_url:"http://192.168.8.107:5000/api/",
      service_url:"services/",
      service_products_url :"category/products/",
      navBarToggle: "",
      navToggled: false,
      overlay: "",
      loading: true,
    };
  },
  methods: {
    getUnauthenticatedData (addedurl){
         axios.get(addedurl).then(response=>{
            this.service= response.data;
            this.loading= false;
         }).catch(error=>{
             console.log(error.respoonse)
            this.loading= false;

         })
      },
      getServiceProducts(addedurl){
        axios.get(addedurl).then(response=>{
          this.service_products = response.data.products;
          console.log(response.data.products);
          this.loading= false;
       }).catch(error=>{
           console.log(error.respoonse)
          this.loading= false;

       })
      },
     
        getServices() {
          axios
            .get("http://127.0.0.1:8000/api/services")
            .then((response) => (this.services = response.data.services));
        },
       
      
  },
};