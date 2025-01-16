import EventEmitter from "events"

const emitter = new EventEmitter()

emitter.emit("someEvent")