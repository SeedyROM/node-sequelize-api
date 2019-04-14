const defaultOptions = {
  include: [],
};

const restController = (Model, options = defaultOptions) => ({
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
});

module.exports = restController;
