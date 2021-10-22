'use strict';

module.exports = class Collection {
  constructor(model) {
    this.model = model;
  }

  async read(id) {
    try {
      let records;
      if (id) {
        records = await this.model.findbyPk(id);
      } else {
        records = await this.model.findAll();
      }
      return records;
    } catch (error) {
      return error;
    }
  }

  async create(json) {
    try {
      const record = await this.model.create(json);
      return record;
    } catch (error) {
      return error;
    }
  }

  async update(id, json) {
    try {
      const record = await this.model.findByPk(id);
      const updatedRecord = await record.update(json);
      return updatedRecord;
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      const deletedRows = await this.model.destroy(id);
      return deletedRows;
    } catch (error) {
      return error;
    }
  }
};
