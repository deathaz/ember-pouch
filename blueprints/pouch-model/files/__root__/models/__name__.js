import { attr, belongsTo, hasMany } from '@ember-data/model';
import { Model } from '@smart-stocker/pouch';

export default class <%= camelizedModuleName %>Model extends Model {
  // @attr('string') name;
  // @belongsTo('author') author;
  // @hasMany('comments') comments;
}
