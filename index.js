// 👥 [ GET ] LIST USERS 
function listUser(page) {
    const init = {
        method: `get`

    }

    fetch(`https://reqres.in/api/users?page=${page}`, init)
        .then(res => res.json())
        // .then(res => res.map(getName))
        // function getName(item){
        // item.first_name
        // }
        //  = [...array]
        .then(res => {
            for (i = 0; i = res.data.lenght; i++) {
                
            }
            // console.log(res)
            // console.info(`${res.data.first_name}`)
        }) //+ console.info(res.data[0].last_name))
        .catch(error => console.error(error))

    return "👥 Fetching LIst User . . ."
}

// 😹 [GET] SINGLE USER
function singleUser(id) {
    const init = {
        method: 'get'

    }
    fetch(`https://reqres.in/api/users?page=1`, init)
        .then(res => res.json())
        .then(res => console.info(`hello, my name is ${res.data[id].first_name} ${res.data[id].last_name}. You can contact me at ${res.data[id].email}`))

    return '😹 Fetching Single User . . .'
}

//[ POST ] CREATE
function createAccount(name, job) {
    const dataToSend = {
        "name": prompt("Masukan nama anda"),
        "job": prompt('Masukan pekerjaan anda'),
        //     first_name:first_name,
        //     last_name: last_name,
        //     avatar:avatar
    }
    const init = {
        method: 'post',
        body: JSON.stringify(dataToSend)
    }
    fetch(`https://reqres.in/api/users`, init)
        .then(res => res.json())
        .then(res => console.log(res))
}

//[PUT] UPDATE
function updateAcc(name, job) {
    const dataToSend = {
        "name": prompt("Masukan nama anda"),
        "job": prompt('Masukan pekerjaan anda')
    }
    const init = {
        method: 'put',
        body: JSON.stringify(dataToSend)
    }
    fetch(`https://reqres.in/api/users/2`, init)
        .then(res => res.json())
        .then(res => console.log(res))
}

//[]REGISTER
function regAcc(email, password) {
    const dataToSend = {
        "email": prompt("Masukan email anda"),
        "password": prompt('Masukan password anda')
    }
    const init = {
        method: 'post',
        body: JSON.stringify(dataToSend)
    }
    fetch(`https://reqres.in/api/register`, init)
        .then(res => res.json())
        .then(res => console.log(res))
}