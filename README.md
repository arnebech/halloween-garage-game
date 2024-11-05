# Halloween Garage Game

A simple but fun one-button game for Halloween.

It simulates a garage door that can open, and when open there is a ghost you can throw pumpkins at. If you miss the ghost, you hit the car instead (which honks). You're scored on how many times out of 10 you can hit the ghost. Once you have thrown 10 pumpkins, the garage door will close and the score will be displayed.

![picture of house with game on in garage door down mode](docs/img/garage-closed.jpeg)
![picture of garage door up, with gameplay](docs/img/garage_open.jpeg)

https://github.com/arnebech/halloween-garage-game/assets/303023/70a7cc0a-0465-437d-b262-90a5faaa6915

https://github.com/arnebech/halloween-garage-game/assets/303023/4383c25a-121e-46be-a94a-f260393189a3

## Structure

- An arduino sending serial commands when a big blue "arcade" button is pressed
- A nodejs program turning the serial command into key presses
- A Roblox experience, with a fixed camera + game logic. 
- A white sheet hung across an open garage door opening
- Projector projecting from the rear (i.e. from inside the garage)


## Log

### Oct 31, 2023

The only metric captured was button presses. 

![graph showing button presses over time](docs/img/btn-presses.jpg)

### Oct 31, 2024

The only metric captured was button presses. 

![graph showing button presses over time](docs/img/btn-presses-2024.png)
