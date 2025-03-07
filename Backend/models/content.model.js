const mongoose = require("mognoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const documentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const imageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const videoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const audioSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  audio: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const DocumentModel = model("documents", documentSchema);
const ImageModel = model("images", imageSchema);
const VideoModel = model("videos", videoSchema);
const AudioModel = model("audios", audioSchema);

module.exports = {
  DocumentModel,
  ImageModel,
  VideoModel,
  AudioModel,
};
