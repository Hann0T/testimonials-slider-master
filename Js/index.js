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

console.log(currentScene)
console.log(SCENES)


function drawNewScene2(currentScene) {

	SCENES.forEach(scene => {
		if (scene.classList[2]) {
			console.log('nadaparahacer')
		} else {
			scene.classList.remove('isActive')
			scene.classList.add('isNoActive')
		}
	})

	currentScene.classList.remove('isNoActive')
	currentScene.classList.add('isActive')
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





