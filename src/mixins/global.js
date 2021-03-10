import axios from 'axios'

export default {
 
  data() {
    return {
      service: {},
      base_url:"http://127.0.0.1:8000/api/",
      service_url:"services/",
      navBarToggle: "",
      navToggled: false,
      overlay: "",
    };
  },
  methods: {
    getUnauthenticatedData (addedurl){
        // let data;+
        console.log(addedurl)
         axios.get(addedurl).then(response=>{
            this.service= response.data;
          
         }).catch(error=>{
             console.log(error.respoonse)
         })
      },
  },
};