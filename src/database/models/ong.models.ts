import mongoose from "mongoose";
import { Iong } from "../../interfaces/ong";
import { hashPassword } from "../../utils/bcrypt.handle";

export interface IUserDocument extends Iong, mongoose.Document {}

const ongSchema = new mongoose.Schema<IUserDocument>(
    {
        username: {
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        website: {
            type: String
        },
        telephone: {
            type: Number
        },
        photo: {
            type: String
        },
        ong_types: {
            type: String,
            enum: ['Presencial', 'Hibrido', 'Remoto', 'Unknown'],
            required: true,
            default: 'Unknown'
        }
    },
    { timestamps: true }
)

ongSchema.pre("save", async function (next) {
    let ong = this;
  
    if (!ong.isModified("password")) {
      return next();
    }
  
    try {
      const hash = await hashPassword(ong.password);
  
      ong.password = hash;
      return next();
    } catch (err: any) {
      throw new Error("Error hashing \n" + err);
    }
  });

const OngModel = mongoose.model<IUserDocument>("Ong", ongSchema);

export default OngModel;