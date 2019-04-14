const defaultOptions = {
  include: [],
};

const resourceController = (Model, options = defaultOptions) => ({
  async fetchAll() {
    const results = await Model.findAll({
      ...options,
    });
    return results;
  },
  async fetch(primaryKey) {
    const result = await Model.findOne({
      ...options,
      where: {
        [Model.primaryKeyAttributes[0]]: primaryKey,
      },
    });
    return result;
  },
  async create(fields) {
    const instance = await Model.create(fields);
    return instance;
  },
});

module.exports = resourceController;
