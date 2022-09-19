<template>
  <td>
    <input type="checkbox" v-model="dialog.listDeleteStudents" :value=students.student.id>
  </td>

  <td>{{ studentName }}</td>
  <td>{{ students.student.email }}</td>
  <td>{{ students.student.phone }}</td>
  <td>{{ students.student.address.address }}</td>

  <td>
    <button @click="()=>{dialog.changeOpenDialog('Edit',students)}" >
      <font-awesome-icon icon="fa-solid fa-pen" class="text-yellow-400"/>
    </button>
    <button @click="()=>{dialog.deleteStudent(students.student.id)}">
      <font-awesome-icon icon="fa-solid fa-trash" style="color: red"/>
    </button>
  </td>
</template>

<script setup>
import { defineProps, computed} from "vue";

const students = defineProps(['student'])
import {student} from "../store/student.js";

const studentName = computed(() =>
    students.student.firstName+" "+students.student.lastName
)
const dialog = student();

</script>

<style scoped>
td {
  border-color: #e9e9e9;
  padding: 12px 15px;
  vertical-align: middle;
}

td button {
  padding: 12px 15px;
  vertical-align: middle;
}
</style>