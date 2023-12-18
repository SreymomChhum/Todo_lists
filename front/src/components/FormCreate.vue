<template>
  <div>
    <div class="modal-overlay" v-if="isOpen" >
      <div class="modal-container">
        <form @submit.prevent="handleSubmit" class="bg-secondary p-3">
          <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input v-model="title" type="text" class="form-control" id="title" required>
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea v-model="description" class="form-control" id="description" rows="3" required></textarea>
          </div>
          <div class="mb-3">
            <label for="image" class="form-label">Image URL</label>
            <input v-model="image" type="url" class="form-control" id="image" required>
          </div>
          <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-danger me-2" @click="cancel">Cancel</button>
            <button type="submit" class="btn btn-primary">
              {{ isEditing ? 'Update' : 'Create' }}
            </button>
          </div>
        </form>
        <div v-if="alert" class="alert alert-danger mt-3" role="alert">
          Please fill in all the required fields.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user', 'index'],
  data() {
    return {
      title: this.user ? this.user.title : '',
      description: this.user ? this.user.description : '',
      image: this.user ? this.user.image : '',
      alert: false,
      isOpen: true,
      // isOpen: false, // Track dialog open/close state
    };
  },
  methods: {
    handleSubmit() {
      if (this.validateForm()) {
        const newUser = {
          title: this.title,
          description: this.description,
          image: this.image,
        };

        this.$emit('submit', { user: newUser, index: this.index });
        this.cancel();
      } else {
        this.alert = true;
      }
    },
    cancel() {
      this.$emit('cancel');
      this.alert = false;
      this.isOpen = false; // Close the dialog
    },
    validateForm() {
      return this.title && this.description && this.image;
    },
    openDialog() {
      this.isOpen = true; // Open the dialog
    },
  },
  computed: {
    isEditing() {
      return this.index !== null;
    },
  },
}
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
}
</style>






