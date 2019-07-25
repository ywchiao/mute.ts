

import FileReader from "filereader"

const F_NAME = "JONS_DATA.json";

class Boss {
  private _emitter: EventEmitter;
  private _fileReader: FileReader;
  private _json_data: any;

  constructor() {
    this._emitter = new EventEmitter();

    this._fileReader = new FileReader(this._emitter);

    this._emitter.on("FileReadOK", () => {
      console.log(`${JSON.stringify(this._json_data)`);
    }
  }

  start() {
    this._fileReader.readData(F_NAME, this._json_data);
  }
}
