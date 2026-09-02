import { Joi } from 'celebrate';
import mongoose from 'mongoose';
import { TAGS } from '../constants/tags.js';

const objectIdCustomValidator = (value, helpers) => {
  if (!mongoose.isValidObjectId(value)) {
    return helpers.message('Invalid MongoDB ID');
  }
  return value;
};

const _getAllNotesJoi = Joi.object().keys({
  page: Joi.number().integer().min(1).default(1),
  perPage: Joi.number().integer().min(5).max(20).default(10),
  tag: Joi.string().valid(...TAGS).optional(),
  search: Joi.string().allow('').optional(),
});

const _noteIdJoi = Joi.object().keys({
  noteId: Joi.string().custom(objectIdCustomValidator).required(),
});

const _createNoteJoi = Joi.object().keys({
  title: Joi.string().min(1).required(),
  content: Joi.string().allow('').optional(),
  tag: Joi.string().valid(...TAGS).optional(),
});

const _updateNoteBodyJoi = Joi.object().keys({
  title: Joi.string().min(1).optional(),
  content: Joi.string().allow('').optional(),
  tag: Joi.string().valid(...TAGS).optional(),
}).min(1);

export const getAllNotesSchema = {
  query: _getAllNotesJoi
};

export const noteIdSchema = {
  params: _noteIdJoi
};

export const createNoteSchema = {
  body: _createNoteJoi
};

export const updateNoteSchema = {
  params: _noteIdJoi,
  body: _updateNoteBodyJoi
};



