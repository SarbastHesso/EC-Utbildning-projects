
const form = document.querySelector("#form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const submitBtn = document.querySelector("#submitBtn");
const output = document.querySelector("#output");

let savedId;

let users = [];

const usersList = () => {
    output.innerHTML = '';
    users.forEach(user => {
        output.innerHTML +=
            `<div id="${user.id}" class="d-flex justify-content-between align-items-center bg-white border rounded p-3 mb-2">
            <div>
                <h5>${user.firstName} ${user.lastName}</h5>
                <p>${user.email}</p>
            </div>
            <div>
                <button class="bg-info p-1 text-white rounded">Ändra</button>
                <button class="bg-danger p-1 text-white rounded">Ta bort</button>
            </div>
    </div>`
    });
};


function invalid(formInput, meddelande) {
    formInput.classList.add('is-invalid'),
        formInput.parentElement.querySelector('small').innerText = meddelande;
    formInput.addEventListener('keyup', (e) => {
        formInput.classList.remove('is-invalid');
        formInput.parentElement.querySelector('small').innerText = '';
    });
};


let validateFirstName = () => {
    if (firstName.value === '') {
        invalid(firstName, 'Vänligen fyll i ditt förnamn.');
        return false;
    } else if (firstName.value.length < 2) {
        invalid(firstName, 'Namnet måste innehålla minst 2 tecken.');
        return false;
    } else {
        return true;
    };
};


let validateLastName = () => {
    if (lastName.value === '') {
        invalid(lastName, 'Vänligen fyll i ditt efternamn.');
        return false;
    } else if (lastName.value.length < 2) {
        invalid(lastName, 'Namnet måste innehålla minst 2 tecken.');
        return false;
    } else {
        return true;
    };
};


let existUser = (email) => {
    let status = false;
    users.forEach(user => {
        if (user.email === email)
            status = true;
    })
    if (status === true) {
        return false
    } else {
        return true
    }
};


let validateEmail = () => {
    let regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!(regEx.test(email.value))) {
        invalid(email, 'Vänligen fyll i en giltig e-postadress.');
        return false
    } else if (!(existUser(email.value)) && (submitBtn.textContent === 'Registrera')) {
        invalid(email, 'En användare med den här e-postadressen finns redan.');
        return false
    } else {
        return true;
    };
};


let validate = () => {
    if (validateFirstName() && validateLastName() && validateEmail()) {
        return true
    } else {
        return false
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validate() && submitBtn.textContent === 'Registrera') {
        let newUser = {
            id: Date.now().toString(),
            firstName: firstName.value[0].toUpperCase() + firstName.value.substring(1),
            lastName: lastName.value[0].toUpperCase() + lastName.value.substring(1),
            email: email.value
        };
        users.push(newUser);
        usersList();
        firstName.value = '', lastName.value = '', email.value = '';
    }
});


output.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.textContent === 'Ta bort') {
        users = users.filter(user => user.id !== e.target.parentNode.parentNode.id);
        usersList();

    } else if (e.target.textContent === 'Ändra') {
        users.forEach(user => {
            if (user.id === e.target.parentNode.parentNode.id) {
                savedId = e.target.parentNode.parentNode.id
                submitBtn.textContent = 'Spara';
                submitBtn.classList.add('save-color');
                e.target.textContent = 'Ångra';
                e.target.classList.add('ångra-color');
                firstName.value = user.firstName;
                lastName.value = user.lastName;
                email.value = user.email;
            }
        })

    } else if (e.target.textContent === 'Ångra') {
        submitBtn.textContent = 'Registrera';
        submitBtn.classList.remove('save-color');
        e.target.textContent = 'Ändra';
        firstName.value = '', lastName.value = '', email.value = '';
    }
});


form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (submitBtn.textContent === 'Spara') {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === savedId) {
                let updatedUser = {
                    id: savedId,
                    firstName: firstName.value[0].toUpperCase() + firstName.value.substring(1),
                    lastName: lastName.value[0].toUpperCase() + lastName.value.substring(1),
                    email: email.value
                };
                users.splice(i, 1, updatedUser);
                usersList();
                submitBtn.textContent = 'Registrera';
                submitBtn.classList.remove('save-color');
                firstName.value = '', lastName.value = '', email.value = '';
            }
        }
    }

})

usersList();









































