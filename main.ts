let input2 = game.askForString("Whats the Password?")
if (input2 == "arcade" || input2 == "password") {
    game.splash("You are in!")
} else {
    game.splash("Login Failed")
}
