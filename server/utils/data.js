const dates = [...Array(7)].map((_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - i)
    const dd = (d.getMonth()+1)  + '/' + d.getDate() + "/" + d.getFullYear();
    return dd
})

const getLast7days = (data)  => {
    dates.forEach(element => {
        if (element.includes(data)) {
            console.log('foi nos ultimos 7.');
        }
        // console.log(element);

    });
}

getLast7days('12/4/2022')
