# MongoDB Application

- Introduction to mongoose tutorial from Pluralsight

## Tools

- [Node]
- [Express]
- [Express Generator](https://expressjs.com/en/starter/generator.html)
- [Mongoose](mongoosejs.com/)
- [Swig](https://github.com/paularmstrong/swig) / [Hogan](http://twitter.github.io/hogan.js/)
- [Bootstrap](https://getbootstrap.com/)
- [Nodemon](https://github.com/remy/nodemon) / [Forever](https://github.com/foreverjs/forever)
- [Postman](https://www.getpostman.com/)
- [RoboMongo](https://robomongo.org/)

## Workflow

1. sudo apt install node-express-generator
2. express -H
3. npm install swig --save
4. npm uninstall hjs --save
5. Setup Database using a DBaaS (Database as a Service)
    - [mlab](https://mlab.com/)
    - [compose](https://www.compose.com/)
6. MongoDB GUI
    - [RoboMongo](https://robomongo.org/)
    - [Compass](https://www.mongodb.com/products/compass)
7. Building MongoDB Schema

## Mlab

DCI Examples

### Schema setup

#### Schema Types Example

```js
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var customerSchem = new Schem {
  name:       String,
  address:    String,
  city:       String,
  state:      String,
  country:    String,
  zipCode:    Number,
  createdOn:  Date,
  isActive:   Boolean
}
var simpleSchem = new Schmea({ fieldName: SchemaType })
```

#### Schema Example with Subschemas

```js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subCategory = {
  name:         String,
  description:  String,
  isActive:     Boolean
}
var subAnswers = {
  answerText:     String,
  isCorrect:      Boolean,
  displayOrder:   Number
}
var subQuestions = {
  questionType: String,
  questionText: String,
  answers:      [subAnswers]
};
var quizSchema = newSchema({
  name:         String
  description:  String,
  categories:   [subCategories],
  questions     [subQuestions]
})
```

### Schema Example

- Schema -> Model -> Document
- [Schema](http://mongoosejs.com/docs/guide.html)
- [Schema Types](http://mongoosejs.com/docs/schematypes.html)
- [Model](http://mongoosejs.com/docs/models.html)
- [Document](http://mongoosejs.com/docs/documents.html)
- [Subdocument](http://mongoosejs.com/docs/subdocs.html)

```js
module.exports = mongoose.model('Standup', )
```

### models/startup.server.model.js

```js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var standupSchema = new Schema({
  memberName: String,
  project: String,
  workYesterday: String,
  workToday: String,
  impediment: String,
  createdOn: { type: Date, default: Date.now }
});

// disabled id
var noIdSchema = newSchema({ name: String}, {id: false});

// example of using schema.add ...
var exampleSchema = new Schema();

exampleSchema.add({
  memberName: String,
  project: String,
  workYesterday: String,
  workToday: String,
  impediment: String,
  createdOn: { type: Date, default: Date.now }
});

// Example of using Schema.add

var includeMiddleName = true;
var exampleSchema = new Schema();

if (includeMiddleName) {
  exampleSchema.add({
    memberName: {
      first: String,
      middle: String,
      last: String
    }
  });
}
else {
  exampleSchema.add({
    memberName: {
      first: String,
      last: String
    }
  });
}

exampleSchema.add({
  project: String,
  workYesterday: String,

});
```

### Validation
