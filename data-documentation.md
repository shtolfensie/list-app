# Documentation of the data structure in Lst

-app
  -users: array of user objects
    [{
      id: Number.required,
      name: String.required,
      email: String.email.required
    }]
  -lists: object with list arrays based on user ids
    userid:
      -array of lists for a user
      [{
        id: Number.required,
        name: String.required,
        items: Array>Objects>{id, name, done, tag, importance},
        tags: Array>String,
        color: Color.rgb.String,
        position: Object>{ x.Number, y.Number }
      }]