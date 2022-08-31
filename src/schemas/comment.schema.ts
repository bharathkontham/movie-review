export const CreateCommentSchema = {
  type: 'object',
  properties: {
    filmId: {
      type: 'string',
    },
    userId: {
      type: 'string',
    },
    comment: {
      type: 'string',
    },
  },
  required: ['filmId', 'userId', 'comment'],
};

export const CommentResponseSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    filmId: {
      type: 'string',
    },
    userId: {
      type: 'string',
    },
    comment: {
      type: 'string',
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
    },
  },
};

export const UpdateFilmSchema = {
  type: 'object',
  properties: {
    comment: {
      type: 'string',
    },
  },
  required: ['comment'],
};
