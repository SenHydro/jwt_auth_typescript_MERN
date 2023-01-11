import { Schema, model, Document } from "mongoose";

export interface IExample extends Document {
  name: string;
  id: number;
}

const exampleSchema: Schema = new Schema({
  name: { type: String },
  id: { type: Number },
});

export default model<IExample>("Example", exampleSchema);
