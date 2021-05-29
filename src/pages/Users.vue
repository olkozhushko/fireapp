<template>
  <section>
    <h2>Users</h2>
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
    <form>
      <AppInput label="Name" v-model="name" style="margin-bottom: 1rem;" />
      <AppInput label="Age" type="number" v-model="age" style="margin-bottom: 0.4rem;" />
      <AppInput label="Sex" v-model="sex" />
      <button @click.prevent="addUser">Add</button>
    </form>
  </section>
</template>

<script>
import { db } from '@/plugins/firebase';
export default {
  name: 'Users',

  data() {
    return {
      users: [],
      name: '',
      age: '',
      sex: '',
    };
  },

  created() {
    this.getUsers();
  },

  methods: {
    async getUsers() {
      db.collection('users')
        .get()
        .then((querySnapshot) => {
          const users = [];
          querySnapshot.forEach((doc) => {
            users.push(doc.data());
          });
          this.users = users;
        });
    },
    async addUser() {
      if (!this.name || !this.age || !this.sex) return;

      await db.collection('users').add({
        name: this.name,
        age: this.age,
        sex: this.sex,
      });

      this.name = '';
      this.age = '';
      this.sex = '';

      this.getUsers();
    },
  },
};
</script>

<style scoped></style>
