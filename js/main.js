/* anim */

const flightPath = {
	curviness: 1,
	autoRotate: false,
	values: [
		{x: -600, y: 800}
	]
}

const tween = new TimelineLite();

tween.add(
	TweenLite.to('.samur-img', 8, {
		bezier: flightPath,
		ease: Power1.easeOut
	})
);

const controller = new ScrollMagic.Controller({
	globalSceneOptions: {
		triggerHook: 0,
		reverse: true
	},
	vertical: false
});

const scene = new ScrollMagic.Scene({
	triggerElement: '.first-page',
	duration: 2000
})
.setTween(tween)
.addTo(controller);

var controller3 = new ScrollMagic.Controller(
	
);
var tween3 = new TweenLite.to(".two", 0.5);
var pinScene = new ScrollMagic.Scene({
	triggerElement: '.first-page',
	triggerHook: 0,
	duration: '40%'
})
.setTween(tween3)
.setPin('.first-page')
.addTo(controller3)
.addIndicators()

/*const flightPath2 = {
	curviness: 3,
	autoRotate: false,
	values: [
		{x: 0, y: -1100}
	]
}

const tween2 = new TimelineLite();

tween2.add(
	TweenLite.to('.red-circle', 8, {
		bezier: flightPath2,
		ease: Power1.easeOut
	})
);
const controller2 = new ScrollMagic.Controller({
	globalSceneOptions: {
		triggerHook: 0,
		reverse: true
	},
	vertical: false
});

const scene2 = new ScrollMagic.Scene({
	triggerElement: '.first-page',
	duration: 500
})
.setTween(tween2)
.addIndicators()
.setPin('.first-page')
.addTo(controller2);*/
