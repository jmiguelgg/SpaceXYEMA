const useDateFormat = (props) => {
    let newDate = new Date(props)
    return newDate.toString()
}

export default useDateFormat