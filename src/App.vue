<script setup>
import HeaderTable from "./components/HeaderTable.vue";
import DialogStudent from "./components/DialogStudent.vue";
import {ref, reactive, onMounted, computed, watch} from "vue";
import Student from "./components/Student.vue";
import {student} from "./store/student.js";

const totalPage = computed(() => {
  if (listStudent.listStudents.length % 5 == 0) {
    return listStudent.listStudents.length / 5;
  } else {
    return parseInt(listStudent.listStudents.length / 5) + 1;
  }
})

const currentPage = ref(1)
const listStudent = student();

watch(totalPage, (newVal, oldVal) => {
  if (newVal ===1) {
    currentPage.value = 1;
  }
})

onMounted(async () => {
  await listStudent.getListStudent()
})

</script>

<template>
  <HeaderTable/>
  <teleport to="body">
    <div class="w-96 p-3.5 dialog border border-2 border-b-gray-100 bg-white rounded" v-if="listStudent.dialog.isOpen">
      <DialogStudent/>
    </div>
  </teleport>
  <table class="table table-auto w-full">
    <thead>
    <tr>
      <th><input type="checkbox" @change="listStudent.checkAllStudent"></th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Address</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(student,index) in listStudent.listStudents" :key="student.id">
      <Student :student="student" v-if="5*(currentPage-1)<=index&&index<5*currentPage"></Student>
    </tr>
    </tbody>
  </table>
  <div class="Pagination float-right inline mr-4" v-if="totalPage>1">
    <button class="hover:bg-blue-400 hover:text-white m-1 mt-2 p-2" @click="currentPage--" :disabled="currentPage===1"><font-awesome-icon icon="fa-solid fa-angle-left" /></button>
    <div v-for="i in totalPage" class="inline-block hover:bg-blue-400 hover:text-white m-1 mt-2">
      <button @click="currentPage=i" class="p-2" :class="currentPage===i?'bg-blue-400 text-white' :'' ">{{ i }}</button>
    </div>
    <button class="hover:bg-blue-400 hover:text-white m-1 mt-2 p-2" @click="currentPage++" :disabled="currentPage===totalPage"><font-awesome-icon icon="fa-solid fa-angle-right" /></button>
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
