import Matter, { Body } from "matter-js";
import { BodyClass } from "./BodyClass";

export class TennisBall extends BodyClass {
	public body: Matter.Body;
	public type: string = "tennisBall";
	public sounds: string[] = new Array(3).fill(0).map((_, i) => `src/assets/sounds/tennisBall/tennisBall_${i + 1}.mp3`);
	constructor(x: number, y: number, radius: number) {
		super();
		this.body = Matter.Bodies.circle(x, y, radius, {
			friction: 0.5,
			restitution: 0.6,
			label: "tennisBall",
			frictionAir: 0,
			render: {
				sprite: {
					texture: "src/assets/sprites/TennisBall.png",
					xScale: (radius * 2) / 2200,
					yScale: (radius * 2) / 2200,
				},
			},
		});
	}
}
