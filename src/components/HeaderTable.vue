<template>
  <div class="Header">
    <h2 class="text-white inline-block">Manage <b>Student</b></h2>
    <div class="Header__ButtonList inline-block float-right w-1/4">
      <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 border border-red-600 rounded"
      @click="listStudent.deleteListStudent"
      >Delete
      </button>
      <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 border border-green-600 rounded"
              @click="()=>{listStudent.changeOpenDialog('Add')}" >
        Add New Student
      </button>
    </div>
  </div>
</template>

<script setup>
import {student} from "../store/student.js";
const listStudent = student();
</script>

<style scoped>
h2 {
  margin: 5px 0 0;
  font-size: 24px;

}
.Header__ButtonList {
  width: 35%;
}
.Header__ButtonList button {
  outline: none;
  margin-left: 5%;

}

.Header {
  background: #435d7d;
  color: #fff;
  padding: 16px 30px;
  min-width: 100%;
  border-radius: 3px 3px 0 0;
}
</style>