document.addEventListener('click', ({ target }) => {

    if (target.id === "devour") {
        fetch(`/burgers/${target.dataset.uid}`, { method: 'PUT' })
        if (target.id === "devour") {
            window.location.reload(true);
        }
    }

    if (target.id === "delete") {

        fetch(`/burgers/${target.dataset.uid}`, { method: 'DELETE' })
        if (target.id === "delete") {
            window.location.reload(true);
            console.log('deleted burger')
        }
    }

})
