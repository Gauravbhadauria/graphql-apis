const { Query } = require("mongoose");
const User = require("../models/User");

const resolvers = {
  Query: {
    users: async () => User.find(),
    user: async (_, { id }) => User.findById(id),
  },
  Mutation: {
    createUser: async (_, { name, email, age, address }) => {
      const user = new User({ name, email, age, address });
      return user.save();
    },
    updateUser: async (_, { id, name, email, age, address }) => {
      return User.findByIdAndUpdate(id, { name, email, age, address });
    },
    deleteUser: async (_, { id }) => {
      return User.findByIdAndDelete(id);
    },
  },
};

module.exports = resolvers;
