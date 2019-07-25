
class FileReader {
  private _emitter: EventEmitter;
  private _fname: string;
  private _buffer: any;

  constructor(emitter: EventEmitter) {
    this._emitter = EventEmitter;

    this._emitter.on("ReadFile", () => {
      this._buffer = readFile(this._fname);

      this._emitter.emit("FileReadOK");
    }
  }

  readData(fname: string, dataObject: any) {
    this._fname = fname;
    this._buffer = dataObject;

    this._emitter.emit("ReadFile);
  }
}
