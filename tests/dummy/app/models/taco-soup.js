import DS from 'ember-data';
import { Model } from '@smart-stocker/pouch';

export default Model.extend({
  flavor: DS.attr('string'),
  ingredients: DS.hasMany('food-item')
});
