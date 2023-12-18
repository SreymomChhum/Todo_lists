<template>
    <div class="form w-50 bg-secondary p-3">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Title</label>
            <input 
                v-model="titel"
                type="text" 
                class="form-control" 
                id="exampleFormControlInput1" 
                placeholder="title"
            >
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
            <textarea 
                class="form-control" 
                id="exampleFormControlTextarea1" 
                rows="3"
            ></textarea>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">image</label>
            <input 
                v-model="image"
                type="text" 
                class="form-control" 
                id="exampleFormControlTextarea1" 
                rows="3"
            >
        </div>
    </div>
    
</template>

<script>
export default {
    emit: 'submit',
    data(){
        return{
            id:'',
            title: '',
            description: '',
            image: '',
        }
    },

};

</script>