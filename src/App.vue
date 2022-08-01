<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HeaderTable from "./components/HeaderTable.vue";
import DialogStudent from "./components/DialogStudent.vue";
import {ref, reactive, onMounted, computed} from "vue";
import Student from "./components/Student.vue";
import {student} from "./store/student.js";0
import axios from "axios";

const totalPage = computed(() => {
  if (listStudent.listStudents.length % 5 == 0) {
    return listStudent.listStudents.length / 5;
  } else {
    return parseInt(listStudent.listStudents.length / 5) + 1;
  }

})
const currentPage = ref(1)
const listStudent = student();
onMounted(async () => {
  // const res = await axios.get('https://dummyjson.com/users')
  // students.user = res.data.users
  await listStudent.getListStudent()
  // console.log(listStudent.listStudents)
})
</script>

<template>

  <!--  <button @click="openDialog=!openDialog">Open</button>-->
  <HeaderTable/>
  <teleport to="body">
    <div class="w-96 p-3.5 dialog border border-2 border-b-gray-100 bg-white rounded" v-if="listStudent.dialog.isOpen">
      <DialogStudent/>
    </div>
  </teleport>
  <table class="table table-auto w-full">
    <thead>
    <tr>
      <th><input type="checkbox"></th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Address</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="student in listStudent.listStudents" :key="student.id">
      <Student :student="student" v-if="5*(currentPage-1)<student.id&&student.id<=5*currentPage"></Student>
    </tr>

    </tbody>
  </table>
  <div class="Pagination float-right">
    <div v-for="i in totalPage" class="inline-block hover:bg-blue-400 hover:text-white m-1"
    >
      <button @click="currentPage=i;activePage=true" class="p-2">{{ i }}</button>
    </div>
  </div>
</template>

<style scoped>

.dialog {
  position: fixed;
  top: 10%;
  left: 35%;
  z-index: 11;
}

th {
  text-align: left;
  border-color: #e9e9e9;
  padding: 12px 15px;
  vertical-align: middle;
  border-bottom: 2px solid #dee2e6;
  border-top: 1px solid #dee2e6;
}

tbody tr {
  border-bottom: 1px solid #dee2e6;
}
</style>
