<template>
    <div class="hello d-flex flex-column align-self-center p-5">
      <div class="list d-flex flex-column align-self-center w-50">
        <h1 class="text-danger">Here is List</h1>
        <button 
          type="button" 
          class="btn btn-primary" 
          @click="addItem"
        >Add</button>

        <ul class="list-group">
          <li
            class="list-group-item text-start d-flex justify-content-between"
            aria-current="true"
            v-for="(data, index) in allDatas"
            :key="index"
          >
            {{ data.title }}
            <div>
              <!-- <button type="button" class="btn btn-primary" @click="enableService(data.id)"> {{ isEnable ? 'Dissable' : 'Enable' }}</button> -->
              <button
                type="button"
                :class="['btn', isEnable ? 'btn-primary' : 'btn-danger']"
                @click="enableService"
              >
                {{ isEnable ? 'Enable' : 'Disable' }}
              </button>
              <button type="button" class="btn btn-primary m-1" @click="editUser(data.id)">Edit</button>
              <button type="button" class="btn btn-danger" @click="deleteUser(data.id)">Delete</button>
            </div>
          </li>
        </ul>
      </div>
      <form-create
        v-if="showEditForm"
        :user="editFormData"
        :index="editFormDataIndex"
        @cancel="cancelEdit"
        @submit="submitEdit"
      />
    </div>
    
</template>

<script>
  // import { RouterLink, RouterView } from 'vue-router'
  import { computed, defineComponent, ref, onMounted } from 'vue';
  import store from '../store/index.js';
  import FormCreate from './FormCreate.vue';
  
  export default defineComponent({
    components: {
      FormCreate,
    },
    setup() {
      const allDatas = computed(() => store.state.posts);
      // const allDatas = computed(() => store.getters.getAll());
      // console.log(allDatas)
      const isEnable = ref(true);
      const isEditFormOpen = ref(false);
      const editFormData = ref(null);
      const editFormDataIndex = ref(null);
      const showEditForm = computed(() => isEditFormOpen.value);
  
      const deleteUser = (id) => {
        store.dispatch("deleteData", {"id": id})

      };
      
      const editeId = ref()
      // get data put in form
      const editUser = (id) => {
        console.log(id)
        editeId.value = id
        isEditFormOpen.value = true;
        const user = store.getters.getOneService(id)
        editFormData.value = { ...user };
        editFormDataIndex.value = id;
      };


      const submitEdit = ({ user }) => {
        console.log(user)
        if (editeId.value) {
          user.id = editeId.value
          console.log(editeId.value)
          store.dispatch('editData', user );
          location.reload();
        } else {
          store.dispatch('createData', user);
        }

        isEditFormOpen.value = false;
      };

      const addItem = () => {
        isEditFormOpen.value = true;
        editFormData.value = null;
        editFormDataIndex.value = null;
      };
  
      const cancelEdit = () => {
        isEditFormOpen.value = false;
      };
      
      const enableService = (id) =>{
        console.log(id)
        console.log("ebable service")
        isEnable.value = !isEnable.value;
      } 

      onMounted(() => {
        store.dispatch("loadData");
      });

      return {
        store,
        allDatas,
        deleteUser,
        editUser,
        submitEdit,
        cancelEdit,
        addItem,
        isEnable,
        enableService,
        isEditFormOpen,
        editFormData,
        showEditForm,
        editFormDataIndex,
      };
    },
  });
</script>

