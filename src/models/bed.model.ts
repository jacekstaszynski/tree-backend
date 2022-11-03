import {Document, model, Schema} from 'mongoose';

export interface Bed {
  date: Date;
  total: number;
  newPatient: number;
  came: number;
  gone: number;
  out: number;
  died: number;
  endTotal: number;
  severe: number;
  hospital: string;
  tasag: string;
}

const bedSchema: Schema = new Schema<Bed>({
  date: {type: Date, required: true},//Өдөр
  total: {type: Number, required: true},//Эмчлүүлэгсдийн тоо
  newPatient: {type: Number, required: true},//Шинээр хэвтсэн эмчлүүлэгч
  came: {type: Number, required: true},//Өөр тасгаас ирсэн
  gone: {type: Number, required: true},//Өөр тасагт очсон
  out: {type: Number, required: true},//Гарсан, шилжсэн
  died: {type: Number, required: true},//Нас барсан
  endTotal: {type: Number, required: true},//Эцэст байгаа эмчлүүлэгчийн тоо
  severe: {type: Number, required: true},//Хүнд өвчтөн
  hospital: {type: String, required: true},//Эмнэлгийн нэр
  tasag: {type: String, required: true},//Тасгийн нэр
});

const bedModel = model<Bed & Document>('Bed', bedSchema);

export default bedModel;
