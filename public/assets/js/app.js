document.addEventListener('click', ({ target }) => {

    //delete function
    if (target.id === "delete") {

        fetch(`/burgers/${target.dataset.uid}`, { method: 'DELETE' })

        if (target.id === "delete") {
            window.location.reload(true);
            console.log('deleted burger')
        }
    }

    if (target.id === "devour") {
        // console.log(target.dataset.uid)
        fetch(`/burgers/${target.dataset.uid}`, { method: 'PUT' })
        if (target.id === "devour") {
            window.location.reload(true);
        }
    }




})
