import Note from '../models/note.js';

export const create = async (req, res) => {
  const { title, content } = req.body;
  const note = new Note({ title, content, user: req.user });
  await note.save();
  res.json({
    success: true,
    data: note,
  });
};

export const list = async (req, res) => {
  //const page = req.query?.page || 1;
  //const limit = 2;
  //const skip = (page - 1) * limit;
  const notes = await Note.find({ user: req.user }); //.skip(skip).limit(limit);
  //const total = await Note.countDocuments();
  //const pages = Math.ceil(total / limit);
  if (!notes)
    return res.status(400).send({ message: 'there is not notes you ceated' });
  res.json({
    success: true,
    //pages,
    data: notes,
  });
};

export const update = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const note = await Note.findById(id);
  if (!note) return res.status(403);
  await note.updateOne({ title, content });

  // await Note.updateOne(
  //   { _id: id },
  //   {
  //     $set: {
  //       title,
  //       content,
  //     },
  //   }
  // );
  const upadtedNote = await Note.findById(id);

  res.json({
    success: true,
    data: upadtedNote,
  });
};

export const Delete = async (req, res) => {
  const { id } = req.params;
  await Note.deleteOne({ _id: id });
  res.json({
    success: true,
  });
};
export const find = async (req, res) => {
  const { id } = req.params;
  const note = await Note.findById(id);
  if (!note) return res.status(403).send({ message: 'note not found' });
  res.json({
    success: true,
    data: note,
  });
};
