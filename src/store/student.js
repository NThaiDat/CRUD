import {defineStore} from "pinia";
import axios from "axios";

export const student = defineStore("student", {
    state: () => {
        return {
            listStudents: [],
            dialog: {
                isOpen: false,
                method: "",
                student: {}
            },
            listDeleteStudents: [],
        }
    },
    actions: {
        async getListStudent() {
            const response = await axios.get("https://dummyjson.com/users");
            this.listStudents = response.data.users;
        },
        changeOpenDialog(method, student) {
            this.dialog.isOpen = !this.dialog.isOpen;
            this.dialog.method = method;
            if (student === undefined) {
                this.dialog.student = {
                    student: {
                        id: 0,
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        address: {
                            address: '',
                        }
                    }
                }
            } else {
                this.dialog.student = student;
            }
        },
        async saveStudent(student) {
            if (student.id === 0) {
                try {
                    await axios.post("https://dummyjson.com/users/add", student)
                        .then(response => {
                            alert('Thêm thành công')
                        })
                } catch (error) {
                    alert('Có lỗi xảy ra, vui lòng thử lại sau')
                }
            } else {
                try {
                    await axios.put("https://dummyjson.com/users/" + student.id, student)
                        .then(response => {
                            alert('Sửa thành công')
                        });
                } catch (error) {
                    alert('Có lỗi xảy ra, vui lòng thử lại sau')
                }
            }
        },
        async deleteStudent(id) {
            try {
                await axios.delete("https://dummyjson.com/users/" + id)
                    .then(response => {
                        alert('Xóa thành công')
                    });
            } catch (error) {
                alert('Có lỗi xảy ra, vui lòng thử lại sau')
            }
        },
        deleteListStudent() {
            const promiseDeleteArr = this.listDeleteStudents.map((id) => {
                return axios.delete("https://dummyjson.com/users/" + id)
            })
            Promise.all(promiseDeleteArr).then(() => alert('Xóa thành công'))
        },
        checkAllStudent(){
            if(this.listDeleteStudents.length >= this.listStudents.length) {
                this.listDeleteStudents = []
            }
            else {
                for (let i = 0; i < this.listStudents.length; i++) {
                    this.listDeleteStudents.push(this.listStudents[i].id)
                }
                this.listDeleteStudents=[...new Set(this.listDeleteStudents)]
            }
            console.log(this.listDeleteStudents)
        }
    }
});



