const JOHN = document.querySelectorAll(".john")
const TANYA = document.querySelectorAll('.tanya')

const SCENES = [TANYA, JOHN]

let scene = 0
let currentScene = SCENES[scene]

function prevSlider() {
	if (scene === 0) {
		scene = SCENES.length - 1
		currentScene = SCENES[scene]
	} else {
		scene--
		currentScene = SCENES[scene]
	}

	drawNewScene(currentScene)
}

function nextSlider() {
	if (scene === SCENES.length - 1) {
		scene = 0
		currentScene = SCENES[scene]
	} else {
		scene++
		currentScene = SCENES[scene]
	}
	drawNewScene(currentScene)
}

function drawNewScene(currentScene) {
	SCENES.forEach(scene => {

		scene.forEach(thing => {

			if (thing.classList[2] === 'isNoActive') {
				thing.classList.remove('isNoActive')
				thing.classList.add('isActive')
			} else {
				thing.classList.remove('isActive')
				thing.classList.add('isNoActive')
			}

		})

	})
}





