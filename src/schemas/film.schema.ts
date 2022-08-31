export const CreateFilmSchema = {
  type: 'object',
  properties: {
    releaseDate: {
      type: 'string',
      format: 'date-time',
    },
    rating: {
      type: 'number',
      minimum: 0,
      maximum: 10,
    },
    name: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    review: {
      type: 'string',
    },
    country: {
      type: 'string',
    },
    genre: {
      type: 'string',
    },
    photo: {
      type: 'string',
    },
  },
  required: [
    'releaseDate',
    'rating',
    'name',
    'description',
    'review',
    'country',
    'genre',
    'photo',
  ],
};

export const FilmReponseSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    releaseDate: {
      type: 'string',
      format: 'date-time',
    },
    rating: {
      type: 'number',
      minimum: 0,
      maximum: 10,
    },
    name: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    review: {
      type: 'string',
    },
    country: {
      type: 'string',
    },
    genre: {
      type: 'string',
    },
    photo: {
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
    rating: {
      type: 'number',
      minimum: 0,
      maximum: 10,
    },
    description: {
      type: 'string',
    },
    review: {
      type: 'string',
    },
    genre: {
      type: 'string',
    },
    photo: {
      type: 'string',
    },
  },
};
