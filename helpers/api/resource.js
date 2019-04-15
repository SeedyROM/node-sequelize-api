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
  async update(primaryKey, fields) {
    const updatedFields = await Model.update(
      fields,
      {
        where: {
          [Model.primaryKeyAttributes[0]]: primaryKey,
        },
        returning: true,
        plain: true,
      },
    );

    const instance = await Model.findOne({
      where: {
        [Model.primaryKeyAttributes[0]]: primaryKey,
      },
    });

    return { updatedFields, instance };
  },
  async delete(primaryKey) {
    await Model.destroy({
      where: {
        [Model.primaryKeyAttributes[0]]: primaryKey,
      },
    });
  },
});

module.exports = resourceController;
