import mongoose from 'mongoose';

const Modelschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      maxlength: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    /*notesList: [
      {
        note: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'note',
        },
      },
    ],*/
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Model = mongoose.model('User', Modelschema);

export default Model;
