import Nedb from 'nedb/browser-version/out/nedb.min';

const promisify = (fn) => (...args) => {
  return new Promise((resolve, reject) => {
    fn(...args, (err, ...data) => {
      if (err) {
        reject(err);
      } else {
        resolve(...data);
      }
    });
  });
};

// Facade
class NedbStorage {
  constructor(db) {
    this.db = {};
    const methods = ['find', 'findOne', 'insert', 'update', 'remove'];
    methods.forEach((method) => (this.db[method] = promisify(db[method].bind(db))));
  }
  async find(filter = {}) {
    return await this.db.find(filter);
  }
  async insert(obj) {
    return await this.db.insert(obj);
  }
  async update(query, obj) {
    return await this.db.update(query, obj, { returnUpdatedDocs: true });
  }
  async remove(query) {
    if (!query) {
      return this.db.remove({}, { multi: true });
    }
    return await this.db.remove(query);
  }
}

export class MyPlaylistAppStorage extends NedbStorage {
  constructor(name) {
    super(new Nedb({ filename: `${name}.nedb`, autoload: true }));
  }

  async fill(items) {
    await this.remove();
    for (let item of items) {
      await this.insert({ _id: item.id, ...item });
    }
  }

  async getAll() {
    const items = await this.find({});
    for (let item of items) {
      item.id = item._id;
      delete item._id;
    }
    return items;
  }

  async add(item) {
    const newItem = await this.insert(item);
    newItem.id = newItem._id;
    return newItem;
  }

  async modify(item) {
    await this.update({ _id: item.id }, item);
  }
  
  async delete(id) {
    await this.remove({ _id: id });
  }
}