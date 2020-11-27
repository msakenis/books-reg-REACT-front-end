export const registration = [
  {
    name: 'username',
    type: 'text',
    labelText: 'Username',
    required: true,
    minLength: 6,
    maxLength: 20,
  },
  {
    name: 'password',
    type: 'password',
    labelText: 'Password',
    required: true,
    minLength: 8,
    maxLength: 64,
  },
];

export const addBookFormData = [
  {
    name: 'author',
    type: 'text',
    labelText: 'Author',
    required: true,
    minLength: 1,
    maxLength: 64,
  },
  {
    name: 'title',
    type: 'text',
    labelText: 'Title',
    required: true,
    minLength: 1,
    maxLength: 64,
  },
];
