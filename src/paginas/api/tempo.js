async function tempo(request, response) {
    const dynamicDate = new Date()

    const subscribersResponse = await fetch("https://api.github.com/users/USER_GITHUB")
    const subscribersResponseJson = await subscribersResponse.json()
    const usuarios = subscribersResponseJson.total_subscribers

    response.json({
        date: dynamicDate.toGMTString()
        usuarios: usuarios
    })
}

export default tempo

'https://api.github.com/users/USER_GITHUB'
