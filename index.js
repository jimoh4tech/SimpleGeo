document.getElementById("locate").addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(position => {
        const pos = position.coords;

        window.alert(pos.latitude + ", " + pos.longitude)
    })
})