<template>
  <div class="dialogHeader border-solid border-b-gray-200 border-b-2 mb-5 p-5">
    <h4 class="inline-block text-3xl text-gray-500 ">{{ listStudent.dialog.method }} Student</h4>
    <button class="float-right inline-block text-gray-500 text-2xl" @click="()=>{listStudent.changeOpenDialog('')}">
      <font-awesome-icon icon="fa-solid fa-x"/>
    </button>
  </div>
  <div class="dialogContent">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
      First Name
    </label>
    <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name" type="text" v-model="newStudent.firstName">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
      Last Name
    </label>
    <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name" type="text" v-model="newStudent.lastName">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
      Email
    </label>
    <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email" v-model="newStudent.email" type="email">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
      Address
    </label>
    <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="address" type="text" v-model="newStudent.address">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
      Phone
    </label>
    <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="phone" type="text" v-model="newStudent.phone">
  </div>

  <div class="dialogButton bg-gray-100 flex justify-end mt-5">
    <button class="bg-none" @click="()=>{listStudent.changeOpenDialog('')}">Cancel</button>
    <button class=" bg-green-400 text-white" @click="listStudent.saveStudent(newStudent)">{{ listStudent.dialog.method }}</button>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {student} from "../store/student.js";

const listStudent = student();
const newStudent = ref({
  id:listStudent.dialog.student.student.id,
  firstName: listStudent.dialog.student.student.firstName,
  lastName: listStudent.dialog.student.student.lastName,
  email: listStudent.dialog.student.student.email,
  address: listStudent.dialog.student.student.address.address,
  phone: listStudent.dialog.student.student.phone
});
</script>

<style scoped>

.dialogButton button {
  margin: 5%;
  padding: 2%;
  border-radius: 10%;
}
</style>