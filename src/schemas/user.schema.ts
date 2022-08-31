export const CreateUserSchema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    isReviewer: {
      type: 'boolean',
    },
  },
  required: ['username', 'password', 'name', 'description', 'isReviewer'],
};

export const LoginSchema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
  },
  required: ['username', 'password'],
};

export const UserReponseSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    username: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    isReviewer: {
      type: 'boolean',
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
