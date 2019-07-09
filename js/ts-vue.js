Vue.component('form1', {
    props: [
        'model',
        'isview',
    ],
    data: function () {
        return {
            onSubmit() {
                this.isview = !this.isview;
                console.log(this.model);

            },
            resetform() {
                this.model = {}
            }
        }
    },
    template: `
    <form>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="inputname">ชื่อ</label>
            <input type="text" class="form-control " id="inputname" name="inputname" placeholder="ชื่อ"
                v-model="model.name"  :readonly="isview">
        </div>
        <div class="form-group col-md-6">
            <label for="inputname2">นามสกุล</label>
            <input type="text" class="form-control" id="inputname2" name="inputname2" placeholder="นามสกุล"
                v-model="model.name2" :readonly="isview">
        </div>
    </div>
    <div class="form-group">
        <label for="inputAddress">ที่อยู่</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="ที่อยู่" v-model="model.address"
        :readonly="isview">
    </div>
    <center class="p-5">
              <button type="button" v-on:click="onSubmit()" class="btn btn-success"> ตกลง</button>
              <span> || </span>
              <button type="button" v-on:click="resetform()" class="btn btn-danger">reset</button>
              <span> || </span>
              <button type="button" class="btn btn-danger">ยกเลิก</button>
            </center>
    </form>`
})


Vue.component('blog-post', {
    props: ['test'],
    template: `
      <div class="blog-post">
      <a href="#">{{ test.name }}</a> 
      </div>
    `
})


new Vue({
    el: '#vue-app',
    data: {
        posts: [
            { name: 'Form 1' },
            { name: 'Form 2' },
            { name: 'Form 3' },
            { name: 'Form 4' },
            { name: 'Form 5' },

        ],
        model: {
            name: '',
            name2: '',
            address: ''
        },
        isview: false
    },
    methods: {

        // onSubmit() {
        //     this.isview = !this.isview;
        //     console.log(this.model);

        // },

        // resetform() {
        //     this.model = {}
        // }
    },
})




