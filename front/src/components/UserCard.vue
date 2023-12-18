<template>
  <div class="p-5">
    <!-- <button type="button" @click="createData()">addddddddd</button> -->
    <h1 class="text-danger">Plasgate Service</h1>
    <div class="content pt-5">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col w-25" v-for="(user, index) in allDatas" :key="index">
          <div class="card h-100">
            <img :src="user.image" class="card-img" alt="...">
            <div class="card-body">
              <h2 class="card-title fs-2 text">{{ user.title }}</h2>
              <p class="card-text">{{ user.description }}</p>
            </div>

            <div class="card-footer">
              <small
                class="text-muted"
                role="button"
                data-bs-toggle="modal"
                :data-bs-target="'#myModal-' + index"
                @click="showDetail(user.id)"
              >
                see more..
              </small>
            </div>

            <!-- The Modal -->
            <div class="modal" :id="'myModal-' + index" v-if="myuser">
              <div class="modal-dialog bg-danger w-100 p-5">
                <div class="modal-content">
                  <!-- Modal Header -->
                  <div class="modal-header">
                    <h1>Deatil service</h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <!-- Modal body -->
                  <div class="modal-body d-flex">
                    <div class="text p-2">
                      <h4 class="modal-title mb-4 text-danger">{{ myuser.title }}</h4>
                      <p>{{ myuser.description }}</p>
                    </div>
                    <!-- <img :src="myuser.image" class="card-img img-fluid" alt="..."> -->
                    <img :src="myuser.image" class="w-50" alt="...">
                  </div>

                  <!-- Modal footer -->
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, defineComponent, onMounted } from 'vue'
import store from '../store/index.js'

export default defineComponent({
  setup() {
    const myIndex = ref(null)

    const allDatas = computed(() => store.state.posts);

    const myuser = computed(() => {
      if (myIndex.value !== null) {
        return store.getters.getOneService(myIndex.value)
      }
      return "hello"
    })

    const showDetail = (index) => {
      myIndex.value = index
    }

    onMounted(() => {
      store.dispatch("loadData"); // Dispatch the action
    });

    return { showDetail, myuser, allDatas }
  },
})
</script>
