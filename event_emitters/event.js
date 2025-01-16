import EventEmitter from "events"

const emitter = new EventEmitter();

emitter.on("someEvent", () => {
  console.log("An event just took place!");
});

emitter.emit("someEvent")
