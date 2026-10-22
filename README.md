# Self-Driving Neural Net

A self-driving car simulation where the neural network is built from scratch in JavaScript, with no pre-made machine learning libraries. A population of cars learns to drive down a three-lane road and dodge traffic, and the best "brain" can be saved and used to seed the next run.

Custom maps can be added, and the cars can learn them.

## How it works

- **Sensors:** each car casts 5 rays (150px long, spread across 90°) and reads how close the nearest road border or traffic car is along each one.
- **Neural network:** the sensor readings are fed through a feedforward network. Each neuron outputs 1 or 0 depending on whether its weighted input sum exceeds its bias. The outputs drive the car's controls (forward, left, right, reverse).
- **Learning:** 1,000 AI cars run at once. The car that has travelled furthest is treated as the best, and its brain can be saved to the browser's `localStorage`. On the next run, every car starts with a copy of that brain, and all but one are randomly mutated (mutation amount 0.1), so each generation explores small variations on the best driver so far.
- **Visualiser:** the best car's network is drawn live next to the road so you can watch the neurons fire.

## Running it

There is no build step or dependencies. Clone the repo and open `index.html` in a browser.

```bash
git clone https://github.com/EmreJMeydan/Self-Driving-Neural-Net.git
cd Self-Driving-Neural-Net
# then open index.html in your browser
```

To train:

1. Open `index.html` and let the cars run.
2. When a car drives well, call `save()` to store its brain in `localStorage`.
3. Refresh the page. All cars now start from the saved brain with mutations applied.
4. Repeat. Call `discard()` to wipe the saved brain and start fresh.

## Project structure

| File | Purpose |
| --- | --- |
| `index.html` | Page layout with the car and network canvases |
| `main.js` | Sets up the road, traffic and cars, runs the animation loop, and handles saving/loading the best brain |
| `network.js` | `NeuralNetwork` and `Level` classes: feedforward and mutation |
| `car.js` | Car physics and movement |
| `sensor.js` | Ray casting and distance readings |
| `controls.js` | Keyboard controls (arrow keys) and the dummy traffic controls |
| `road.js` | Road and lane drawing, plus border definitions |
| `utils.js` | Helper functions such as `lerp` and line intersection |
| `style.css` | Styling |

## Controls

Cars can also be driven manually with the arrow keys when a car is set to `"KEYS"` control mode. Traffic cars use `"DUMMY"` mode and just drive forward at a constant speed.

## Roadmap

- Add more custom maps
- Tune network size and mutation rate
- Add a description, topics and screenshots/GIF of the simulation
